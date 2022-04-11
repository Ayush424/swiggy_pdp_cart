import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <main>
      <WelcomeHeading />
      <RestaurantLinks />
    </main>
  );
}
function RestaurantLinks() {
  return (
    <ul className="restaurant-links">
      <Link to="restaurant/PunjabiMomos">
        <li>Restaurant-1</li>
      </Link>
      <Link to="restaurant/PunjabiChaap">
        <li>Restaurant-2</li>
      </Link>
    </ul>
  );
}

function WelcomeHeading() {
  return (
    <div className="banner">
      <h1 className="welcome-heading">Welcome to Swiggy!</h1>
    </div>
  );
}
