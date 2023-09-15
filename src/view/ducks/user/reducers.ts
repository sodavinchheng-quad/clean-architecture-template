import { Action } from "@reduxjs/toolkit";
import { UserState } from "./types";
import { userActions } from "./actions";
import { isType } from "typescript-fsa";

const initialState: UserState = {
  allUsers: [],
};

export function UserReducer(state = initialState, action: Action): UserState {
  if (isType(action, userActions.getAllUsers.done)) {
    return {
      ...state,
      allUsers: action.payload.result,
    };
  }

  return state;
}
