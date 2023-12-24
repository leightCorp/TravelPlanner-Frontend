import { Nav, NavDropdown } from "react-bootstrap";
import UserLogout from "./user-logout";
import { Link } from "react-router-dom";

function UserNav() {
  const email = JSON.parse(localStorage.getItem("authData")).email;

  return (
    <Nav className="navBar d-flex justify-content-between align-items-center bg-dark border-primary border-bottom">
      <Nav.Link href="/" variant="secondary">
        TRAVELPLANNER
      </Nav.Link>
      <div className="d-flex">
        <Nav.Link href="/user">HOME</Nav.Link>
        <Nav.Link href="/user/booking">BOOKINGS</Nav.Link>

        <NavDropdown title="USER" menuVariant="dark">
          <NavDropdown.Item>{email}</NavDropdown.Item>
          <NavDropdown.Item>
            <Link to={"/user/profile"} className="text-white">
              Profile
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <UserLogout />
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    </Nav>
  );
}
export default UserNav;
