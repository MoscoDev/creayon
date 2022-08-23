import { createSlice } from "@reduxjs/toolkit";


const initialState = {
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
    
  },
});
export const { getCartData } = cartSlice.actions;

export default cartSlice.reducer;
