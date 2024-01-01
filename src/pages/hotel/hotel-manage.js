import { useContext, useState } from "react";
import { Button, Card, CardBody } from "react-bootstrap";
import { HotelContext } from "../../store/hotel-context";
import HotelEdit from "../../components/hotel/hotelEdit";
import HotelCard from "../../components/hotel/HotelManageCard";

function HotelManage() {
  const context = useContext(HotelContext);
  const [isEditMode, setIsEditMode] = useState(false);

  console.log(context.hotelDetails);
  function toggleEditMode() {
    setIsEditMode(!isEditMode);
  }

  return (
    <div className="d-flex justify-content-center align-items-center h-75">
      {isEditMode ? (
        <HotelEdit onCancel={toggleEditMode} />
      ) : (
        <HotelCard setTrue={toggleEditMode} />
      )}
    </div>
  );
}

export default HotelManage;
