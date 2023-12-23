import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../store/auth-context";
import { useNavigate } from "react-router";

function HotelNavBar() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  function logOutHandler() {
    const res = context.logoutUser();
    if (res === "success") {
      navigate("/login");
    }
  }

  return (
    <Navbar
      expand="lg"
      className="bg-black d-flex justify-content-between p-4 border-bottom border-primary  "
    >
      <Navbar.Brand className="text-white">TravelPlanner</Navbar.Brand>
      <div className="d-flex">
        <Nav.Link className="text-white m-3">Home</Nav.Link>
        <Nav.Link className="text-white m-3">Manage</Nav.Link>
        <Button variant="danger" className="text-white" onClick={logOutHandler}>
          Logout
        </Button>
      </div>
    </Navbar>
  );
}

export default HotelNavBar;
