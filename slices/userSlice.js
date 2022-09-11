import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
  value: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      const userdatafromtoken = jwtDecode(action.payload);
      state.value = userdatafromtoken;
    },
    updateUserData: (state, action) => {
      state.value = action.payload;
    },
    updateUserFavourites: (state, action) => {
      state.value.favourites = action.payload;
    },
  },
});
export const { getUserData, updateUserData, updateUserFavourites } = userSlice.actions;

export default userSlice.reducer;
