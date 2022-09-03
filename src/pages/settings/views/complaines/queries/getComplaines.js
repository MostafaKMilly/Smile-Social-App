import { gql } from "@apollo/client";

export const GET_COMPLAINERS_LIST = gql`
  query GetAllComplaints {
    getAllComplaints {
      id
      body
      title
      user {
        lastName
        firstName
        image
      }
      createdAt
    }
  }
`;
