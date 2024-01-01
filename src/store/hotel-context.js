import { createContext, useEffect, useState } from "react";
import {
  BASE_URL,
  GET_HOTEL_DETAILS,
  REGISTER_HOTEL,
  UPDATE_HOTEL_DETAILS,
} from "../constants/env.constants";
import { COMMON_ERROR, NO_HOTELS } from "../constants/error-constants";

export const HotelContext = createContext({
  hotelDetails: {},
  getHotelDetails: (body) => {},
  registerHotel: (body) => {},
  updateHotel: (body) => {},
});
export function HotelContextProvider(props) {
  const [hotelDetails, setHotelDetails] = useState({});

  // TODO: refactor getHotelDetails function
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
    const temp = await res.json();
    console.log(temp);
    if (res.status === 404) {
      return "failed";
    }
    if (res.status === 200) {
      const hotelData = {
        address: temp.address,
        capacity: temp.capacity,
        city: temp.city,
        contact: temp.contact,
        email: temp.email,
        name: temp.name,
      };
      setHotelDetails(hotelData);
      console.log(hotelDetails);
    }
  }

  async function registerHotel(hotel) {
    const accessToken = JSON.parse(
      localStorage.getItem("authData")
    ).accessToken;
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
      return "success";
    }
  }

  async function updateHotel(updateData) {
    const accessToken = JSON.parse(
      localStorage.getItem("authData")
    ).accessToken;
    console.log(accessToken);

    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    };
    const res = await fetch(UPDATE_HOTEL_DETAILS, options);
  }

  const hotelData = {
    hotelDetails: hotelDetails,
    getHotelDetails: getHotelDetails,
    registerHotel: registerHotel,
    updateHotel: updateHotel,
  };

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("authData")).email;
    getHotelDetails(email);
  }, []);

  return (
    <HotelContext.Provider value={hotelData}>
      {props.children}
    </HotelContext.Provider>
  );
}
