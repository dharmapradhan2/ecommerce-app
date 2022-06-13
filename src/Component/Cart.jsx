import React from "react";
import { NavLink } from "react-router-dom";
function Cart({ cart, setCart, totalPrice, setTotalPrice }) {
  let total_price = 0;
  function removeList(id) {
    setCart(cart.filter((item, index) => index !== id));
  }
  return (
    <div className="container d-flex">
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="m-2">
          {cart.map((item, index) => {
            total_price += item.price;
            return (
              <tr key={index}>
                <th>
                  <img
                    src={item.src}
                    className="img-fluid"
                    alt="product"
                    style={{ width: "2rem" }}
                  />
                </th>
                <td>{item.prod_name}</td>
                <td>{item.price}</td>
                <td
                  className="btn bg-danger p-1 mt-1"
                  onClick={() => removeList(index)}
                >
                  Remove
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="bg-light m-2 card-body container-fluid">
        <p className="card-text">Total Price :{total_price}</p>
        <NavLink
          to="/checkout"
          className="btn bg-primary"
          onClick={setTotalPrice(total_price)}
        >
          CheckOut
        </NavLink>
      </div>
    </div>
  );
}

export default Cart;
