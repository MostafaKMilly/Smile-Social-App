import { gql } from "@apollo/client";

export const DELETE_UNIVERSITY_NUMBER = gql`
  mutation DeleteUsersUniversityNumber($id: Int!) {
    deleteUsersUniversityNumber(id: $id)
  }
`;
