import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
  ResponseType,
} from "axios";
import config from "../constant/config";
import { RuntypeBase } from "runtypes/lib/runtype";
import { TypeValidationService } from "../../data/service";

export enum HttpRequestMethod {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT",
}

interface IHttpRequest<TBody> {
  readonly method: HttpRequestMethod;
  readonly path: string;
  readonly body?: TBody;
}

export interface IHttpError {
  readonly message: string;
  readonly status: number;
  readonly body?: Record<string, unknown>;
  readonly meta?: Record<string, unknown>;
}

export interface IHttpClient {
  request<TBody, TResponse>(
    requestOption: IHttpRequest<TBody>,
    runType?: RuntypeBase,
    multipart?: boolean,
    responeType?: ResponseType,
  ): Promise<TResponse>;
}

export class HttpClient implements IHttpClient {
  private API_BASE_URL = config.apiBaseURL;
  private _validator: TypeValidationService;
  constructor() {
    this._validator = new TypeValidationService();
  }

  private createHeaders(
    token?: string,
    multipart?: boolean,
  ): RawAxiosRequestHeaders {
    const header: RawAxiosRequestHeaders = {
      "Content-Type": multipart ? "multipart/form-data" : "application/json",
    };
    if (token) {
      header["Authorization"] = `Bearer ${token}`;
    }
    return header;
  }

  private buildConfig<TBody>(
    request: IHttpRequest<TBody>,
    multipart?: boolean,
    responeType?: ResponseType,
  ): AxiosRequestConfig<TBody> {
    const isRead = request.method === HttpRequestMethod.GET;
    const config: AxiosRequestConfig<TBody> = {
      url: request.path,
      method: request.method,
      params: isRead && request.body,
      data: isRead ? undefined : request.body,
      baseURL: this.API_BASE_URL,
      headers: this.createHeaders(undefined, multipart),
      responseType: responeType ? responeType : "json",
    };

    return config;
  }

  async request<TBody, TResponse>(
    requestOption: IHttpRequest<TBody>,
    runType?: RuntypeBase,
    multipart?: boolean,
    responeType?: ResponseType,
  ): Promise<TResponse> {
    const config = this.buildConfig<TBody>(
      requestOption,
      multipart,
      responeType,
    );
    const res = await axios.request<TResponse, AxiosResponse<TResponse>, TBody>(
      config,
    );

    if (runType) {
      this._validator.validate(runType, res.data);
    }

    return res.data;
  }
}
