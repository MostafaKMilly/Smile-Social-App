import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../constants";
import AppBar from "./components/AppBar";
import BottomNavigationButtons from "./components/BottomNavigationButtons";
import _ from "lodash";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (_.isEmpty(localStorage.getItem(AUTH_TOKEN))) {
      navigate("/access/login");
    }
  }, [navigate]);

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
