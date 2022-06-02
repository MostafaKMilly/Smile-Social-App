import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useNavigate } from "react-router-dom";

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
        <MenuItem onClick={handleClose}>تسجيل شكوى</MenuItem>
        <MenuItem onClick={handleSignup}>تسجيل خروج</MenuItem>
      </Menu>
    </Box>
  );
}

export default AppBarMenu;
