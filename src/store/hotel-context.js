import { createContext, useState } from "react";
import { BASE_URL } from "../constants/env.constants";
import { COMMON_ERROR, NO_HOTELS } from "../constants/error-constants";

export const HotelContext = createContext({
  hotelDetails: {},
  getHotelDetails: (body) => {},
});
export function HotelContextProvider(props) {
  const [hotelDetails, setHotelDetails] = useState({});
  async function getHotelDetails(email) {
    const accessToken = JSON.parse(
      localStorage.getItem("authData")
    ).accessToken;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(`${BASE_URL}/api/v1/hotel/${email}`, options);
    console.log(res);
    if (res.status === 404) {
      return "failed";
    }
  }

  const hotelData = {
    hotelDetails: hotelDetails,
    getHotelDetails: getHotelDetails,
  };
  return (
    <HotelContext.Provider value={hotelData}>
      {props.children}
    </HotelContext.Provider>
  );
}
