import React from "react";
import Banner from './Banner/Banner'
import Content from './Content/Content'
import momos from "../../images/momos.jpg"

export default function Main() {
  return (
    <main>
      <Banner heading="Punjabi Momos" img={momos} alt="Momos" />
      <Content />
    </main>
  );
}
