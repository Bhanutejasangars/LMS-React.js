import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userLoggedIn: null,
    usersData: [],
  },
  reducers: {
    registerUser: (state, action) => {
      state.userLoggedIn = null;
      state.usersData = action.payload;
      localStorage.setItem("usersData", JSON.stringify(action.payload));
    },
    loggedUser: (state, action) => {
      state.userLoggedIn = action.payload;
      localStorage.setItem("LoggedUser", JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.userLoggedIn = null;
      localStorage.setItem("LoggedUser", JSON.stringify(""));
    },
  },
});

export const { registerUser, loggedUser, logoutUser } = userSlice.actions;
export default userSlice;
