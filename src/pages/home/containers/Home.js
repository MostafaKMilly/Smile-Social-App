import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Post } from "../../../common/components/";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { useNavigate } from "react-router-dom";
import { usePostsQuery } from "../../group/hooks";

function Home() {
  const navigate = useNavigate();
  const { data, loading } = usePostsQuery({ group: "First" });
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ maxWidth: "730px", mt: 2, pb: 4 }}
    >
      <Button
        startIcon={<BookmarksIcon />}
        onClick={() => navigate("myMarks")}
        sx={{ my: 1 }}
      >
        علاماتي
      </Button>
      <Typography
        color="primary.main"
        fontWeight="bold"
        gutterBottom
        fontSize="15px"
        sx={{ ml: { xs: 2, sm: 0 } }}
      >
        المنشورات المخصصة :
      </Typography>
      <Box mt={2}>
        {data &&
          data.getPosts.map((post) => (
            <Post
              key={post.id}
              image={post.user.image}
              firstName={post.user.firstName}
              lastName={post.user.lastName}
              createdAt={post.createdAt.split("T")[0]}
              title={post.title}
              isLiked={post.isLiked}
              likesCnt={post.likesCnt}
              body={post.body}
              type={post.type}
              subjectName={post.subject.name}
              postImage={post.postImages[0].name}
            />
          ))}

        {(!data || data.getPosts.length === 0) && (
          <Typography fontSize="15px" color="textSecondary">
            لا يوجد منشورات لعرضها
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default Home;
