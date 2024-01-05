import {
  Button,
  Card,
  CardBody,
  Dropdown,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { CITY_LIST } from "../../constants/env.constants";
import { useContext, useState } from "react";
import { ReservationContext } from "../../store/request-context";

function UserHome() {
  const context = useContext(ReservationContext);
  const [error, setError] = useState();

  async function handleSearch(e) {
    e.preventDefault();
    const searchData = {
      city: e.target.city.value,
      from: e.target.from.value,
      to: e.target.to.value,
    };
    const res = await context.searchHotels(searchData);
    const temp = await res.json();
    console.log(temp);
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center h-75">
        <Card className=" bg-black border border-dark bg-white w-25 h-50">
          <CardBody className="d-flex flex-column ">
            <Form className="w-100 h-100 " onSubmit={handleSearch}>
              <FormLabel>City</FormLabel>

              <Form.Select className="bg-secondary" name="city">
                console.log(CITY_LIST);
                {CITY_LIST.map((city, key) => {
                  return (
                    <option key={key} value={city}>
                      {city}
                    </option>
                  );
                })}
              </Form.Select>
              <div className="d-flex mt-4 w-100">
                <FormGroup className="d-flex justify-content-between flex-column w-50 ">
                  <FormLabel>from</FormLabel>

                  <FormControl
                    name="from"
                    type="date"
                    form-control
                    className=" bg-secondary"
                  ></FormControl>
                </FormGroup>
                <FormGroup className="d-flex justify-content-between flex-column w-50 ">
                  <FormLabel>to</FormLabel>

                  <FormControl
                    name="to"
                    type="date"
                    form-control
                    className=" bg-secondary"
                  ></FormControl>
                </FormGroup>
              </div>
              <div className="d-flex justify-content-center m-2">
                <Button type="submit">Search</Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default UserHome;
