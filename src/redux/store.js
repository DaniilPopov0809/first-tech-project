import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersCardSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
