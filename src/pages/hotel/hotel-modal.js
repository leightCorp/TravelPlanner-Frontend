import { useContext, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { HotelContext } from "../../store/hotel-context";
import { CITY_LIST } from "../../constants/env.constants";

function HomeModal(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();
  const contactRef = useRef();
  const email = JSON.parse(localStorage.getItem("authData")).email;

  const [response, setResponse] = useState();
  const context = useContext(HotelContext);

  async function handleSubmitt() {
    const hotel = {
      city: cityRef.current.value,
      address: addressRef.current.value,
      email: emailRef.current.value,
      name: nameRef.current.value,
      contact: contactRef.current.value,
    };

    const res = await context.registerHotel(hotel);
    setResponse(res);
  }

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Please fill below..
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-column align-items-center">
          <Form.Control
            type="text"
            placeholder="enter your name"
            className="mb-2"
            ref={nameRef}
          ></Form.Control>
          <Form.Control
            type="email"
            value={email}
            className="mb-2"
            ref={emailRef}
            readOnly
          ></Form.Control>

          <Form.Select
            type="text"
            placeholder="enter your city"
            className="mb-2"
            ref={cityRef}
          >
            {CITY_LIST.map((city) => {
              return <option>{city}</option>;
            })}
          </Form.Select>
          <Form.Control
            type="text"
            placeholder="enter your address"
            className="mb-2"
            ref={addressRef}
          ></Form.Control>
          <Form.Control
            type="tel"
            placeholder="enter your mob"
            className="mb-2"
            ref={contactRef}
          ></Form.Control>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {response === "success" ? (
          <Button onClick={props.onHide}>Close</Button>
        ) : (
          <Button onClick={handleSubmitt}>SUBMIT</Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
export default HomeModal;
