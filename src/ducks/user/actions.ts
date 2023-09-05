import actionCreatorFactory from "typescript-fsa";
import { User } from "../../domain/model";
import { CommonAsyncCallback } from "../../core/types";

const actionCreator = actionCreatorFactory("@@User");

export const userActions = {
  getAllUsers: actionCreator.async<CommonAsyncCallback<User[]>, User[]>(
    "GET_ALL_USERS"
  ),
};
