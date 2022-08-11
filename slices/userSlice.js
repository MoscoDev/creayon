import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const initialState = {
  value: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      const userdata = jwtDecode(action.payload);
      state.value = userdata;
    },
  },
});
export const { getUserData } = userSlice.actions;

export default userSlice.reducer;
