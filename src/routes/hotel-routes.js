import HotelHome from "../pages/hotel/hotel-home";
import HotelLayout from "../pages/hotel/hotel-layout";
import HotelManage from "../pages/hotel/hotel-manage";

export const hotelRoutes = {
  path: "hotel",
  element: <HotelLayout />,
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
