import React from "react";
import { useParams } from "react-router-dom";
import Banner from './banner'
import Content from './content'
import OffersContextProvider from "../contexts/offersContext";

export default function Main() {
  const params = useParams();
  return (
    <OffersContextProvider>
    <main>
      <Banner restaurant = {params.name}/>
      <Content />
    </main>
    </OffersContextProvider>
  );
}
