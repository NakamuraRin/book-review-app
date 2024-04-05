import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

const initialState = {
  isLogIn: cookie.get("token") !== undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogin = true;
    },
    signOut: (state) => {
      state.isLogin = false;
    },
  },
});

export const { logIn, signOut } = authSlice.actions;
