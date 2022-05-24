import React from "react";
import { Provider } from "react-redux";
import { store } from "./data";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { theme } from "./theme";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={createTheme(theme)}>
          <Router>
            <Routes />
          </Router>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
