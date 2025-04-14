import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Exampledata";
import axios from "axios";

// const initialState = { value: UsersData }; //list of user is an object with empty array as initial value
const initialState = {
  user: {},

  isLoading: false,

  isSuccess: false,

  isError: false,
};
//create the thunk
export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (userData) => {
    try {
      const response = await axios.post("http://localhost:3001/registerUser", {
        name: userData.name,

        email: userData.email,

        password: userData.password,
      });
      console.log(response);
      const user = response.data.user;
      return user;
    } catch (error) {
      console.log(error);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isSuccess = true;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.isError = true;
    });
  },
});
export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
