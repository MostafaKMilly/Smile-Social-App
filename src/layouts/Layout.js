import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { ProtectedRoute } from "../common/components";
import AppBar from "./components/AppBar";
import BottomNavigationButtons from "./components/BottomNavigationButtons";

function Layout() {
  return (
    <ProtectedRoute>
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
    </ProtectedRoute>
  );
}

export default Layout;
