import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

function NavigationButtons() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const navs = [
    {
      icon: <HomeIcon />,
      link: "/",
    },
    {
      icon: <GroupsIcon />,
      link: "/groups",
    },
    {
      icon: <FileCopyIcon />,
      link: "/lectures",
    },
    {
      icon: <PersonIcon />,
      link: "/profile",
    },
  ];

  return (
    <NavigationButtonsLayout>
      {navs.map((nav) => (
        <IconButton
          key={nav.link}
          color={nav.link === pathname ? "primary" : "default"}
          size="large"
          onClick={() => navigate(nav.link)}
        >
          {nav.icon}
        </IconButton>
      ))}
    </NavigationButtonsLayout>
  );
}

const NavigationButtonsLayout = styled(Box)(
  sx({
    display: {
      xs: "none",
      sm: "flex",
    },
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 7,
  })
);

export default NavigationButtons;
