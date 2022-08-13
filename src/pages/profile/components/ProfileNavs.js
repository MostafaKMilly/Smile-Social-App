import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Person from "@mui/icons-material/Person";
import Password from "@mui/icons-material/Password";
import { useLocation, useNavigate } from "react-router-dom";

function ProfileNavs() {
  const navigate = useNavigate();
  const navs = [
    {
      label: "تعديل الملف الشخصي",
      icon: <Person />,
      link: "/profile",
    },
    {
      label: "تغيير كلمة السر",
      icon: <Password />,
      link: "/profile/changePassword",
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

export default ProfileNavs;
