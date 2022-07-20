import { configureStore } from "@reduxjs/toolkit";
import errorSlice from "./slices/errorSlice";

export const store = configureStore({
  reducer: {
    error: errorSlice,
  },
});
