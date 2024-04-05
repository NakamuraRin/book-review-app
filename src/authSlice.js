import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";

const cookie = new Cookies();

const initialState = {
  isLogin: cookie.get("token") !== undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.isLogin = true;
    },
    signOut: (state) => {
      state.isLogin = false;
    },
  },
});

export const { Login, signOut } = authSlice.actions;
