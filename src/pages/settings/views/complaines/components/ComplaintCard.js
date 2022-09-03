import { Avatar, Box, Typography } from "@mui/material";
import { getUserImage } from "../../../../../common/util";
import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function ComplaintCard({ body, title, image, createdAt, firstName, lastName }) {
  return (
    <Box
      display="flex"
      columnGap={2}
      background="white"
      alignItems="start"
      sx={{ maxWidth: "600px" }}
    >
      <Avatar sx={{ width: 50, height: 50 }} src={getUserImage(image)} />
      <Box display="flex" flexDirection="column" width="100%">
        <Box>
          <Typography fontWeight="500" fontSize="16px" gutterBottom>
            {firstName + " " + lastName}
          </Typography>
          <Box display="flex" columnGap={1} alignItems="center">
            <CalendarTodayIcon
              sx={{ fontSize: "12px" }}
              color="textSecondary"
            />
            <Typography color="textSecondary" fontSize="14px">
              {"Created at : " + createdAt}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" rowGap={2} flexDirection="column" mt={1}>
          <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>{body}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ComplaintCard;
