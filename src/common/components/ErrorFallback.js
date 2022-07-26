import React from "react";
import PropTypes from "prop-types";
import { Alert, IconButton, Snackbar } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={true}
      onClose={resetErrorBoundary}
    >
      <Alert
        severity="error"
        onClose={resetErrorBoundary}
        sx={{ alignItems: "center" }}
        action={
          <IconButton onClick={resetErrorBoundary}>
            <ReplayIcon />
          </IconButton>
        }
      >
        {error.message}
      </Alert>
    </Snackbar>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.object,
  resetErrorBoundary: PropTypes.func,
};
