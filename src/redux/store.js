import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersCardSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filterReducer,
  },
});
