import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("token"));
    if (!localStorage.getItem("token")) {
      navigate("/access/login");
    }
  }, [navigate]);

  return (
    <Container maxWidth={false}>
      <Outlet />
    </Container>
  );
}

export default Layout;
