import { createContext, useState } from "react";
import { BASE_URL } from "../constants/env.constants";

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
    console.log(accessToken);
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
