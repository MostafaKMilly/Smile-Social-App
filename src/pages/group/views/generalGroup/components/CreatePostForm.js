import { TextField, Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useCreatePost } from "../hooks/useCreatePost";
import PropTypes from "prop-types";

function CreatePostForm(props) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: "",
      body: "",
    },
  });
  const [createPost] = useCreatePost();

  const onSubmit = (formData, e) => {
    e.preventDefault();
    createPost({
      variables: {
        userId: 1,
        type: "questions",
        title: formData.title,
        body: formData.body,
      },
    });
    props.refetchPost();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="createGeneralPost">
      <Typography
        gutterBottom
        fontSize="13px"
        fontWeight={600}
        sx={{ color: "primary.main" }}
        component="label"
        htmlFor="title"
      >
        عنوان المنشور :
      </Typography>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField id="title" {...field} sx={{ mb: 2 }} />
        )}
      />
      <Typography
        gutterBottom
        fontSize="13px"
        fontWeight={600}
        sx={{ color: "primary.main" }}
        component="label"
        htmlFor="body"
      >
        محتوى المنشور :
      </Typography>
      <Controller
        name="body"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField multiline id="body" rows={5} {...field} />
        )}
      />
    </form>
  );
}

CreatePostForm.propTypes = {
  refetchPost: PropTypes.func,
};

export default CreatePostForm;
