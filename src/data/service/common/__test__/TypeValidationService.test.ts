import { UserRunType } from "../../../entity";
import { TypeValidationService } from "../TypeValidationService";

import users from "../../../../mock/users.json";

test("TypeValidationService validates types correctly", async () => {
  const validationService = new TypeValidationService();

  // Valid Type
  const isValid = validationService.validate(UserRunType, users[0]);
  expect(isValid).toEqual(true);

  // Invalid Type
  const isInvalid = validationService.validate(UserRunType, {
    ...users[0],
    username: null,
  });
  expect(isInvalid).toEqual(false);
});
