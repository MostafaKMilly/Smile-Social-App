import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AppBar from "./components/AppBar";
import BottomNavigationButtons from "./components/BottomNavigationButtons";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/access/login");
    }
  }, [navigate]);

  return (
    <Box>
      <AppBar />
      <Container maxWidth={false}>
        <Outlet />
        <BottomNavigationButtons />
      </Container>
    </Box>
  );
}

export default Layout;
