import { useQuery } from "@apollo/client";
import { GET_QUIZES } from "../queries/getQuizes";

export const useGroupQuizes = () => {
  const query = useQuery(GET_QUIZES);
  return { ...query, data: query.data?.getQuizs };
};
