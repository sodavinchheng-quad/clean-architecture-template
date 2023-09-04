import endpoint from "../../../core/constant/endpoint";
import { HttpRequestMethod, IHttpClient } from "../../../core/driver/http";
import { User } from "../../../domain/model";
import { IUserDataSource } from "./UserDataSource";

export class UserApiDataSource implements IUserDataSource {
  private _httpClient;
  constructor(httpClient: IHttpClient) {
    this._httpClient = httpClient;
  }

  async getAllUsers() {
    return await this._httpClient.request<{}, User[]>({
      method: HttpRequestMethod.GET,
      path: endpoint.user,
    });
  }

  async getUserById(id: number) {
    return await this._httpClient.request<{}, User>({
      method: HttpRequestMethod.GET,
      path: endpoint.user + "/" + id,
    });
  }
}
