import {
  Box,
  CardActionArea,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { GroupIcon } from ".";

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

function GroupCard({ onClick, label }) {
  return (
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
        onClick={onClick}
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
              <IconLayout>
                <GroupIcon label={label} />
              </IconLayout>
            </Box>
          </Grid>
          <Grid item xs={12} sm="6">
            <Typography gutterBottom noWrap={true}>
              {label}
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
    </Paper>
  );
}

GroupCard.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.func,
};

export default GroupCard;
