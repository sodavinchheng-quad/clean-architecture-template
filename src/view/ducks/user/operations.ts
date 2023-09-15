import { put } from "typed-redux-saga";
import { executeUseCase, takeLatestFsa } from "../operations";
import { userActions } from "./actions";
import dependency from "../../../dependency";

export function* userSaga() {
  const { getAllUsersUseCase } = dependency.user;

  yield takeLatestFsa(userActions.getAllUsers.started, function* (action) {
    const { response, error } = yield* executeUseCase(getAllUsersUseCase, {});

    if (!response || error) {
      if (action.payload.onError && error) {
        action.payload.onError(error);
      }
      return;
    }

    yield* put(
      userActions.getAllUsers.done({
        params: action.payload,
        result: response,
      }),
    );
    if (action.payload.onSuccess) {
      action.payload.onSuccess(response);
    }
  });
}
