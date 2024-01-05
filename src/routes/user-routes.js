import UserBooking from "../pages/user/user-booking";
import UserHome from "../pages/user/user-home";
import UserLayout from "../pages/user/user-layout";
import UserProfile from "../pages/user/user-profile";
import UserResult from "../pages/user/user-result";
import {
  ReservationContext,
  ReservationContextProvider,
} from "../store/request-context";

export const userRoutes = {
  path: "user",
  element: (
    <ReservationContextProvider>
      <UserLayout />
    </ReservationContextProvider>
  ),
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
    {
      path: "result",
      element: <UserResult />,
    },
  ],
};
