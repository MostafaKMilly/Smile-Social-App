import { useMutation } from "@apollo/client";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSnackbar } from "notistack";
import { useAuth } from "../../../../../common/hooks";
import { GET_USER_INFO } from "../../../queries/getUesrInfo";
import { ADD_UNIVERSITY_NUMBER } from "../queries/addUniveersityNumber";

export const useAddUniverityNumber = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { token } = useAuth();

  const mutate = useMutation(ADD_UNIVERSITY_NUMBER, {
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
      enqueueSnackbar("Univeristy number added successfully", {
        variant: "success",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <Close />
          </IconButton>
        ),
      });
    },
    variables: {
      userId: token.id,
    },
    update: (cache, { data: { addUsersUniversityNumber } }) => {
      const data = cache.readQuery({
        query: GET_USER_INFO,
        variables: { id: token.id },
      });
      const newData = {
        getUser: {
          ...data.getUser,
          userUniversityNumbers: [
            ...data.getUser.userUniversityNumbers,
            addUsersUniversityNumber,
          ],
        },
      };
      cache.writeQuery({
        query: GET_USER_INFO,
        variables: { id: token.id },
        data: newData,
      });
    },
  });
  return mutate;
};
