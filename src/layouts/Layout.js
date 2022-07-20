import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../constants";
import AppBar from "./components/AppBar";
import BottomNavigationButtons from "./components/BottomNavigationButtons";
import _ from "lodash";
import { useLocalStorage } from "../common/hooks";

function Layout() {
  const navigate = useNavigate();
  const [token] = useLocalStorage(AUTH_TOKEN, "");

  useEffect(() => {
    if (_.isEmpty(token)) {
      navigate("/access/login");
    }
  }, [navigate, token]);

  return (
    <Box>
      <AppBar />
      <Container
        maxWidth={false}
        disableGutters
        sx={{ maxWidth: "730px", mt: 2, pb: 4 }}
      >
        <Outlet />
      </Container>
      <BottomNavigationButtons />
    </Box>
  );
}

export default Layout;
