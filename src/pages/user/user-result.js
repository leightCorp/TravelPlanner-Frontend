import { useContext } from "react";
import { Button, Card, CardBody, Form } from "react-bootstrap";
import { ReservationContext } from "../../store/request-context";

function UserResult() {
  const context = useContext(ReservationContext);
  console.log(context.reserveHotel);
  return context.reserveHotel.map((hotel, key) => {
    return (
      <div className="d-flex justify-content-center ">
        <Card
          key={key}
          className=" bg-black border border-dark bg-white w-50 h-50 m-2"
        >
          <CardBody className="d-flex flex-column  ">
            <Form>
              <Card.Title className="align-self-center">
                {<p>{hotel.name}</p>}
              </Card.Title>
              {<p>Address: {hotel.address}</p>}
              {<p>Email :{hotel.email}</p>}
              {<p>Phone :{hotel.contact}</p>}

              <div className="d-flex justify-content-end  m-2">
                <Button type="submit">Reserve</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  });
}

export default UserResult;
