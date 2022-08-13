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
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AUTH_TOKEN } from "../../constants";
import { useDispatch } from "react-redux";
import { resetUserInfo } from "../../data/slices/userSlice";

function AppBarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignout = () => {
    setAnchorEl(null);
    localStorage.removeItem(AUTH_TOKEN);
    dispatch(resetUserInfo());
    navigate("/access/login");
  };

  return (
    <Box>
      <IconButton
        sx={{ backgroundColor: "#f9f9f9" }}
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
        <MenuItem onClick={handleSignout} sx={{ columnGap: 1 }}>
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
