import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../store";

const selectUser = (state: StoreState) => state.user;
export const userSelectors = {
  getAllUsers: createSelector(selectUser, (user) => user.allUsers),
};
