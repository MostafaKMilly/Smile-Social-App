import { Icon, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import StarIcon from "@mui/icons-material/Star";
import PropTypes from "prop-types";
import React from "react";

function GroupIcon({ label }) {
  const getIcon = () => {
    switch (label) {
      case "First":
        return (
          <Icon>
            <Typography color="white">1</Typography>
          </Icon>
        );
      case "Second":
        return (
          <Icon>
            <Typography color="white">2</Typography>
          </Icon>
        );
      case "Third":
        return (
          <Icon>
            <Typography color="white">3</Typography>
          </Icon>
        );
      case "Fourth":
        return (
          <Icon>
            <Typography color="white">4</Typography>
          </Icon>
        );
      case "Fifth":
        return (
          <Icon>
            <Typography color="white">5</Typography>
          </Icon>
        );
      case "Public":
        return <PublicIcon />;
      case "Special":
        return <StarIcon />;
      default:
        return <></>;
    }
  };

  return <>{getIcon()}</>;
}

GroupIcon.propTypes = {
  label: PropTypes.string,
};

export default GroupIcon;
