import { Action, ActionCreator, AnyAction, isType } from "typescript-fsa";
import { call } from "typed-redux-saga";
import { ForkEffect, takeEvery, takeLatest } from "redux-saga/effects";

function* handleCommonFsaAction<T>(
  action: AnyAction,
  ac: ActionCreator<T>,
  fn: (a: Action<T>) => any
) {
  if (isType(action, ac)) {
    yield* call(fn, action);
  }
}

export function takeEveryFsa<T>(
  ac: ActionCreator<T>,
  fn: (a: Action<T>) => any
): ForkEffect {
  return takeEvery(ac.type, function* (action: AnyAction) {
    yield handleCommonFsaAction(action, ac, fn);
  });
}

export function takeLatestFsa<T>(
  ac: ActionCreator<T>,
  fn: (a: Action<T>) => any
): ForkEffect {
  return takeLatest(ac.type, function* (action: AnyAction) {
    yield handleCommonFsaAction(action, ac, fn);
  });
}
