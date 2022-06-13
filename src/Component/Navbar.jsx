import React from "react";
import {  NavLink } from "react-router-dom";
function Navbar({ cart }) {
  return (
    <div className="container-fluid d-flex flex-column bg-light">
      <div className="navbar-brand fw-blod text-center">
        Ecommerce App
      </div>
      <div className="navbar bd-highlight">
        <ul className="d-flex flex-row m-2 ">
          <div className="nav-item">
            <NavLink className="nav-link btn active" to='/' >
              All Product's
            </NavLink>
          </div>
        </ul>
        <div className="d-flex">
          <NavLink className="btn btn-success" to='/cart'>
            Cart
            <i className="fa-solid fa-cart-shopping-fast">&#x1F6D2;</i>
            {cart.length > 0 ? cart.length : ""}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
