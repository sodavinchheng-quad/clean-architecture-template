import endpoint from "../../../core/constant/endpoint";
import HttpClient, { HttpRequestMethod } from "../../../core/driver/http";
import { User } from "../../../domain/model";
import { IUserDataSource } from "./UserDataSource";

export class UserApiDataSource implements IUserDataSource {
  private _httpClient;
  constructor() {
    this._httpClient = new HttpClient();
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
