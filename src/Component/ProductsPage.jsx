import React from "react";
import "./Product.css";
import { lists } from "./Image";
function ProductsPage({ cart, setCart }) {
  const addToCart = (item) => {
    //to remove duplicates
    let list = [...new Set([item, ...cart])];
    // console.log("item is added to cart");
    setCart(list);
  };
  return (
    <div className="container">
      {lists.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img
              src={item.src}
              className="card-img-top img-fluid"
              alt="product"
            />
            <div className="card-body">
              <h5 className="card-title">{item.prod_name}</h5>
              <p className="card-text">
                <i className="fa-solid fa-indian-rupee-sign">&#8377; </i>
                {item.price}
              </p>
              <button
                className="btn btn-primary m-0"
                onClick={() => addToCart(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsPage;
