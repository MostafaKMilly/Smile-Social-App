import { gql } from "@apollo/client";

export const CHANGE_USER_ROLE = gql`
  mutation ChangeUserRole($roleName: Roles, $id: Int!) {
    changeUserRole(roleName: $roleName, id: $id) {
      id
    }
  }
`;
