import { IHttpError } from "../driver/http";

export interface DataObj<TResponse> {
  data: TResponse;
}

export interface CommonAsyncCallback<TResponse> {
  onSuccess?: (res: TResponse) => void;
  onError?: (err: IHttpError) => void;
  onFinish?: () => void;
}
