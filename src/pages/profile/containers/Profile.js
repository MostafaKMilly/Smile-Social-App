import React from "react";
import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { ProfileNavs } from "../components";

function Profile() {
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Grid container columnSpacing={5} rowSpacing={2}>
        <Grid item xs={12} sm="auto">
          <ProfileNavs />
        </Grid>
        <Grid item xs={12} sm>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Profile;
