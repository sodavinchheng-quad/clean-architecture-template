import { connect } from "react-redux";
import { userActions, userSelectors } from "../../../ducks/user";
import { StoreState } from "../../../ducks/store";
import { User } from "../../../domain/model";
import { UserListPageComponent } from "./UserListPageComponent";
import { CommonAsyncCallback } from "../../../core/types";

interface PropsFromStore {
  users: User[];
}

interface PropsFromDispatch {
  getAllUsers: (callback: CommonAsyncCallback<User[]>) => void;
}

export type UserListPageProps = PropsFromStore & PropsFromDispatch;

export const UserListPage = connect<
  PropsFromStore,
  PropsFromDispatch,
  {},
  StoreState
>(
  (state) => ({
    users: userSelectors.getAllUsers(state),
  }),
  (dispatch) => ({
    getAllUsers: (callback) =>
      dispatch(userActions.getAllUsers.started(callback)),
  }),
)(UserListPageComponent);
