import { createSlice } from "@reduxjs/toolkit";
import { fetchUserCards, enableFollow, disableFollow } from "./operation";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  page: 1,
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

  reducers: {
    nextPage (state)  {
      state.page = state.page + 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCards.pending, handlePending)
      .addCase(fetchUserCards.fulfilled, (state, action) => {
        if (action.payload.length === 0) {
          alert('Карточек больше нет!');
        }
        state.isLoading = false;
        state.error = null;
        state.users =  [...state.users, ...action.payload];
      })
      .addCase(fetchUserCards.rejected, handleRejected)
      .addCase(enableFollow.pending, handlePending)
      .addCase(enableFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.users = state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              followers: user.followers + 1,
            };
          }
          return user;
        });
      })
      .addCase(enableFollow.rejected, handleRejected)
      .addCase(disableFollow.pending, handlePending)
      .addCase(disableFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.users = state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              followers: user.followers - 1,
            };
          }
          return user;
        });
      })
      .addCase(disableFollow.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
export const { nextPage } = usersSlice.actions;