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
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./common/components/ErrorFallback";
import { setContext } from "@apollo/client/link/context";
import { AUTH_TOKEN } from "./constants";
import _ from "lodash";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const httpLink = createHttpLink({
  uri: "http://localhost:9000/graphql",
});

const authLink = setContext((req, { headers }) => {
  const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
  return {
    headers: {
      ...headers,
      authorization: !_.isEmpty(token) ? `bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Routes />
              </ErrorBoundary>
            </Router>
          </ThemeProvider>
        </Provider>
      </CacheProvider>
    </ApolloProvider>
  );
}

export default App;
