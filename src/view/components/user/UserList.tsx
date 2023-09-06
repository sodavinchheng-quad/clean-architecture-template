import React from "react";
import { User } from "../../../domain/model";
import { UserItem } from "./UserItem";
import { connect, DispatchProp } from "react-redux";
import { StoreState } from "../../../ducks/store";

interface PropsFromParent {}

interface PropsFromStore {
  users: User[];
}

const UserListComponent: React.FC<
  PropsFromParent & PropsFromStore & DispatchProp
> = (props) => {
  const { users, dispatch } = props;

  return (
    <>
      {users.map((user, i) => (
        <UserItem key={`${user.id}-${i}`} user={user} />
      ))}
    </>
  );
};

export const UserList = connect<PropsFromStore, {}, {}, StoreState>(
  (state) => ({
    users: state.user.allUsers,
  })
)(UserListComponent);
