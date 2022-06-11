import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  CreatePost,
  GenericDialog,
  Post,
} from "../../../../../common/components";
import { CreatePostForm } from "../components";
import { useGeneralPostsQuery } from "../hooks/useGeneralPostsQuery";

function GeneralGroup() {
  const [isPostDialogOpen, setIsPostDialogOpen] = useState(false);
  const { data, refetch } = useGeneralPostsQuery();

  const onCreatePostSuccess = () => {
    setIsPostDialogOpen(false);
    refetch();
  };

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
        {data &&
          data.posts.map((post) => (
            <Post
              key={post.id}
              avatar="/images/89288184.png"
              title={post.title}
              body={post.body}
              type={post.type}
              date={post.createdAt.split("T")[0]}
              username="mostafakmilly"
              postImage="/images/post.png"
            />
          ))}
        {!data &&
          posts.map((post) => <Post key={post.username} {...post}></Post>)}
      </Box>
      <GenericDialog
        content={<CreatePostForm onCreatePostSuccess={onCreatePostSuccess} />}
        title="كتابة منشور"
        isOpen={isPostDialogOpen}
        onClose={() => setIsPostDialogOpen(false)}
        formId="createGeneralPost"
      />
    </Box>
  );
}

export default GeneralGroup;
