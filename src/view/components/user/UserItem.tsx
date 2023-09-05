import React from "react";
import { User } from "../../../domain/model";

type Props = {
  user: User;
};

export const UserItem: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <>
      <p>User {user.id}</p>
      <li>{user.name}</li>
      <li>{user.email}</li>
      <li>{user.tel}</li>
      <li>{user.company.name}</li>
    </>
  );
};
