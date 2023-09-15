import { connect } from "react-redux";
import { CommonAsyncCallback } from "../../../../core/types";
import { User } from "../../../../domain/model";
import { StoreState } from "../../../ducks/store";
import { userActions, userSelectors } from "../../../ducks/user";
import { UserListPageComponent } from "./UserListPageComponent";

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
