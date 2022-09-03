import { gql, useMutation } from "@apollo/client";

const CREATE_POST = gql`
  mutation AddPost(
    $type: PostTypes!
    $title: String!
    $body: String!
    $subjectId: Int
    $userId: Int!
    $images: [String]!
  ) {
    addPost(
      type: $type
      title: $title
      body: $body
      subjectId: $subjectId
      userId: $userId
      images: $images
    ) {
      id
    }
  }
`;

export const useCreatePost = () => {
  const mutationObj = useMutation(CREATE_POST, {
    refetchQueries: ["GetPosts"],
  });
  return mutationObj;
};
