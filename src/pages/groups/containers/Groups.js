import { Grid } from "@mui/material";
import React from "react";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useUserGroups } from "../hooks/useUserGroups";
import { GroupCard } from "../components";

function Groups() {
  const navigate = useNavigate();
  const { groups } = useUserGroups();

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ maxWidth: "730px", mt: 2, pb: 4 }}
    >
      <Grid container columnSpacing={4} rowSpacing={4}>
        {groups.map((group) => (
          <Grid key={group} item xs={6}>
            <GroupCard label={group} onClick={() => navigate(group)} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Groups;
