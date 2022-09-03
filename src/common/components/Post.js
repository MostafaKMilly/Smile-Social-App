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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PropTypes from "prop-types";
import { getUserImage } from "../util";
import { IMAGES_LINK } from "../../constants";

const getPostImage = (image) => {
  if (image) {
    return IMAGES_LINK + image;
  }
  return "/images/post.png";
};
function Post({
  image,
  firstName,
  lastName,
  createdAt,
  body,
  title,
  type,
  postImage,
  subjectName,
  isLiked,
  likesCnt,
}) {
  const [liked, setLiked] = React.useState(isLiked);
  return (
    <Card variant="outlined" sx={{ mb: 5 }}>
      <CardHeader
        sx={{ alignItems: "flex-start" }}
        avatar={<Avatar src={getUserImage(image)}></Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography fontSize={"15px"} fontWeight={500}>
            {firstName + " " + lastName}
          </Typography>
        }
        subheader={
          <Box>
            <Typography fontSize="14px" color="primary.main">
              {type}
            </Typography>
            <Typography fontSize="12px" color="primary.main">
              {subjectName}
            </Typography>
            <Box display="flex" columnGap={1} alignItems="center">
              <CalendarTodayIcon
                sx={{ fontSize: "12px" }}
                color="textSecondary"
              />
              <Typography color="textSecondary" fontSize="14px">
                {createdAt}
              </Typography>
            </Box>
          </Box>
        }
      />

      <CardContent>
        <Typography
          color="text.secondary"
          fontWeight={700}
          fontSize="15 px"
          mb={1}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {body}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="350"
        image={getPostImage(postImage)}
        alt="Paella dish"
      />
      <CardActions disableSpacing sx={{ justifyContent: "center", my: 0.5 }}>
        <ButtonBase
          disableRipple
          sx={{
            color: isLiked ? "primary.main" : "textSecondary",
            columnGap: 1,
          }}
          onClick={() => setLiked(!liked)}
        >
          <Typography fontWeight={600} color="inherit">
            {`${liked ? 1 : 0} اعجاب`}
          </Typography>
          {liked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
        </ButtonBase>
      </CardActions>
    </Card>
  );
}

Post.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  title: PropTypes.string,
  postImage: PropTypes.string.isRequired,
  isLiked: PropTypes.bool,
  subjectName: PropTypes.string,
  likesCnt: PropTypes.number,
};

export default Post;
