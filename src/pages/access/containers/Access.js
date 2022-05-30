import { Box, Paper } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

function Access() {
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
