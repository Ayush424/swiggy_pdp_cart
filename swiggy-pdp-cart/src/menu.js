import React from "react";
import vegMark from "./images/vegMark.png";

export default function Menu(props) {
  return (
    <div className="menu col-4">
      <h2>{props.menuHeading}</h2>
      <p>{props.list.length} ITEMS</p>
      <ul>
        {props.list.map((dish) => (
          <Dish key={dish.id} name={dish.displayName} price={dish.price} />
        ))}
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
