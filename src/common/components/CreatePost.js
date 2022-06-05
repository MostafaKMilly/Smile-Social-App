import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function CreatePost(props) {
  return (
    <Box
      display="flex"
      columnGap={3}
      alignItems="center"
      component={Paper}
      variant="outlined"
      p={3}
      maxWidth="650px"
    >
      <Avatar src={props.avatar} />
      <Box
        width={{
          width: "100%",
          maxWidth: "390px",
          borderRadius: "30px",
          border: "1px solid #302D2D",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          onClick={props.onClick}
          sx={{ cursor: "pointer" }}
        >
          <Typography
            color="text.secondary"
            sx={{ p: "7px", fontSize: "16px", flexGrow: 1 }}
          >
            اضغط هنا لنشر منشور
          </Typography>
          <CameraAltIcon
            fontSize="small"
            sx={{ color: "text.secondary", mr: 2 }}
          />
        </Box>
      </Box>
    </Box>
  );
}

CreatePost.propTypes = {
  onClick: PropTypes.func,
  avatar: PropTypes.string,
};

export default CreatePost;
