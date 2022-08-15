import { useMutation } from "@apollo/client";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSnackbar } from "notistack";
import { DELETE_UNIVERSITY_NUMBER } from "../queries/deleteUniversityNumber";

export const useDeleteUniversityNumber = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const mutate = useMutation(DELETE_UNIVERSITY_NUMBER, {
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
      enqueueSnackbar("Univeristy number deleted successfully", {
        variant: "success",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <Close />
          </IconButton>
        ),
      });
    },
    refetchQueries: ["GetUser"],
  });
  return mutate;
};
