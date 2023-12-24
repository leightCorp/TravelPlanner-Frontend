import { Button, Form, Modal } from "react-bootstrap";

function HomeModal(props) {
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
          <input
            type="text"
            placeholder="enter your name"
            className="mb-2"
          ></input>
          <input
            type="email"
            placeholder="enter your email"
            className="mb-2"
          ></input>
          <input
            type="text"
            placeholder="enter your city"
            className="mb-2"
          ></input>
          <input
            type="text"
            placeholder="enter your address"
            className="mb-2"
          ></input>
          <input
            type="tel"
            placeholder="enter your mob"
            className="mb-2"
          ></input>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button>SUBMIT</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default HomeModal;
