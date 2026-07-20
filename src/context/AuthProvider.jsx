import { useState } from "react";
import AuthContext from "./AuthContext";
import {
  getCurrentUser,
  loginUser as authLoginUser,
  logoutUser as authLogoutUser,
} from "../services/authServices";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(getCurrentUser());

  const loginUser = (email, password) => {
    const loggedInUser = authLoginUser(email, password);
    setUser(loggedInUser);
    return loggedInUser;
  };

  const logoutUser = () => {
    authLogoutUser();
    setUser(null);
  };

  const value = {
    user,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
