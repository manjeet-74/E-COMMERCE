import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import nav_dropdown from "../Assets/arrow_icon.svg";
import "./Navbar.css";

import { ShopContext } from "../../Context/ShopContext";
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png";

export default function Navbar() {
  const [menu, setMenu] = useState("");

  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shopper</p>
      </div>

      <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>

        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>{" "}
          {menu === "men" ? <hr /> : <></>}{" "}
        </li>

        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women{" "}
          </Link>
          {menu === "women" ? <hr /> : <></>}{" "}
        </li>

        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}{" "}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? <button onClick={() => {
          localStorage.removeItem("auth-token"); window.location.replace("/")
        }}>Logout</button> :
          <Link style={{ textDecoration: "none" }} to="/login">
            <button>Login</button>
          </Link>}
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
