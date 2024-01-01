import { useContext, useRef } from "react";
import { HotelContext } from "../../store/hotel-context";
import { Button, Card, CardBody, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

function HotelEdit({ onCancel }) {
  const nameRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();

  const context = useContext(HotelContext);
  const navigate = useNavigate();
  function handleCancel() {
    onCancel();
  }
  function handleSave() {
    const updateData = {
      name: nameRef.current.value,
      city: cityRef.current.value,
      address: addressRef.current.value,
      email: emailRef.current.value,
      contact: contactRef.current.value,
    };
    console.log(updateData);
    context.updateHotel(updateData);
    navigate(0);
  }

  return (
    <Card className=" bg-black border border-primary bg-white w-25 ">
      <CardBody>
        <Form className="d-flex justify-content-center align-items-center flex-column">
          <input
            type="text"
            defaultValue={context.hotelDetails.name}
            className="m-2"
            ref={nameRef}
          ></input>
          <input
            type="text"
            defaultValue={context.hotelDetails.city}
            className="m-2"
            ref={cityRef}
          ></input>
          <input
            type="text"
            defaultValue={context.hotelDetails.address}
            className="m-2"
            ref={addressRef}
          ></input>
          <input
            type="text"
            value={context.hotelDetails.email}
            className="m-2"
            readOnly
            ref={emailRef}
          ></input>
          <input
            type="text"
            defaultValue={context.hotelDetails.contact}
            className="m-2"
            ref={contactRef}
          ></input>

          <div className="d-flex w-75 justify-content-evenly">
            <Button onClick={handleCancel}>CANCEL</Button>
            <Button onClick={handleSave}> SAVE</Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
}

export default HotelEdit;
