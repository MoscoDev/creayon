import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
const userdata = jwtDecode(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1vc2VzQHRlc3QuY29tIiwidXNlcm5hbWUiOiJtb3NlbnNlIiwiZmlyc3ROYW1lIjoibW9zZXMiLCJsYXN0TmFtZSI6IkF1ZHUiLCJwaG9uZSI6IjA5MDU4OTYxMDE2IiwiYWRkcmVzcyI6IjcsIG1lcmN5IHN0cmVldCIsIl9pZCI6IjYyZWVkNDVmNmM5MTk5ODlhZDk1ZmQ0YyIsImlhdCI6MTY2MDAwODE0NCwiZXhwIjoxNjYwMDExNzQ0fQ.hlDbEIXttWFrXqrgRC2AuzVYqjt5qPBY8SHCc3BbKvk"
);
const initialState = {
  value: userdata,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getUserData } = userSlice.actions;

export default userSlice.reducer;
