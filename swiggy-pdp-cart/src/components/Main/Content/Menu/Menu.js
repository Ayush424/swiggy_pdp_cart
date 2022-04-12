import React from "react";
import Dish from "./Dish/Dish";
import MenuCSS from './menu.module.css'
export default function Menu({menuHeading,menuList}) {
  return (
    <div className={MenuCSS.menu+' col-4'}>
      <h2>{menuHeading}</h2>
      <p>{menuList.length} ITEMS</p>
      <ul>
        {menuList.map((dish) => {
          const {id,displayName,price}=dish;
          return(
          <Dish key={id} name={displayName} price={price} alt="Veg Mark" />
        );})}
      </ul>
    </div>
  );
}


