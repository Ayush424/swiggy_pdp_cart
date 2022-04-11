import React from "react";
export default function Cart() {
    return (
      <div className="cart-wrapper col-4">
        <div className="cart">
          <h2>Cart</h2>
          <p>1 ITEM</p>
          <ul>
            <li>Kadhai Paneer Biryani</li>
          </ul>
          <div className="amount">
            <h3>Subtotal</h3>
            <p>₹ 249</p>
          </div>
          <p className="disclaimer">Extra charges may apply</p>
          <button className="check-out-button">CHECKOUT→</button>
        </div>
      </div>
    );
  }