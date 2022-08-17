import { gql } from "@apollo/client";

export const GET_GROUP_SUBJECTS = gql`
  query GetSubjects($group: Groups) {
    getSubjects(group: $group) {
      name
      class
      id
      semester
      section
      type
    }
  }
`;
