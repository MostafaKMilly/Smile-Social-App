import { useQuery } from "@apollo/client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  CreatePost,
  GenericDialog,
  Post,
} from "../../../../../common/components";
import { getUserImage } from "../../../../../common/util";
import { GET_USER_INFO } from "../../../../profile/queries/getUesrInfo";
import { useCreatePost, usePostsQuery } from "../../../hooks";
import CreatePostForm from "../../../components/CreatePostForm";
import { useParams } from "react-router-dom";
import Spinner from "../../../../../common/components/Spinner";
import { useForm } from "react-hook-form";
function GrouopPosts() {
  const { id } = useSelector((state) => state.user.info);
  const { data: userInfo } = useQuery(GET_USER_INFO, { variables: { id } });
  const { groupName } = useParams();
  const { data, loading } = usePostsQuery({ group: groupName });
  const [open, setOpen] = useState();
  const [createPost] = useCreatePost();

  const {
    formState: { errors },
    control,
    handleSubmit,
    reset,
  } = useForm();

  if (loading) {
    return <Spinner />;
  }

  const handleCreateNewPost = (data) => {
    createPost({
      variables: {
        type: data.type,
        title: data.title,
        body: data.body,
        subjectId: data.subject.id,
        userId: id,
        images: [data.image],
      },
      onCompleted: () => {
        reset();
        setOpen(false);
      },
    });
  };

  return (
    <Box mt={1}>
      <CreatePost
        avatar={getUserImage(userInfo?.getUser?.image)}
        onClick={() => setOpen(true)}
      />
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
      <GenericDialog
        content={<CreatePostForm control={control} erros={errors} />}
        title="كتابة منشور"
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit(handleCreateNewPost)}
      ></GenericDialog>
    </Box>
  );
}

export default GrouopPosts;
