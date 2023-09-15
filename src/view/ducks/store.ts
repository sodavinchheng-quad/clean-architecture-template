import { combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { UserReducer, userSaga } from "./user";
import { legacy_createStore as createStore } from "redux";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  user: UserReducer,
});

const store = createStore(reducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(function* () {
  yield all([fork(userSaga)]);
});

export default store;

export type StoreState = ReturnType<typeof store.getState>;
