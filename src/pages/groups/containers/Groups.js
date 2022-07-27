import {
  Box,
  CardActionArea,
  Grid,
  Icon,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import { Container, styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const IconLayout = styled(Box)({
  borderRadius: "50%",
  background: "#302D2D",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& *": {
    color: "white",
    fontSize: "35px !important",
    height: "fit-content !important",
  },
  height: 60,
  width: 60,
});

function Groups() {
  const navigate = useNavigate();
  const groups = [
    {
      label: "السنة الاولى",
      nav: "234/first-year",
      icon: (
        <Icon>
          <Typography color="white">1</Typography>
        </Icon>
      ),
    },
    {
      label: "السنة الثانية",
      nav: "234/second-year",
      icon: (
        <Icon>
          <Typography color="white">2</Typography>
        </Icon>
      ),
    },
    {
      label: "السنة الثالثة",
      nav: "234/third-year",
      icon: (
        <Icon>
          <Typography color="white">3</Typography>
        </Icon>
      ),
    },
    {
      label: "المجموعة العامة",
      nav: "223/general",
      icon: <PublicIcon />,
    },
  ];
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ maxWidth: "730px", mt: 2, pb: 4 }}
    >
      <Grid container columnSpacing={4} rowSpacing={4}>
        {groups.map((group) => (
          <Grid key={group.nav} item xs={6}>
            <Paper
              sx={{
                width: "inherit",
                height: "inherit",
                p: "0",
              }}
              elevation={1}
            >
              <CardActionArea
                sx={{ pl: { xs: 0, sm: "16px" }, pt: "16px", pb: 2 }}
                disableRipple
                onClick={() => navigate(group.nav)}
              >
                <Grid
                  container
                  columnSpacing={{ xs: 0, sm: 2 }}
                  alignItems="center"
                  sx={{
                    textAlign: { xs: "-webkit-center", sm: "initial" },
                    rowGap: { xs: 2, sm: 0 },
                  }}
                >
                  <Grid item xs={12} sm={"auto"}>
                    <Box>
                      <IconLayout>{group.icon}</IconLayout>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm="6">
                    <Typography gutterBottom noWrap={true}>
                      {group.label}
                    </Typography>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Groups;
