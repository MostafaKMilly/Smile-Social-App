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
import SettingsIcon from "@mui/icons-material/Settings";
import { useSignout } from "../../common/hooks/useSignout";

function AppBarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const { signout } = useSignout();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignout = () => {
    setAnchorEl(null);
    signout();
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
        <MenuItem
          onClick={() => {
            navigate("settings");
          }}
          sx={{ columnGap: 1 }}
        >
          <ListItemText>الاعدادات</ListItemText>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
        </MenuItem>
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
