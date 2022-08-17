import { useMutation } from "@apollo/client";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSnackbar } from "notistack";
import { DELETE_QUIZ } from "../queries/deleteQuiz";

export const useDeleteQuiz = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const mutate = useMutation(DELETE_QUIZ, {
    onError: (error) => {
      enqueueSnackbar(error.message, {
        variant: "error",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <Close />
          </IconButton>
        ),
      });
    },
    onCompleted: () => {
      enqueueSnackbar("Quiz deleted successfully", {
        variant: "success",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <Close />
          </IconButton>
        ),
      });
    },
    refetchQueries: ["GetQuizs"],
  });
  return mutate;
};
