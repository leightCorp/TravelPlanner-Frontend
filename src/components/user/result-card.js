import { Button, Card, CardBody, Form } from "react-bootstrap";

function ResultCard({ hotel, key }) {
  // function handleReserve(){

  // }

  return (
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
            <Button>Reserve</Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
}

export default ResultCard;
