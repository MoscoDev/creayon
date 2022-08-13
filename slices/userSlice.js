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
    updateUserData: (state, action)=>{
      state.value = action.payload;
    }

  },
});
export const { getUserData, updateUserData } = userSlice.actions;

export default userSlice.reducer;
