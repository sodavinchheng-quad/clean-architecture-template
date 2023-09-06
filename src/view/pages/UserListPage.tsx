import React, { useEffect } from "react";
import { DispatchProp, connect } from "react-redux";
import { userActions } from "../../ducks/user";
import { UserList } from "../components/user";
import { StoreState } from "../../ducks/store";

const UserListPageComponent: React.FC<DispatchProp> = (props) => {
  const { dispatch } = props;

  useEffect(() => {
    dispatch(
      userActions.getAllUsers.started({
        onSuccess: (res) => console.log("Res: ", res),
        onError: (err) => console.log("Err: ", err),
      })
    );
  }, []);

  return <UserList />;
};

export const UserListPage = connect<{}, {}, {}, StoreState>((state) => ({}))(
  UserListPageComponent
);
