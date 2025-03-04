import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] }; //list of user is an object with empty array as initial value

const userSlice = createSlice({
  name: "user",
  initialState, // the same name that we write on the const above
  reducers: {},
});
export default userSlice.reducer;
