import { Box, CircularProgress, circularProgressClasses } from "@mui/material";
import React from "react";

function Spinner(props) {
  return (
    <Box sx={{ position: "relative", textAlign: "center", mt: 2 }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.main
              : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          right: 0,
          margin: "auto",
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

export default Spinner;
