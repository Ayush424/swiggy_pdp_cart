import React, { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import Cart from "./Cart/Cart";
import Categories from "./Categories/Categories";
import { fetchCategoriesList,fetchMenuList } from "../../../services/fakeFetchFunctions";
import { categoryNameById } from "./helper/helper";
import ContentCSS from './content.module.css'
export default function Content(){
  
  const [category,setCategory]=useState('recommended');
  const [menu,setMenu]=useState([]);
  const [categoryList,setCategoryList]=useState([]);
  
  useEffect(() => {
    const menu = fetchMenuList();
    const categoryList = fetchCategoriesList();
    setMenu(menu);
    setCategoryList(categoryList);
  },[]);  
  const menuList = menu.filter((dish) => dish.categories.includes(category));
  const menuHeading = categoryNameById(category, categoryList);

  return (
    <div className={ContentCSS.content}>
      <Categories
        category={category}
        categoryList={categoryList}
        setCategory={setCategory}
      />
      <Menu menuHeading={menuHeading} menuList={menuList} />
      <Cart />
    </div>
  );
}
