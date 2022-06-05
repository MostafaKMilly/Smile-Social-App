import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  CreatePost,
  GenericDialog,
  Post,
} from "../../../../../common/components";
import { CreatePostForm } from "../components";

function GeneralGroup() {
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
  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false);
  return (
    <Box>
      <CreatePost
        avatar="/images/89288184.png"
        onClick={() => setIsPostDialogOpen(true)}
      />
      <Box mt={2}>
        <Typography
          color="primary.main"
          fontWeight="bold"
          gutterBottom
          fontSize="15px"
          sx={{ ml: { xs: 2, sm: 0 }, mb: 2 }}
        >
          احدث المنشورات :
        </Typography>
        {posts.map((post) => (
          <Post key={post.username} {...post}></Post>
        ))}
      </Box>
      <GenericDialog
        content={<CreatePostForm />}
        title="نشر بوست"
        isOpen={isPostDialogOpen}
        onClose={() => setIsPostDialogOpen(false)}
      />
    </Box>
  );
}

export default GeneralGroup;
