import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItems.css";

import remove_icon from "../Assets/cart_cross_icon.png";

export default function CartItems() {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="CartItems">
      <div className="CartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price </p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="CartItems-format CartItems-format-main">
                <img src={e.image} alt="" className="CartIcon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="CartItems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="CartItems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }

        return null;
      })}

      <div className="CartItems-down">
        <div className="CartItems-total">
          <h1>Cart totals</h1>
          <div>
            <div className="CartItems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr />

            <div className="CartItems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>

            <hr />

            <div className="CartItems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>

          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="CartItems-promocode">
          <p>If you have a promocode, enter it here</p>

          <div className="CartItem-promobox">
            <input type="text" placeholder="promo code" />

            <button>Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
}
