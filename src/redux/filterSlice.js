import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    filterCard(state, action) {
      return action.payload;
    },
  },
});

export const { filterCard } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
