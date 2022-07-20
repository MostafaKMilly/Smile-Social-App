import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorSlice: {
    message: "",
  },
};

const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.message = action.message;
    },
  },
});

export const { setErrorMessage } = errorsSlice.actions;

export default errorsSlice.reducer;
