import React from "react";
import { User } from "../../../../domain/model";
import { Text } from "../../atoms";

interface Props {
  user: User;
}

export const UserItem: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <>
      <Text text={`User: ${user.id}`} />
      <li>{user.name}</li>
      <li>{user.email}</li>
      <li>{user.tel}</li>
      <li>{user.company.name}</li>
    </>
  );
};
