import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Group from "@mui/icons-material/Group";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Delete } from "@mui/icons-material";
import WarningIcon from "@mui/icons-material/Warning";

function SettingsNavs() {
  const navigate = useNavigate();
  const { roleName } = useSelector((state) => state.user.info);

  const navs = [
    {
      label: "ادارة الطلاب",
      icon: <Group />,
      link: "/settings/manage-users",
      roles: ["Admin_"],
    },
    {
      label: "حذف الحساب",
      icon: <Delete />,
      link: "/settings/delete-account",
      roles: "*",
    },
    {
      label: "عرض الشكاوى",
      icon: <WarningIcon />,
      link: "/settings/view-complaines",
      roles: ["Admin_"],
    },
  ];

  const { pathname } = useLocation();

  return (
    <List>
      {navs.map((nav) => (
        <ListItem
          dense
          sx={{
            borderLeft: pathname === nav.link ? "2px solid #31d638" : "inherit",
            mb: 1,
            display:
              nav?.roles === "*" || nav?.roles?.includes(roleName)
                ? "flex"
                : "none",
          }}
        >
          <ListItemButton onClick={() => navigate(nav.link)}>
            <ListItemIcon>{nav.icon}</ListItemIcon>
            <ListItemText>{nav.label}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default SettingsNavs;
