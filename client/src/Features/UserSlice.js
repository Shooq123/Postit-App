import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Exampledata";

const initialState = { value: UsersData }; //list of user is an object with empty array as initial value

const userSlice = createSlice({
  name: "user",
  initialState, // the same name that we write on the const above
  reducers: {},
});
export default userSlice.reducer;
