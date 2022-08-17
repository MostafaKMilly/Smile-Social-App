import {
  Avatar,
  Box,
  MenuItem,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import { getUserImage } from "../../../../../common/util";
import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

function UserInfo({
  roleName,
  email,
  image,
  class: className,
  createdAt,
  firstName,
  lastName,
  isBaned,
  onChangeUserRole,
  onBanUser,
}) {
  return (
    <Box
      display="flex"
      columnGap={2}
      background="white"
      alignItems="start"
      sx={{ maxWidth: "600px" }}
    >
      <Avatar sx={{ width: 50, height: 50 }} src={getUserImage(image)} />
      <Box display="flex" justifyContent="space-between" width="100%">
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
        <Box display="flex" columnGap={2}>
          <Select
            variant="outlined"
            color="secondary"
            defaultValue={roleName}
            size="small"
            onChange={(e) => {
              onChangeUserRole(e.target.value);
            }}
          >
            <MenuItem value="Student_">Student</MenuItem>
            <MenuItem value="Admin_">Admin_</MenuItem>
            <MenuItem value="Public_Supervisor">Public Supervisor</MenuItem>
            <MenuItem value="First_Supervisor">First Supervisor</MenuItem>
            <MenuItem value="Second_Supervisor">Second Supervisor</MenuItem>
            <MenuItem value="Third_Supervisor">Third Supervisor</MenuItem>
            <MenuItem value="Fourth_Supervisor">Fourth Supervisor</MenuItem>
            <MenuItem value="Fifth_Supervisor">Fifth Supervisor</MenuItem>
          </Select>
          <Switch defaultChecked={isBaned} onChange={onBanUser} color="error" />
        </Box>
      </Box>
    </Box>
  );
}

export default UserInfo;
