import React from "react";
import { useParams } from "react-router-dom";
import Banner from './banner'
import Content from './content'

export default function Main() {
  const params = useParams();
  return (
    <main>
      <Banner restaurant = {params.name}/>
      <Content />
    </main>
  );
}
