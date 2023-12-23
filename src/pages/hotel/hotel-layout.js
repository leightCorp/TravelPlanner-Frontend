import { Outlet } from "react-router";
import HotelNavBar from "../../components/hotel/HotelNavBar";

function HotelLayout() {
  return (
    <>
      <HotelNavBar />
      <Outlet />
    </>
  );
}

export default HotelLayout;
