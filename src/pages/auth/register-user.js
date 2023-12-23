import { useContext, useState } from "react";
import { AuthContext } from "../../store/auth-context";
import { useNavigate } from "react-router";
import { USER } from "../../constants/role-constants";
import { PASSWORD_MISMATCH } from "../../constants/error-constants";
import { Button, Card, Form } from "react-bootstrap";

function RegisterUser() {
  const [error, setError] = useState("");
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSingUp(e) {
    e.preventDefault();

    if (e.target.password.value === e.target.confirm.value) {
      const creds = {
        email: e.target.email.value,
        password: e.target.password.value,
        role: USER,
      };
      const res = await context.registerUser(creds);
      if (res === "success") {
        navigate("/user");
      } else {
        setError(res);
      }
    } else {
      setError(PASSWORD_MISMATCH);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-75">
      <Card className=" bg-black border border-primary w-25">
        <Card.Body className="d-flex justify-content-center align-items-center">
          <Form
            className="d-flex flex-column  justify-content-center align-items-center w-75"
            onSubmit={handleSingUp}
          >
            <Form.Control
              type="email"
              className=" my-3 "
              placeholder="enter email"
              name="email"
            />

            <input
              type="password"
              className="form-control  my-3"
              placeholder="enter password"
              name="password"
            ></input>
            <Form.Control
              type="password"
              className=" my-3"
              placeholder="confirm password"
              name="confirm"
            />
            <Button type="submit" variant="primary">
              SIGNUP
            </Button>
          </Form>
        </Card.Body>
        {error && (
          <Card.Footer className=" d-flex  justify-content-center ">
            <span className="text-danger">{error}</span>
          </Card.Footer>
        )}
      </Card>
    </div>
  );
}

export default RegisterUser;
