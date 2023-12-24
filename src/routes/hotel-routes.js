import HotelHome from "../pages/hotel/hotel-home";
import HotelLayout from "../pages/hotel/hotel-layout";
import HotelManage from "../pages/hotel/hotel-manage";
import { HotelContextProvider } from "../store/hotel-context";

export const hotelRoutes = {
  path: "hotel",
  element: (
    <HotelContextProvider>
      <HotelLayout />
    </HotelContextProvider>
  ),
  children: [
    {
      path: "",
      element: <HotelHome />,
    },
    {
      path: "manage",
      element: <HotelManage />,
    },
  ],
};
