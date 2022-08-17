import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { GET_ALL_USERRS } from "../queries/getAllUsers";

export const useAllUsers = () => {
  const { email } = useSelector((state) => state.user.info);
  const query = useQuery(GET_ALL_USERRS);

  return {
    ...query,
    data: query.data?.getAllUser?.filter((user) => user.email !== email),
  };
};
