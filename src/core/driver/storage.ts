import CryptoJS from "crypto-js";
import { LocalStorageKey } from "../constant/storage";

export interface IStorage {
  get(name: LocalStorageKey): string | undefined;
  set(name: LocalStorageKey, value: string): void;
  remove(name: string): void;
}

export class Storage implements IStorage {
  get(name: LocalStorageKey): string | undefined {
    try {
      const hash = localStorage.getItem(name) ?? "";
      const decipher = CryptoJS.AES.decrypt(
        hash,
        process.env.REACT_APP_SECRET as string
      );
      const res = decipher.toString(CryptoJS.enc.Utf8);
      return res;
    } catch (e) {
      return undefined;
    }
  }

  set(name: LocalStorageKey, value: string): void {
    try {
      const encryptedValue = CryptoJS.AES.encrypt(
        value,
        process.env.REACT_APP_SECRET as string
      );
      localStorage.setItem(name, encryptedValue.toString());
    } catch (e) {
      console.warn("Unable to save item", e);
    }
  }

  remove(name: LocalStorageKey): void {
    try {
      localStorage.removeItem(name);
    } catch (e) {
      console.warn("Unable to remove item", e);
    }
  }
}
