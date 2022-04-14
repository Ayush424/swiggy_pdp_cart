import React from "react";
import Dish from "./components/dish/Dish";
import menuCSS from './menu.module.css'
export default function Menu({menuHeading,menuList}) {
  function renderMenuListItem(){
    return menuList.map((dish) => 
      <Dish key={dish.id} name={dish.displayName} price={dish.price} alt="Veg Mark" />
    )
  }
  return (
    <div className={menuCSS.menu+' col-4'}>
      <h2>{menuHeading}</h2>
      <p>{menuList.length} ITEMS</p>
      <ul>
        {renderMenuListItem()}
      </ul>
    </div>
  );
}


