import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlertMessage: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { addAlertMessage } = alertsSlice.actions;

export default alertsSlice.reducer;
