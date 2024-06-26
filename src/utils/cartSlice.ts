import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartState, SubMenu } from "../types/types";

const initialState: CartState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state: CartState, action: PayloadAction<SubMenu>) => {
      // RTK internally uses ImmerJS
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;