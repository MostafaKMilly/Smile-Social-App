import React from "react";
import { Provider } from "react-redux";
import { store } from "./data";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import { theme } from "./theme";
import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import "./global.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const client = new ApolloClient({
  uri: "http://localhost:400dd0/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <CacheProvider value={cacheRtl}>
        <Provider store={store}>
          <ThemeProvider theme={responsiveFontSizes(theme)}>
            <Router>
              <CssBaseline />
              <Routes />
            </Router>
          </ThemeProvider>
        </Provider>
      </CacheProvider>
    </ApolloProvider>
  );
}

export default App;
