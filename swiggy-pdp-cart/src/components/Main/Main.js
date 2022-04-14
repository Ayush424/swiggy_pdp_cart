import React from "react";
import Banner from './components/banner/Banner'
import Content from './components/content/Content'
import momos from "./images/momos.jpg"

export default function Main() {
  return (
    <main>
      <Banner heading="Punjabi Momos" img={momos} alt="Momos" />
      <Content />
    </main>
  );
}
