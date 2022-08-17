import { useQuery } from "@apollo/client";
import { GET_GROUP_SUBJECTS } from "../queries/getGroupSubjects";

export const useGroupSubjects = (group) => {
  const query = useQuery(GET_GROUP_SUBJECTS, { variables: { group } });
  return { ...query, data: query.data?.getSubjects || [] };
};
