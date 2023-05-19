export const filterStore = (store, id) => {
    if (!store) {
        return false;
      }
      const index = store.find((el) => el === id);
      if (index) {
        return true;
      }
      return false;
} 