import { RuntypeBase } from "runtypes/lib/runtype";

export class TypeValidationService {
  validate<TObj>(type: RuntypeBase, object: TObj) {
    if (!type.guard(object)) {
      try {
        type.check(object);
      } catch (error) {
        console.warn(error);
      }
    }
  }
}
