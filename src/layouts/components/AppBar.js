import React from "react";
import { AppBar as MuiAppBar, Box, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { Logo } from "../../common/components";
import NavigationButtons from "./NavigationButtons";
import AppBarMenu from "./AppBarMenu";
import { useLocation, useNavigate } from "react-router-dom";
import AddComplaintChip from "./AddComplaintChip";

function AppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

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
          <Box display="flex" alignItems="center" columnGap={2} zIndex={99}>
            <Logo
              width="60px"
              height="60px"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
            {pathname === "/" && <AddComplaintChip />}
          </Box>
          <NavigationButtons />
          <AppBarMenu />
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}

export default AppBar;
