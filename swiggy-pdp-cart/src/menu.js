import React from "react";
import vegMark from "./images/vegMark.png";

export default function Menu() {
  return (
    <div className="menu col-4">
      <h2>Recommended</h2>
      <p>24 ITEMS</p>
      <ul>
        <Dish name="Kadhai Paneer Biryani" price="249" />
        <Dish name="Masala Paneer Biryani" price="249" />
      </ul>
    </div>
  );
}

function Dish(props) {
  return (
    <li className="dish">
      <img src={vegMark} alt="veg" />
      <p className="dish-name">{props.name}</p>
      <p className="price">₹ {props.price}</p>
    </li>
  );
}
