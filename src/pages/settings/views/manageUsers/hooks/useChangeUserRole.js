import { useMutation } from "@apollo/client";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSnackbar } from "notistack";
import { CHANGE_USER_ROLE } from "../queries/changeUserRole";

export const useChangeUserRole = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const mutate = useMutation(CHANGE_USER_ROLE, {
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
      enqueueSnackbar("Role added successfully", {
        variant: "success",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <Close />
          </IconButton>
        ),
      });
    },
    refetchQueries: ["GetAllUser"],
  });
  return mutate;
};
