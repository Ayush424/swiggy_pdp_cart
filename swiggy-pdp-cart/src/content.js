import React from "react";
import Menu from "./menu";
import Cart from "./cart";
import Categories from "./categories"

export default function Content() {
  return (
    <div className="content">
      <Categories />
      <Menu />
      <Cart />
    </div>
  );
}
