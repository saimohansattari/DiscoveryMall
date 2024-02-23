import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const IndexItem = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (IndexItem >= 0) {
        state.cartItem[IndexItem].cartQuantity += 1;
        toast.info("Increased Quantity", {
          position: "top-right",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
        toast.success(`${action.payload.ProductName} added To Cart`, {
          position: "top-right",
        });
      }

      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
