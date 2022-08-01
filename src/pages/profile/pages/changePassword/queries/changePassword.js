import { gql } from "@apollo/client";

export const CHANGE_PASSWORD = gql`
  mutation EditProfile(
    $id: Int!
    $oldPassword: String!
    $newPassword1: String!
    $newPassword2: String!
  ) {
    userChangePassword(
      id: $id
      oldPassword: $oldPassword
      newPassword1: $newPassword1
      newPassword2: $newPassword2
    ) {
      id
    }
  }
`;
