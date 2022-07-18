import React from "react";
import { Snackbar } from "@mui/material";
import PropTypes from "prop-types";

export function ErrorFallback({ error, componentStack, resetErrorBoundary }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      color="error"
      onClose={resetErrorBoundary}
      message={error}
    />
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.string,
  componentStack: PropTypes.string,
  resetErrorBoundary: PropTypes.func,
};
