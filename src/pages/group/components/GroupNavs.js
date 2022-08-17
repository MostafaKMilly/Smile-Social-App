import { Chip, Stack } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function GroupNavs() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [, , , route] = pathname.split("/");

  const navs = [
    {
      label: "اسئلة واجوبة",
      link: "quizes",
    },
  ];

  return (
    <Stack direction="row" spacing={1} sx={{ overflow: "auto", mb: 2 }}>
      {navs.map((nav) => (
        <Chip
          label={nav.label}
          sx={{ fontFamily: "Cairo" }}
          clickable
          color={route === nav.link ? "primary" : "default"}
          onClick={() => {
            if (route === nav.link) {
              navigate(-1);
            } else {
              navigate(nav.link);
            }
          }}
        />
      ))}
    </Stack>
  );
}

export default GroupNavs;
