import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="NewsLetter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>

      <div>
        <input type="email" placeholder="Your Email Id" name="" id="" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
