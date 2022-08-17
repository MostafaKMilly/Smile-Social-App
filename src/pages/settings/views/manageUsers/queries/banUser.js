import { gql } from "@apollo/client";

export const BAN_USER = gql`
  mutation ChangeBanUser($userId: Int!) {
    changeBanUser(userId: $userId) {
      id
      isBaned
    }
  }
`;
