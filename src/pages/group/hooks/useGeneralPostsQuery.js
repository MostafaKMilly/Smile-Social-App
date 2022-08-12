import { gql, useQuery } from "@apollo/client";

const GET_GENERAL_POSTS = gql`
  query getGeneralPosts {
    posts {
      id
      subjectId
      type
      title
      body
      UserId
      createdAt
      updatedAt
    }
  }
`;

export const useGeneralPostsQuery = () => {
  const res = useQuery(GET_GENERAL_POSTS);
  return { ...res };
};
