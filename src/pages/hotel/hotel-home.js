import { Button } from "react-bootstrap";
import HotelNavBar from "../../components/hotel/HotelNavBar";
import { useContext, useEffect, useState } from "react";
import HomeModal from "./hotel-modal";
import { HotelContext } from "../../store/hotel-context";
import { COMMON_ERROR, NO_HOTELS } from "../../constants/error-constants";

function HotelHome() {
  const [modalShow, setModalShow] = useState(false);
  const context = useContext(HotelContext);

  useEffect(async () => {
    const email = JSON.parse(localStorage.getItem("authData")).email;
    const res = await context.getHotelDetails(email);
    console.log(res);
    if (res === "failed") {
      setModalShow(true);
    }
  }, []);

  return (
    <>{<HomeModal show={modalShow} onHide={() => setModalShow(false)} />}</>
  );
}

export default HotelHome;
