import React, { useState } from "react";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import Categories from "./components/categories/Categories";
import { returnHeadingById } from "./services/content.heading";
import contentCSS from "./content.module.css";
import useApi from "../../../../services/useAPI";
export default function Content() {
  const [category, setCategory] = useState("recommended");
  const { loading: cartLoading, data: cartData } = useApi(
    "http://localhost:8080/cart"
  );

  const { loading: menuLoading, data: menuList } = useApi(
    "http://localhost:8080/menu-items"
  );
  const { loading: categoryLoading, data: categoryList } = useApi(
    "http://localhost:8080/categories"
  );
  if (menuLoading || categoryLoading || cartLoading) {
    return <h1>Loading...</h1>;
  }
  const menuHeading = returnHeadingById(category, categoryList);
  return (
    <div className={contentCSS.content}>
      <Categories
        category={category}
        categoryList={categoryList}
        setCategory={setCategory}
      />
      <Menu menuHeading={menuHeading} menuList={menuList} category={category} />
      <Cart data={cartData} />
    </div>
  );
}
