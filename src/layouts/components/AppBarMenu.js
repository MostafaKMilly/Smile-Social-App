import {
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useNavigate } from "react-router-dom";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function AppBarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignup = () => {
    setAnchorEl(null);
    localStorage.removeItem("token");
    navigate("/access/login");
  };

  return (
    <Box>
      <IconButton
        sx={{ backgroundColor: "#ededed" }}
        size="small"
        disableRipple
        onClick={handleClick}
      >
        {open ? (
          <ArrowDropUpIcon fontSize="large" />
        ) : (
          <ArrowDropDownIcon fontSize="large" />
        )}
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={2}
      >
        <MenuItem onClick={handleClose} sx={{ columnGap: 1 }}>
          <ListItemText>تسجيل شكوى</ListItemText>
          <ListItemIcon>
            <RateReviewIcon />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleSignup} sx={{ columnGap: 1 }}>
          <ListItemText>تسجيل خروج</ListItemText>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default AppBarMenu;
