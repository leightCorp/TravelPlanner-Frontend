import { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { AuthContext } from "../../store/auth-context";
import { useNavigate } from "react-router";
import { COMMON_ERROR } from "../../constants/error-constants";

function UserLogout() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState();
  function handleLogout() {
    const res = context.logoutUser();
    if (res === "success") {
      navigate("/login");
    } else {
      setError(COMMON_ERROR);
    }
  }

  return (
    <div>
      <Button variant="dark" onClick={handleLogout}>
        Logout
      </Button>
      {error && <h5>{error}</h5>}
    </div>
  );
}
export default UserLogout;
