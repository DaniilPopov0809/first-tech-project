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
      //     state.users = state.users.map((user) => {
      //       console.log(action);
      //       if (user.id === action.payload) {
      //         console.log('I here');
      //         return {
      //           ...user,
      //           followers: user.followers + 1,
      //         };
      //       }
      //       console.log(user.id);
      //       return user;
      //     });
      //   },
    // increment (state, action)  {
    //   state.users = state.users.map((user) => {
    //     console.log(action);
    //     if (user.id === action.payload) {
    //       console.log('I here');
    //       return {
    //         ...user,
    //         followers: user.followers + 1,
    //       };
    //     }
    //     console.log(user.id);
    //     return user;
    //   });
    // },
  //   decrement (state, action)  {
  //     state.users = state.users.map((user) => {
  //       if (user.id === action.payload) {
  //         return {
  //           ...user,
  //           followers: user.followers - 1,
  //         };
  //       }
  //       return user;
  //     });
  //   },
  },

  extraReducers: (builder) => {
    builder
      // .addCase(fetchUserCards.pending, handlePending)
      .addCase(fetchUserCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(state.users.length)
        state.users =  [...state.users, ...action.payload];
      })
      // .addCase(fetchUserCards.rejected, handleRejected)
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
// export const { increment, decrement } = usersSlice.actions;

export const { nextPage } = usersSlice.actions;