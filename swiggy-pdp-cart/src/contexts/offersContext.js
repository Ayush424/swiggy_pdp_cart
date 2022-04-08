import React, { createContext, useEffect, useState } from "react";

export const OffersContext = createContext();

const OffersContextProvider = (props) => {
  const [offer, setOffer] = useState('');
  useEffect(() => {
    const url = "http://localhost:8080/promotion";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        setOffer(responseJson.offerText);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <OffersContext.Provider value={{offer}}>
      {props.children}
    </OffersContext.Provider>
  );
};
export default OffersContextProvider;
