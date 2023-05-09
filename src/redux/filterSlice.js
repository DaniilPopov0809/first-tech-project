import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    filterCard(state, action) {
    //   localStorage.setItem(`filter`, JSON.stringify(action.payload ?? "all"));

      return action.payload 
    //   ?? "all";
    },
  },
});

export const { filterCard } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
