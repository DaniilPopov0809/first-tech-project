import { toast } from "react-toastify";

export const filterStore = (store, id) => {
  if (!store) {
    return false;
  }
  const index = store.find((el) => el === id);
  if (index) {
    return true;
  }
  return false;
};

export const filterStatus = (cards, filter) => {
  const store = JSON.parse(localStorage.getItem(`following`));
  if (filter === "all") {
    return cards;
  } else if (filter === "follow") {
    const newCards = cards.filter(
      (card) => !store.find((el) => el === card.id)
    );
    if (newCards.length === 0) {
      toast.info("User cards not found!");
    }
    return newCards;
  } else if (filter === "following") {
    const newCards = cards.filter((card) => store.find((el) => el === card.id));
    if (newCards.length === 0) {
      toast.info("User cards not found!");
    }
    return newCards;
  }
};
