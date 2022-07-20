import React from "react";
import PropTypes from "prop-types";
import { Snackbar } from "@mui/material";

function CustomSnackbar({ message, onClose }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      color="error"
      onClose={onClose}
      message={message}
    />
  );
}

CustomSnackbar.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
};

export default CustomSnackbar;
