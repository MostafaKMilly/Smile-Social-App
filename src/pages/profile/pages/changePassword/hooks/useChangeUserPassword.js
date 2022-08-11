import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { CHANGE_PASSWORD } from "../queries/changePassword";
import Close from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export const useChangeUserPassword = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const mutate = useMutation(CHANGE_PASSWORD, {
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
      enqueueSnackbar("Password changed successfully", {
        variant: "success",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <Close />
          </IconButton>
        ),
      });
    },
  });
  return mutate;
};
