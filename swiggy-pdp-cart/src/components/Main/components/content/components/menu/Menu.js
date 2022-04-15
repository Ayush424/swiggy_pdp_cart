import React,{useMemo} from "react";
import Dish from "./components/dish/Dish";
import menuCSS from './menu.module.css'
export default function Menu({menuHeading,menuList,category}) {
  function getMenuListFilteredByCategory(){
    return menuList.filter((dish) => dish.categories.includes(category));
  }  
  const filteredMenuList = useMemo(() => getMenuListFilteredByCategory() , [category,menuList]);
  function renderMenuListItem(){
    return filteredMenuList.map((dish) => 
      <Dish key={dish.id} name={dish.displayName} price={dish.price} alt="Veg Mark" />
    )
  }
  return (
    <div className={menuCSS.menu+' col-4'}>
      <h2>{menuHeading}</h2>
      <p>{filteredMenuList.length} ITEMS</p>
      <ul>
        {renderMenuListItem()}
      </ul>
    </div>
  );
}


