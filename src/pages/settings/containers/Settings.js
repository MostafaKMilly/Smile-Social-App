import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SettingsNavs from "../components/SettingsNavs";

function Setting() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [, , route] = pathname.split("/");

  useEffect(() => {
    if (!route) {
      navigate("delete-account");
    }
  }, [navigate, route]);

  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Grid container columnSpacing={5} rowSpacing={2}>
        <Grid item xs={12} sm="auto">
          <SettingsNavs />
        </Grid>
        <Grid item xs={12} sm>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Setting;
