import React, { useEffect } from "react";
import { DispatchProp, connect } from "react-redux";
import { userActions, userSelectors } from "../../ducks/user";
import { StoreState } from "../../ducks/store";
import { UserList } from "../components";
import { User } from "../../domain/model";

interface PropsFromStore {
  users: User[];
}

const UserListPageComponent: React.FC<PropsFromStore & DispatchProp> = (
  props,
) => {
  const { users, dispatch } = props;

  useEffect(() => {
    if (users.length === 0) {
      dispatch(
        userActions.getAllUsers.started({
          onSuccess: (res) => console.log("Res: ", res),
          onError: (err) => console.log("Err: ", err),
        }),
      );
    }
  }, []);

  return <UserList users={users} />;
};

export const UserListPage = connect<PropsFromStore, {}, {}, StoreState>(
  (state) => ({
    users: userSelectors.getAllUsers(state),
  }),
)(UserListPageComponent);
