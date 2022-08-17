import { useMutation } from "@apollo/client";
import { useSignout } from "../../../../../common/hooks/useSignout";
import { DELETE_ACCOUNT } from "../queries/deleteAccount";
import { useSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

export const useDeleteUserAccount = () => {
  const { signout } = useSignout();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const mutation = useMutation(DELETE_ACCOUNT, {
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
      signout();
      enqueueSnackbar("User Account deleted successfully", {
        variant: "success",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <Close />
          </IconButton>
        ),
      });
    },
  });
  return mutation;
};
