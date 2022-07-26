import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to={"/access"} replace />;
  }

  return props.children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
export default ProtectedRoute;
