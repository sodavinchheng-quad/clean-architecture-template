import { Action, ActionCreator, AnyAction, isType } from "typescript-fsa";
import { call } from "typed-redux-saga";
import { ForkEffect, takeEvery, takeLatest } from "redux-saga/effects";
import { IUseCase } from "../domain/usecase/Usecase";
import { CommonHttpResponse } from "../core/types";

function* handleCommonFsaAction<T>(
  action: AnyAction,
  ac: ActionCreator<T>,
  fn: (a: Action<T>) => any,
) {
  if (isType(action, ac)) {
    yield* call(fn, action);
  }
}

export function takeEveryFsa<T>(
  ac: ActionCreator<T>,
  fn: (a: Action<T>) => any,
): ForkEffect {
  return takeEvery(ac.type, function* (action: AnyAction) {
    yield handleCommonFsaAction(action, ac, fn);
  });
}

export function takeLatestFsa<T>(
  ac: ActionCreator<T>,
  fn: (a: Action<T>) => any,
): ForkEffect {
  return takeLatest(ac.type, function* (action: AnyAction) {
    yield handleCommonFsaAction(action, ac, fn);
  });
}

export function* executeUseCase<TArgs, TResponse>(
  usecase: IUseCase<TArgs, TResponse>,
  args: TArgs,
) {
  const { response, error }: CommonHttpResponse<TResponse> = yield call(() =>
    usecase
      .execute(args)
      .then((response) => ({ response }))
      .catch((error) => ({ error })),
  );

  return { response, error };
}
