import React from "react";
import { useRoutes } from "react-router-dom";
import { HomePage, NotFoundPage, UserListPage } from "./pages";

export const RouteConfig: React.FC = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/users", element: <UserListPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]);

  return routes;
};
