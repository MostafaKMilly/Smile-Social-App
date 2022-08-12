import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
  mutation createPost(
    $userId: Int!
    $type: String!
    $title: String
    $body: String!
  ) {
    createPost(UserId: $userId, body: $body, type: $type, title: $title) {
      id
    }
  }
`;

export const useCreatePost = () => {
  const mutationObj = useMutation(CREATE_POST);
  return mutationObj;
};
