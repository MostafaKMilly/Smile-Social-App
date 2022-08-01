import { gql } from "@apollo/client";

export const EDIT_USER_PROFILE = gql`
  mutation EditProfile(
    $id: Int!
    $firstName: String
    $lastName: String
    $birthday: Date
    $image: String
    $bio: String
    $facebookURL: String
    $telegramURL: String
    $class: Class
    $gmail: String
  ) {
    editProfile(
      id: $id
      firstName: $firstName
      lastName: $lastName
      birthday: $birthday
      image: $image
      bio: $bio
      facebookURL: $facebookURL
      telegramURL: $telegramURL
      class: $class
      gmail: $gmail
    ) {
      id
    }
  }
`;
