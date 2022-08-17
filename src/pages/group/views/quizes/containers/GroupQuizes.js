import { Box, Typography } from "@mui/material";
import { CreatePost, GenericDialog } from "../../../../../common/components";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { GET_USER_INFO } from "../../../../profile/queries/getUesrInfo";
import { useQuery } from "@apollo/client";
import { getUserImage } from "../../../../../common/util";
import AddQuizForm from "../components/AddQuizForm";
import { useForm } from "react-hook-form";
import { useAddQuiz, useDeleteQuiz } from "../hooks";
import { useGroupQuizes } from "../hooks/useGroupQuizes";
import Spinner from "../../../../../common/components/Spinner";
import QuizPost from "../components/QuizPost";

function GroupQuizes() {
  const { id } = useSelector((state) => state.user.info);
  const { data: userInfo } = useQuery(GET_USER_INFO, { variables: { id } });
  const [open, setOpen] = useState(false);
  const { data: quizes, loading } = useGroupQuizes();
  const [addQuiz] = useAddQuiz();
  const [deleteQuiz] = useDeleteQuiz();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onAddQuiz = (data) => {
    addQuiz({
      variables: {
        answer: data.answer,
        question: data.question,
        subjectId: data.subject.id,
      },
      onCompleted: () => {
        setOpen(false);
        reset();
      },
    });
  };

  const onDeleteQuiz = (id) => {
    deleteQuiz({ variables: { id } });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box>
      <CreatePost
        avatar={getUserImage(userInfo?.getUser?.image)}
        onClick={() => setOpen(true)}
        showIcon={false}
        text="انقر هنا لإدخال سؤال وجواب"
      />
      <Box mt={2}>
        {quizes.map((quiz) => (
          <QuizPost
            key={quiz.id}
            question={quiz.question}
            answer={quiz.answer}
            publishDate={quiz.createdAt}
            subject={quiz?.subject?.name}
            onDelete={() => onDeleteQuiz(quiz.id)}
          />
        ))}
        {quizes.length === 0 && (
          <Typography color="textSecondary" sx={{ mt: 2 }}>
            لا يوجد منشورات لعرضها
          </Typography>
        )}
      </Box>
      <GenericDialog
        title="اضافة سؤال وجواب"
        isOpen={open}
        onClose={() => setOpen(false)}
        content={<AddQuizForm control={control} errors={errors} />}
        onSubmit={handleSubmit(onAddQuiz)}
      />
    </Box>
  );
}

export default GroupQuizes;
