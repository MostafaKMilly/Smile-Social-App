import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Container maxWidth={false}>
      <Outlet />
    </Container>
  );
}

export default Layout;
