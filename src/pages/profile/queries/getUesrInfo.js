import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query GetUser($id: Int!) {
    getUser(id: $id) {
      bio
      birthday
      class
      email
      facebookURL
      firstName
      gmail
      image
      lastName
      telegramURL
    }
  }
`;
