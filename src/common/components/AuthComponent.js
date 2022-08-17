import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function AuthComponent({ hide, children, show }) {
  const { roleName } = useSelector((state) => state.user.info);

  if (hide.includes(roleName) || !show.includes(roleName)) {
    return <></>;
  }

  return children;
}

AuthComponent.defaultProps = {
  hide: [],
  show: [],
};

AuthComponent.propTypes = {
  hide: PropTypes.array,
  show: PropTypes.array,
  children: PropTypes.object,
};

export default AuthComponent;
