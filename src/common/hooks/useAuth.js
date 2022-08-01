import { AUTH_TOKEN } from "../../constants";
import { useLocalStorage } from "./useLocalStorage";
import jwt_decode from "jwt-decode";

export const useAuth = () => {
  const [value] = useLocalStorage(AUTH_TOKEN);
  let token;
  try {
    token = jwt_decode(value);
  } catch {
    token = null;
  }
  return { token };
};
