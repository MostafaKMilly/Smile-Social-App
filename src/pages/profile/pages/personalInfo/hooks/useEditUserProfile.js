import { useMutation } from "@apollo/client";
import { EDIT_USER_PROFILE } from "../../../queries/EditUserProfile";
import { useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

export const useEditUserProfile = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const mutate = useMutation(EDIT_USER_PROFILE, {
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
      enqueueSnackbar("Profile changed successfully", {
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
