import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { GET_USRE_GROUPS } from "../queries/getUserGroups";

export const useUserGroups = () => {
  const query = useQuery(GET_USRE_GROUPS);
  const groups = useMemo(() => {
    return query?.data?.getGroupsOfUser || [];
  }, [query]);

  return { groups, ...query };
};
