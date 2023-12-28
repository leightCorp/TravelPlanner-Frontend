import { createContext, useState } from "react";
import {
  BASE_URL,
  GET_HOTEL_DETAILS,
  REGISTER_HOTEL,
} from "../constants/env.constants";
import { COMMON_ERROR, NO_HOTELS } from "../constants/error-constants";

export const HotelContext = createContext({
  hotelDetails: {},
  getHotelDetails: (body) => {},
  registerHotel: () => {},
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
    const res = await fetch(GET_HOTEL_DETAILS + email, options);
    console.log(res.json());
    if (res.status === 404) {
      return "failed";
    }
  }

  async function registerHotel(hotel) {
    const accessToken = JSON.parse(
      localStorage.getItem("authData")
    ).accessToken;
    console.log(hotel);
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hotel),
    };
    const res = await fetch(REGISTER_HOTEL, options);
    const temp = await res.json();
    const hotelData = {
      address: temp.address,
      capacity: temp.capacity,
      city: temp.city,
      contact: temp.contact,
      email: temp.email,
      name: temp.name,
    };
    console.log(hotelData);
    if (res.status === 200) {
      setHotelDetails(hotelData);
      console.log(hotelDetails.name);
      return "success";
    }
  }

  const hotelData = {
    hotelDetails: hotelDetails,
    getHotelDetails: getHotelDetails,
    registerHotel: registerHotel,
  };
  return (
    <HotelContext.Provider value={hotelData}>
      {props.children}
    </HotelContext.Provider>
  );
}
