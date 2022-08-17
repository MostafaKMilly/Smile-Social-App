import { gql } from "@apollo/client";

export const GET_ALL_USERRS = gql`
  query GetAllUser {
    getAllUser {
      roleName
      email
      image
      class
      createdAt
      firstName
      lastName
      isBaned
      id
    }
  }
`;
