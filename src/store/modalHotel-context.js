import { createContext, useState } from "react";
import { BASE_URL } from "../constants/env.constants";

export const ModalContext = createContext({
  modal: {},
  registerHotel: () => {},
});
export function ModalContextProvider(props) {
  const [modal, setModal] = useState({});
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
    const res = await fetch(BASE_URL + "/api/v1/hotel", options);
    console.log(res);
    if (res.status === 200) {
      return "success";
    }
  }

  const hotel = {
    modal: modal,
    registerHotel: registerHotel,
  };

  return (
    <ModalContext.Provider value={hotel}>
      {props.children}
    </ModalContext.Provider>
  );
}
