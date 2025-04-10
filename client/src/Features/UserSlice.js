import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Exampledata";
import axios from "axios";

const initialState = { value: UsersData }; //list of user is an object with empty array as initial value

//create the thunk
export const registerUser = createAsyncThunk();

const userSlice = createSlice({
  name: "user",
  initialState, // the same name that we write on the const above
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.email !== action.payload);
    },
    updateUser: (state, action) => {
      state.value.map((user) => {
        //iterate the  array and compare the email with the email from the payload

        if (user.email === action.payload.email) {
          user.name = action.payload.name;

          user.password = action.payload.password;
        }
      });
    },
  },
});
export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
