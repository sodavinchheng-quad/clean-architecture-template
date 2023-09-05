import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions, userSelectors } from "../../ducks/user";
import { UserList } from "../components";

export const UserListPage: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(userSelectors.getAllUsers);

  useEffect(() => {
    dispatch(
      userActions.getAllUsers.started({
        onSuccess: (res) => console.log("Res: ", res),
        onError: (err) => console.log("Err: ", err),
      })
    );
  }, []);

  return <UserList users={users} />;
};
