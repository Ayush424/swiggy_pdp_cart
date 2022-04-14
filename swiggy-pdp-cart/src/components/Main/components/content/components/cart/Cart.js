import React, { useEffect,useState } from "react";
import cartCSS from "./cart.module.css"
import {fetchCartData} from "./services/fetchCartMockData";
export default function Cart() {
  const [cartData,setCartData]= useState({"lineItems":[{"id":"0","name":"NULL","quantity":0,"price":0,"currency":"INR"}],"shippingFee":0,"discount":0,"tax":0,"subTotal":0});
  useEffect(() => {
    async function fetchData(){
      const cart = await fetchCartData();
      setCartData(cart);
    }
    fetchData();
  },[]); 
    return (
      <div className="col-4">
        <div className={cartCSS.cart}>
          <h2>Cart</h2>
          <p>{cartData.lineItems.length} ITEM</p>
          <ul>
            <li>{cartData.lineItems[0].name}</li>
          </ul>
          <div className={cartCSS.amount}>
            <h3>Subtotal</h3>
            <p>₹ {cartData.subTotal}</p>
          </div>
          <p className={cartCSS.disclaimer}>Extra charges may apply</p>
          <button className={cartCSS.checkOutButton}>CHECKOUT→</button>
        </div>
      </div>
    );
  }