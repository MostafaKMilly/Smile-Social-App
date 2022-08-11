import { configureStore } from "@reduxjs/toolkit";
import alertsSlice from "./slices/alerts";

export const store = configureStore({
  reducer: {
    alerts: alertsSlice,
  },
});
