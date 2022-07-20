import React from "react";
import PropTypes from "prop-types";
import CustomSnackbar from "./CustomSnackbar";

export function ErrorFallback({ error, resetErrorBoundary }) {
  return <CustomSnackbar message={error} onClose={resetErrorBoundary} />;
}

ErrorFallback.propTypes = {
  error: PropTypes.string,
  resetErrorBoundary: PropTypes.func,
};
