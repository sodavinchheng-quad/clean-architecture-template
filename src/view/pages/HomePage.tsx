import React from "react";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <>
      <Link to="/users">Users</Link>
    </>
  );
};
