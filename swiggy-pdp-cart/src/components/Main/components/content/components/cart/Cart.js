import React from "react";
import cartCSS from "./cart.module.css";
export default function Cart({data}) {
  return (
    <div className="col-4">
      <div className={cartCSS.cart}>
        <h2>Cart</h2>
        <p>{data.lineItems.length} ITEM</p>
        <ul>
          <li>{data.lineItems[0].name}</li>
        </ul>
        <div className={cartCSS.amount}>
          <h3>Subtotal</h3>
          <p>₹ {data.subTotal}</p>
        </div>
        <p className={cartCSS.disclaimer}>Extra charges may apply</p>
        <button className={cartCSS.checkOutButton}>CHECKOUT→</button>
      </div>
    </div>
  );
}
