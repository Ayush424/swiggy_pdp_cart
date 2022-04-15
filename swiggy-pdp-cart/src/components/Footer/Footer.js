import React from "react";
import swiggy from "./images/swiggy.png";
import SocialList from "./components/socials/SocialList";
import footerCSS from "./footer.module.css"
export default function Footer() {
  return (
    <footer className={footerCSS.footer}>
      <span className="col-4">
        <img src={swiggy} alt="Swiggy Logo" />
      </span>
      <p className="col-4">©2022 Swiggy</p>
      <SocialList />
    </footer>
  );
}




