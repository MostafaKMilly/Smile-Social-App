import React from "react";
import { AppBar as MuiAppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { Logo } from "../../common/components";
import NavigationButtons from "./NavigationButtons";
import AppBarMenu from "./AppBarMenu";
import { useNavigate } from "react-router-dom";

function AppBar() {
  const navigate = useNavigate();
  return (
    <MuiAppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "1px solid #bfccc0" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          variant="dense"
          sx={{ justifyContent: "space-between" }}
        >
          <Logo
            width="60px"
            height="60px"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
          <NavigationButtons />
          <AppBarMenu />
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
