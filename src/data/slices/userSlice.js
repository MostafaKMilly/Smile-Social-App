import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
import { AUTH_TOKEN } from "../../constants";

const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));

let initialState = {
  info: {},
};

try {
  initialState.info = jwt_decode(token);
} catch (err) {
  console.log(err);
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      const token = action.payload;
      const info = jwt_decode(token);
      state.info = info;
    },
    resetUserInfo: (state) => {
      state.info = {};
    },
  },
});

export const { addUserInfo, resetUserInfo } = userSlice.actions;

export default userSlice.reducer;
