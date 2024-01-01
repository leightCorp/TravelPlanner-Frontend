import { useContext, useEffect } from "react";
import { Button, Card, CardBody } from "react-bootstrap";
import { HotelContext } from "../../store/hotel-context";

function HotelCard({ setTrue }) {
  const context = useContext(HotelContext);

  function handleEdit() {
    setTrue();
  }

  useEffect(() => {
    context.getHotelDetails();
  }, []);

  return (
    <Card className=" bg-black border border-primary bg-white w-25 ">
      <CardBody className="d-flex flex-column">
        <Card.Title className="align-self-center">
          {" "}
          {context.hotelDetails.name}
        </Card.Title>
        <Card.Text>City : {context.hotelDetails.city}</Card.Text>
        <Card.Text>Address : {context.hotelDetails.address}</Card.Text>
        <Card.Text>Email :{context.hotelDetails.email}</Card.Text>
        <Card.Text>Contact : {context.hotelDetails.contact}</Card.Text>
        <Button onClick={handleEdit}>EDIT</Button>
      </CardBody>
    </Card>
  );
}

export default HotelCard;
