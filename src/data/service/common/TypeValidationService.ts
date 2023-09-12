import { RuntypeBase } from "runtypes/lib/runtype";

export class TypeValidationService {
  validate<TObj>(type: RuntypeBase, object: TObj): boolean {
    const isValid = type.guard(object);

    if (!isValid) {
      try {
        type.check(object);
      } catch (error) {
        console.warn(error);
      }
    }

    return isValid;
  }
}
