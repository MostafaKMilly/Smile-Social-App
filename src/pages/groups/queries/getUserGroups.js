import { gql } from "@apollo/client";

export const GET_USRE_GROUPS = gql`
  query GetSubjects {
    getGroupsOfUser
  }
`;
