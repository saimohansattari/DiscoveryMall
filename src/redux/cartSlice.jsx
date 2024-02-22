import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const IndexItem = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );

      if (IndexItem >= 0) {
        state.cartItem[IndexItem].cartQuantity += 1;
      }

      const tempProduct = { ...action.payload, cartQuantity: 1 };
      state.cartItem.push(tempProduct);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
