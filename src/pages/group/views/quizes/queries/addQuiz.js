import { gql } from "@apollo/client";

export const ADD_QUIZ = gql`
  mutation AddQuiz($subjectId: Int!, $answer: String!, $question: String!) {
    addQuiz(subjectId: $subjectId, answer: $answer, question: $question) {
      id
    }
  }
`;
