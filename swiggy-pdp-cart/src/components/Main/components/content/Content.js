import React, { useEffect, useState ,useMemo} from "react";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import Categories from "./components/categories/Categories";
import { fetchCategoriesList,fetchMenuList } from "./services/fetchPDPMockData";
import { returnHeadingById } from "./services/content.heading";
import contentCSS from './content.module.css'
export default function Content(){
  
  
  const [category,setCategory]=useState('recommended');
  const [menuList,setMenuList]=useState([]);
  const [categoryList,setCategoryList]=useState([]);
  
  function getMenuListFilteredByCategory(){
    return menuList.filter((dish) => dish.categories.includes(category));
  }
  useEffect(() => {
    async function fetchData(){
      const menu = await fetchMenuList();
      const categoryList = await fetchCategoriesList();
      setMenuList(menu);
      setCategoryList(categoryList);
    }
    fetchData();
  },[]);  
  const filteredMenuList = useMemo(() => getMenuListFilteredByCategory() , [category,menuList]);
  const menuHeading = returnHeadingById(category, categoryList);

  return (
    <div className={contentCSS.content}>
      <Categories
        category={category}
        categoryList={categoryList}
        setCategory={setCategory}
      />
      <Menu menuHeading={menuHeading} menuList={filteredMenuList} />
      <Cart />
    </div>
  );
}
