import { createContext, useState } from "react";
import { SEARCH_HOTELS } from "../constants/env.constants";

export const ReservationContext = createContext({
  reserveHotel: [],
  searchHotels: () => {},
});
export function ReservationContextProvider(props) {
  const [reserveHotel, setReserveHotel] = useState([]);

  async function searchHotels(searchData) {
    const accessToken = JSON.parse(
      localStorage.getItem("authData")
    ).accessToken;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const searchUrl = `${SEARCH_HOTELS}?city=${searchData.city}&from=${searchData.from}&to=${searchData.to}`;
    try {
      const response = await fetch(searchUrl, options);
      if (response.status === 200) {
        try {
          const res = await response.json();
          if (res.length) {
            setReserveHotel(res);
            // console.log(reserveHotel);
            return res.length;
          }
        } catch (error) {
          return length;
        }
      } else {
        return -1;
      }
    } catch (error) {
      return -1;
    }
    let length = 0;
    // console.log("response : ", response);

    // console.log("res : ", res);

    // console.log(length);
  }

  const searchhotel = {
    reserveHotel: reserveHotel,
    searchHotels: searchHotels,
  };

  return (
    <ReservationContext.Provider value={searchhotel}>
      {props.children}
    </ReservationContext.Provider>
  );
}
