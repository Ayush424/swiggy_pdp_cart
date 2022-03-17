import React from "react";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import pinterest from "./images/pinterest.png";
import twitter from "./images/twitter.png";
import swiggy from "./images/swiggy.png";

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

function Socials() {
  return (
    <div className="socials col-4">
      <ul>
        <SocialImg src={facebook} alt="facebook" />
        <SocialImg src={instagram} alt="Instagram logo" />
        <SocialImg src={pinterest} alt="Pinterest logo" />
        <SocialImg src={twitter} alt="Twitter logo" />
      </ul>
    </div>
  );
}

function SocialImg(props) {
  return (
    <li>
      <img src={props.src} alt={props.alt + "logo"} />
    </li>
  );
}
