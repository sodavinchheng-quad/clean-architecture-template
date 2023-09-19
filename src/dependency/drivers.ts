import { HttpClient, IHttpClient } from "../core/driver/http";
import { IStorage, Storage } from "../core/driver/storage";

export interface IDriver {
  http: IHttpClient;
  storage: IStorage;
}

export default (): IDriver => {
  return {
    http: new HttpClient(),
    storage: new Storage(),
  };
};
