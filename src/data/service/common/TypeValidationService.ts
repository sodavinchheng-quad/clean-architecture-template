import { RuntypeBase } from "runtypes/lib/runtype";

export class TypeValidationService {
  validate<TObj>(type: RuntypeBase, object: TObj): boolean {
    const isValid = type.guard(object);

    if (!isValid) {
      try {
        type.check(object);
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn(error);
        }
      }
    }

    return isValid;
  }
}
