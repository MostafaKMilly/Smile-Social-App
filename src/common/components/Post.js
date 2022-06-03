import {
  Avatar,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { Box } from "@mui/system";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PropTypes from "prop-types";

function Post({ avatar, username, date, content, type, postImage }) {
  return (
    <Card variant="outlined" sx={{ mb: 5 }}>
      <CardHeader
        sx={{ alignItems: "flex-start" }}
        avatar={<Avatar src={avatar}></Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography fontSize={"15px"} fontWeight={500}>
            {username}
          </Typography>
        }
        subheader={
          <Box>
            <Typography fontSize="14px" color="primary.main">
              {type}
            </Typography>
            <Box display="flex" columnGap={1} alignItems="center">
              <CalendarTodayIcon
                sx={{ fontSize: "12px" }}
                color="textSecondary"
              />
              <Typography color="textSecondary" fontSize="14px">
                {date}
              </Typography>
            </Box>
          </Box>
        }
      />

      <CardContent>
        <Typography variant="body2" color="text.primary">
          {content}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="350"
        image={postImage}
        alt="Paella dish"
      />
      <CardActions
        disableSpacing
        sx={{ justifyContent: "center", my: 0.5 }}
        ele
      >
        <ButtonBase disableRipple sx={{ color: "textPrimary", columnGap: 1 }}>
          <Typography fontWeight={600}>اعجاب</Typography>
          <ThumbUpOffAltIcon />
        </ButtonBase>
      </CardActions>
    </Card>
  );
}

Post.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  postImage: PropTypes.string.isRequired,
};

export default Post;
