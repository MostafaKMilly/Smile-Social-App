import { gql } from "@apollo/client";

export const GET_QUIZES = gql`
  query GetQuizs {
    getQuizs {
      question
      id
      answer
      subject {
        name
      }
      createdAt
    }
  }
`;
