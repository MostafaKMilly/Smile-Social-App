import React from "react";
import PropTypes from "prop-types";

function Logo({ width, height, ...props }) {
  return (
    <img
      src="/images/IT SMILE.svg"
      alt="logo"
      width={width || "100px"}
      height={height || "100px"}
      {...props}
    />
  );
}

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Logo;
