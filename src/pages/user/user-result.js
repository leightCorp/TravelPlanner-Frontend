import { useContext } from "react";
import { Button, Card, CardBody, Form } from "react-bootstrap";
import { ReservationContext } from "../../store/request-context";
import ResultCard from "../../components/user/result-card";

function UserResult() {
  const context = useContext(ReservationContext);
  console.log(context.reserveHotel);
  return context.reserveHotel.map((hotel, key) => {
    return (
      <div className="d-flex justify-content-center ">
        <ResultCard hotel={hotel} key={key} />{" "}
      </div>
    );
  });
}

export default UserResult;
