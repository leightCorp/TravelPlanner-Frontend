import { Nav, Navbar } from "react-bootstrap";

function AuthNav({ isLogin }) {
  return (
    <Navbar
      expand="lg"
      className="bg-black d-flex justify-content-between p-4 border-bottom border-primary  "
    >
      <Navbar.Brand className="text-white">TravelPlanner</Navbar.Brand>
      <Nav.Link href={isLogin ? "/register" : "/login"} className="text-white">
        {isLogin ? "SIGNUP" : "LOGIN"}
      </Nav.Link>
    </Navbar>
  );
}

export default AuthNav;
