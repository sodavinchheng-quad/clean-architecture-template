import React from "react";
import { User } from "../../../../domain/model";
import { UserItem } from "../../molecules";

interface Props {
  users: User[];
  onClick: (id: number) => void;
}

export const UserList: React.FC<Props> = (props) => {
  const { users, onClick } = props;

  return (
    <>
      {users.map((user, i) => (
        <UserItem
          key={`${user.id}-${i}`}
          user={user}
          onClick={() => onClick(user.id)}
        />
      ))}
    </>
  );
};
