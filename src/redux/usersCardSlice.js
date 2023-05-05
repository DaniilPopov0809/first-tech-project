import { createSlice } from "@reduxjs/toolkit";
import { fetchUserCards } from "./operation";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchUserCards.pending, handlePending);
    builder.addCase(fetchUserCards.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.users = action.payload;
    });
    builder.addCase(fetchUserCards.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
