import React from "react";
import { User } from "../../../../domain/model";
import { Button, Text } from "../../atoms";

interface Props {
  user: User;
  onClick: () => void;
}

export const UserItem: React.FC<Props> = (props) => {
  const { user, onClick } = props;

  return (
    <>
      <Text text={`User: ${user.id}`} />
      <li>{user.name}</li>
      <li>{user.email}</li>
      <li>{user.tel}</li>
      <li>{user.company.name}</li>
      <Button text="Details" onClick={onClick} />
    </>
  );
};
