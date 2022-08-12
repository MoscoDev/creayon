import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

let user = jwtDecode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJsZXNzaW5nQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiQmxlc3NpbmciLCJmaXJzdE5hbWUiOiJCbGVzc2luZyAiLCJsYXN0TmFtZSI6Ik9kdWtveWEiLCJwaG9uZSI6IisyMzQ4MTMxODMzMTQ4IiwiX2lkIjoiNjJmMjdiZWRlYmVlZDQ5ZjU2MmMwMzkxIiwiaWF0IjoxNjYwMjQ1NjE5LCJleHAiOjE2NjAyNDkyMTl9.-auIjRrdU9k3m1oBYWePLvegP1JKA_Rp0LfgpGokKeA");
const initialState = {
  value: user
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
