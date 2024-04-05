import { create } from "zustand";

export type Item = {
  name: string;
  price: number;
  amount: number;
  image: string;
};

type State = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (item: Item) => void;
};

const useShoppingCartStore = create<State>((set) => ({
  items: [],
  addItem: (newItem) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.name === newItem.name,
      );
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.name === newItem.name
              ? { ...item, amount: item.amount + newItem.amount }
              : item,
          ),
        };
      }

      return {
        items: [...state.items, newItem],
      };
    });
  },
  removeItem: (item) =>
    set((state) => ({
      items: state.items.filter((i) => i.name !== item.name),
    })),
}));

export default useShoppingCartStore;
