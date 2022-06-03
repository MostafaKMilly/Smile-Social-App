import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Post } from "../../../common/components/";

function Home() {
  const posts = [
    {
      avatar: "/images/89288184.png",
      type: "استفسارات",
      username: "mostafakmilly",
      date: new Date().toISOString().split("T")[0],
      content:
        "Sed finibus augue magna, dictum iaculis arcu ullamcorper id. Duis laoreet nulla imperdiet nisi auctor, id tincidunt neque rhoncus. Quisque tempus porta mauris et luctus. In finibus ex mauris. Donec laoreet vehicula molestie. Aenean aliquam",
      postImage: "/images/post.png",
    },
    {
      avatar: "/images/89288184.png",
      type: "استفسارات",
      username: "noor mohammad",
      date: new Date().toISOString().split("T")[0],
      content:
        "Sed finibus augue magna, dictum iaculis arcu ullamcorper id. Duis laoreet nulla imperdiet nisi auctor, id tincidunt neque rhoncus. Quisque tempus porta mauris et luctus. In finibus ex mauris. Donec laoreet vehicula molestie. Aenean aliquam",
      postImage: "/images/post.png",
    },
  ];
  return (
    <Box>
      <Typography
        color="primary.main"
        fontWeight="bold"
        gutterBottom
        fontSize="15px"
        sx={{ ml: { xs: 2, sm: 0 } }}
      >
        المنشورات المخصصة :
      </Typography>
      {posts.map((post) => (
        <Post key={post.username} {...post}></Post>
      ))}
    </Box>
  );
}

export default Home;
