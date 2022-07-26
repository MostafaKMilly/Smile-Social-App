import { Box, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Access() {
  const location = useLocation();
  const navigate = useNavigate();
  const [, , child] = location.pathname.split("/");
  const defaultRoute = "/access/login";

  useEffect(() => {
    if (!child) {
      navigate(defaultRoute, { replace: true });
    }
  }, [child, navigate]);

  return (
    <Box className="accessContainer">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "inherit", width: "inherit" }}
      >
        <Paper sx={{ width: "450px", height: "650px" }} elevation={2} square>
          <Outlet />
        </Paper>
      </Box>
    </Box>
  );
}

export default Access;
