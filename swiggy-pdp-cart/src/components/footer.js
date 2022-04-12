import React from "react";
import swiggy from "../images/swiggy.png";
import Socials from "./socials";
export default function Footer() {
  return (
    <footer>
      <div className="col-4">
        <img src={swiggy} alt="Swiggy Logo" />
      </div>
      <p className="col-4">©2022 Swiggy</p>
      <Socials />
    </footer>
  );
}




