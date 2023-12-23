import BASE_URL from "../constants/env.constants";

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
  };

  const loginUser = async (creds) => {};

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
