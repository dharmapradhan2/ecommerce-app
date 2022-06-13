import React from "react";
import "./App.css";
import ProductsPage from "./Component/ProductsPage";
import Cart from "./Component/Cart";
import Navbar from "./Component/Navbar";
import Checkout from "./Component/Checkout";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div className="container-fluid body">
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<ProductsPage cart={cart} setCart={setCart} />}
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          }
        ></Route>
        <Route
          path="/checkout"
          element={<Checkout totalPrice={totalPrice} />}
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
