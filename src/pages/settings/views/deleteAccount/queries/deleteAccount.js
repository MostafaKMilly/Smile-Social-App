import { gql } from "@apollo/client";

export const DELETE_ACCOUNT = gql`
  mutation UserDeleteAccount($email: String!, $password: String) {
    userDeleteAccount(email: $email, password: $password)
  }
`;
