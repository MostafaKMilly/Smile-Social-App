import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BottomNavigationButtons() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navs = [
    {
      label: "الرئيسية",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      label: "المجموعات",
      icon: <GroupsIcon />,
      link: "/groups",
    },
    {
      label: "المحاضرات",
      icon: <FileCopyIcon />,
      link: "/lectures",
    },
    {
      label: "ملفي الشخصي",
      icon: <PersonIcon />,
      link: "/profile",
    },
  ];
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={2}
    >
      <BottomNavigation
        value={pathname}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        {navs.map((nav) => (
          <BottomNavigationAction
            key={nav.link}
            label={nav.label}
            value={nav.link}
            icon={nav.icon}
            onClick={() => navigate(nav.link)}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNavigationButtons;
