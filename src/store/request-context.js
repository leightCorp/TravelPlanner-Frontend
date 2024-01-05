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
    const serachUrl = `${SEARCH_HOTELS}?city=${searchData.city}&from=${searchData.from}&to=${searchData.to}`;
    const res = await fetch(serachUrl, options).then(
      async (response) => await response.json()
    );
    console.log(res);
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
