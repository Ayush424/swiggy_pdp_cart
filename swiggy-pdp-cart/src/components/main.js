import React from "react";
import Banner from './banner'
import Content from './content'
import momos from "../images/momos.jpg"

export default function Main() {
  return (
    <main>
      <Banner heading="Punjabi Momos" img={momos} alt="Momos" />
      <Content />
    </main>
  );
}
