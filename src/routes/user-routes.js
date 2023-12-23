import UserBooking from "../pages/user/user-booking";
import UserHome from "../pages/user/user-home";
import UserLayout from "../pages/user/user-layout";
import UserProfile from "../pages/user/user-profile";

export const userRoutes = {
  path: "user",
  element: <UserLayout />,
  children: [
    {
      path: "",
      element: <UserHome />,
    },
    {
      path: "booking",
      element: <UserBooking />,
    },
    {
      path: "profile",
      element: <UserProfile />,
    },
  ],
};
