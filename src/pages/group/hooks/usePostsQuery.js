import { gql, useQuery } from "@apollo/client";

const GET_ALL_GROUP_POSTS = gql`
  query GetPosts($group: Groups!) {
    getPosts(group: $group) {
      id
      type
      body
      title
      postImages {
        name
      }
      isLiked
      likesCnt
      subject {
        name
      }
      createdAt
      user {
        firstName
        lastName
        image
      }
    }
  }
`;

export const usePostsQuery = (variables) => {
  const res = useQuery(GET_ALL_GROUP_POSTS, { variables: variables });
  return { ...res };
};
