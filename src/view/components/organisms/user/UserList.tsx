import React from "react";

import { connect } from "react-redux";
import { User } from "../../../../domain/model";
import { UserItem } from "../../molecules";
import { StoreState } from "../../../../ducks/store";

interface PropsFromParent {}

interface PropsFromStore {
  users: User[];
}

const UserListComponent: React.FC<PropsFromParent & PropsFromStore> = (
  props
) => {
  const { users } = props;

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
