import { useMutation } from "@apollo/client";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSnackbar } from "notistack";
import { gql } from "@apollo/client";
import { useSelector } from "react-redux";

const ADD_COMPLAIN = gql`
  mutation AddComplaint($userId: Int!, $body: String!, $title: String) {
    addComplaint(userId: $userId, body: $body, title: $title) {
      body
      title
      isDone
      id
    }
  }
`;
export const useAddComplain = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { id } = useSelector((state) => state.user.info);

  const mutate = useMutation(ADD_COMPLAIN, {
    variables: {
      userId: id,
    },
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
      enqueueSnackbar("Complain register successfully", {
        variant: "success",
        action: (key) => (
          <IconButton onClick={() => closeSnackbar(key)}>
            <Close />
          </IconButton>
        ),
      });
    },
    refetchQueries: ["GetAllComplaints"],
  });
  return mutate;
};
