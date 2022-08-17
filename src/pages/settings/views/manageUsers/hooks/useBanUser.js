import { useMutation } from "@apollo/client";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSnackbar } from "notistack";
import { BAN_USER } from "../queries/banUser";

export const useBanUser = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const mutate = useMutation(BAN_USER, {
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
    onCompleted: ({ changeBanUser }) => {
      enqueueSnackbar(
        changeBanUser.isBaned
          ? "User baned successfully"
          : "User unbaned successfully",
        {
          variant: "success",
          action: (key) => (
            <IconButton onClick={() => closeSnackbar(key)}>
              <Close />
            </IconButton>
          ),
        }
      );
    },
    refetchQueries: ["GetAllUser"],
  });
  return mutate;
};
