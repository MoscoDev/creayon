import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
  value: {
    _id: "",
    cartItems: [
    ],
    active: false,
    createdAt: "",
    updatedAt: "",
    __v: 0,
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartData: (state, action) => {
      state.value = action.payload;
    },

    increaseProductQuantity: (state, action) => {
      let products = state.value.cartItems;
      let product = products.find((item) => item._id == action.payload);
      product.quantity += 1;
       product.subtotal = product.quantity * product.price;
      console.log(products);

      state.value.cartItems = products;
    },
    decreaseProductQuantity: (state, action) => {
      let products = state.value.cartItems;
      let product = products.find((item) => item._id == action.payload);
      product.quantity == 1? product.quantity= 1 : product.quantity-= 1;
      product.subtotal = product.quantity * product.price
      console.log(products);

      state.value.cartItems = products;
    },
  },
});
export const { getCartData, increaseProductQuantity, decreaseProductQuantity } = cartSlice.actions;

export default cartSlice.reducer;
