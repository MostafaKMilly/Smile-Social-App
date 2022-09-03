import { useQuery } from "@apollo/client";
import { GET_COMPLAINERS_LIST } from "../queries/getComplaines";

export const useComplaintsList = () => {
  const query = useQuery(GET_COMPLAINERS_LIST);

  return { ...query, data: query?.data?.getAllComplaints };
};
