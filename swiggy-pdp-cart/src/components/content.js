import React, { useEffect, useState } from "react";
import Menu from "./menu";
import Cart from "./cart";
import Categories from "./categories";
import { categoryNameById,fetchCategoriesList,fetchMenuList } from "../services/helper";

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
    <div className="content">
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
