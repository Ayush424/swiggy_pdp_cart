import React from "react";
import CartCSS from "./cart.module.css"
export default function Cart() {
    return (
      <div className="col-4">
        <div className={CartCSS.cart}>
          <h2>Cart</h2>
          <p>1 ITEM</p>
          <ul>
            <li>Kadhai Paneer Biryani</li>
          </ul>
          <div className={CartCSS.amount}>
            <h3>Subtotal</h3>
            <p>₹ 249</p>
          </div>
          <p className={CartCSS.disclaimer}>Extra charges may apply</p>
          <button className={CartCSS.checkOutButton}>CHECKOUT→</button>
        </div>
      </div>
    );
  }