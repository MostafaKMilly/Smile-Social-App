import React from "react";
import { Provider } from "react-redux";
import { store } from "./data";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes />
          </Router>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
