import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
import "./Offers.css";

export default function Offers() {
  return (
    <div className="Offers">
      <div className="Offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>

      <div className="Offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}
