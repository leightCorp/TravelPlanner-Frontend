import { BASE_URL } from "../constants/env.constants";
import {
  BAD_CREDENTIALS,
  COMMON_ERROR,
  DUPLICATE_EMAIL,
} from "../constants/error-constants";

const { createContext, useState } = require("react");

export const AuthContext = createContext({
  authData: {},
  registerUser: (creds) => {},
  loginUser: (creds) => {},
  logoutUser: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});

  const registerUser = async (creds) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(creds),
    };

    const res = await fetch(`${BASE_URL}/api/v1/auth/register`, options);
    console.log(res);
    const response = await res.json();
    if (res.status === 200) {
      setAuthData({
        email: response.email,
        role: response.role,
      });
      localStorage.setItem("authData", JSON.stringify(response));
      return "success";
    } else if (res.status === 409) {
      return DUPLICATE_EMAIL;
    } else {
      return COMMON_ERROR;
    }
  };

  const loginUser = async (creds) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(creds),
    };
    const res = await fetch(`${BASE_URL}/api/v1/auth/authenticate`, options);
    console.log(res);
    const response = await res.json();
    if (res.status === 200) {
      setAuthData({
        email: response.email,
        role: response.role,
      });
      localStorage.setItem("authData", JSON.stringify(response));
      return "success";
    } else if (response.message === "Bad credentials") {
      return BAD_CREDENTIALS;
    } else {
      return COMMON_ERROR;
    }
  };

  const logoutUser = (creds) => {};

  const context = {
    authData: authData,
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
