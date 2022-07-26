import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Logo, ProtectedRoute } from "../../../common/components";

function Group() {
  const navigate = useNavigate();

  return (
    <ProtectedRoute>
      <Box height="91%">
        <AppBar
          position="sticky"
          color="inherit"
          elevation={0}
          sx={{ borderBottom: "1px solid #bfccc0" }}
        >
          <Container maxWidth="false">
            <Toolbar
              disableGutters
              variant="dense"
              sx={{ justifyContent: "space-between" }}
            >
              <Box display="flex" alignItems="center" columnGap={1}>
                <Logo
                  width="60px"
                  height="60px"
                  onClick={() => navigate("/")}
                  style={{ cursor: "pointer" }}
                />

                <TextField
                  variant="outlined"
                  size="small"
                  sx={{
                    minWidth: "250px",
                    color: "text.secondary",
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "33px",
                      background: "#f9f9f9",
                    },
                    "& .MuiOutlinedInput-root fieldset": {
                      borderColor: "#7070707d !important",
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <SearchIcon sx={{ color: "text.secondary" }} />
                    ),
                  }}
                ></TextField>
              </Box>
              <Box display="flex" columnGap={1}>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
                <IconButton
                  sx={{ background: "#f9f9f9" }}
                  onClick={() => navigate(-1)}
                >
                  <ArrowBackIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box width="100%" display="flex" height="100%">
          <Box
            sx={{
              background: "white",
              display: { xs: "none", sm: "block" },
              minWidth: "230px",
              borderRight: "1px solid #7070704a",
              overflowY: "auto",
              height: "100%",
            }}
            width="25%"
            height="100%"
          >
            <List sx={{ my: 1 }}>
              <ListItemButton sx={{ borderLeft: "5px solid #31d638", mb: 2 }}>
                <ListItemText>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight="700"
                    sx={{ ml: 1 }}
                  >
                    {"استفسارات عامة"}
                  </Typography>
                </ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ borderLeft: "5px solid #707070", mb: 2 }}>
                <ListItemText>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight="700"
                    sx={{ ml: 1 }}
                  >
                    {"اعلانات"}
                  </Typography>
                </ListItemText>
              </ListItemButton>
              <ListItemButton sx={{ borderLeft: "5px solid #707070" }}>
                <ListItemText>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight="700"
                    sx={{ ml: 1 }}
                  >
                    {"مفقودات"}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </List>
          </Box>
          <Box width="100%" height="100%" sx={{ overflowY: "auto" }}>
            <Box
              height="200px"
              width="100%"
              sx={{ overflow: "hidden", background: "#302D2D" }}
              position="relative"
            >
              <img
                src="/images/groupHeader.jpg"
                alt="groupHeader"
                style={{
                  opacity: 0.4,
                  objectFit: "cover",
                  width: "inherit",
                  height: "inherit",
                }}
              ></img>
              <Box
                sx={{
                  background: "white",
                  position: "absolute",
                  bottom: 0,
                  p: 2,
                  borderRadius: "0px 37px 0px 0px",
                }}
              >
                <Typography
                  variant="body1"
                  fontSize={{ xs: "14px", sm: "17px" }}
                  fontWeight={700}
                >
                  المجموعة العامة
                </Typography>
              </Box>
            </Box>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <Container
                  maxWidth={false}
                  disableGutters
                  sx={{
                    pr: { xs: 2, sm: 4 },
                    pl: { xs: 2, sm: 4 },
                    mt: 4,
                    pb: 4,
                  }}
                >
                  <Outlet />
                </Container>
              </Grid>
              <Grid item xs={12} sm={4}></Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ProtectedRoute>
  );
}

export default Group;
