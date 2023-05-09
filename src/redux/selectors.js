import { createSelector } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const selectUsersCard = (state) => state.users.users;
export const selectPage = (state) => state.users.page;
export const selectAllUsersCard = (state) => state.users.allUsers;
export const selectStatusLoadMoreButton = (state) => state.users.isVisible;
export const selectIsLoading = (state) => state.users.isLoading;
export const selectUsersWithStatus = (state) => state.users.usersWithStatus;

export const selectFilter = (state) => state.filter;

export const selectVisibleCards = createSelector(
  [selectUsersCard, selectFilter],
  (cards, filter) => {
    if (filter === "all") {
      return cards;
    } else {
      const newCards = cards.filter((card) => card.isFollowing === filter);
      if (newCards.length === 0) {
        toast.info("User cards not found!");
      }
      return newCards;
    }
  }
);
