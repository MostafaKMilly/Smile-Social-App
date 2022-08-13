import { gql } from "@apollo/client";

export const ADD_UNIVERSITY_NUMBER = gql`
  mutation AddUsersUniversityNumber(
    $userId: Int!
    $universityNumber: Int!
    $year: String!
  ) {
    addUsersUniversityNumber(
      userId: $userId
      universityNumber: $universityNumber
      year: $year
    ) {
      id
      year
      universityNumber
    }
  }
`;
