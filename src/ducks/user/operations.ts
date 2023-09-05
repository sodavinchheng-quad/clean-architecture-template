import { call, put } from "typed-redux-saga";
import { takeLatestFsa } from "../operations";
import { userActions } from "./actions";
import dependency from "../../dependency";
import { User } from "../../domain/model";

export function* userSaga() {
  const { getAllUsersUseCase } = dependency.user;

  yield takeLatestFsa(userActions.getAllUsers.started, function* (action) {
    try {
      const users: User[] = yield call(() =>
        getAllUsersUseCase.execute().then((res) => res)
      );
      yield* put(
        userActions.getAllUsers.done({
          params: action.payload,
          result: users,
        })
      );
      if (action.payload.onSuccess) {
        action.payload.onSuccess(users);
      }
    } catch (err: any) {
      if (action.payload.onError) {
        action.payload.onError(err);
      }
    }
  });
}
