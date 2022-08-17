import { useApolloClient } from "@apollo/client";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../../constants";
import { resetUserInfo } from "../../data/slices/userSlice";

export const useSignout = () => {
  const navigate = useNavigate();
  const client = useApolloClient();
  const dispatch = useDispatch();

  const signout = useCallback(() => {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch(resetUserInfo());
    client.resetStore();
    navigate("/access/login");
  }, [navigate, client, dispatch]);

  return { signout };
};
