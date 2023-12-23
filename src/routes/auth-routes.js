import Login from "../pages/auth/login";
import RegisterHome from "../pages/auth/register-home";
import RegisterHotel from "../pages/auth/register-hotel";
import RegisterLayout from "../pages/auth/register-layout";
import RegisterUser from "../pages/auth/register-user";

export const registerRoute = {
  path: "register",
  element: <RegisterLayout />,
  children: [
    {
      path: "",
      element: <RegisterHome />,
    },
    {
      path: "hotel",
      element: <RegisterHotel />,
    },
    {
      path: "user",
      element: <RegisterUser />,
    },
  ],
};

export const login = {
  path: "login",
  element: <Login />,
};
