import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./App.css";
import ProductsPage from "./Component/ProductsPage";
import Cart from "./Component/Cart";
import Navbar from "./Component/Navbar";
import Checkout from "./Component/Checkout";
import SucessPage from "./Component/SucessPage";
import ErrorPage from "./Component/ErrorPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [prodName, setProdName] = useState([]);
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AXVa38MVxxJn8BJJbG_AsSbY_Yh3SZ79tQ_jNKBsIoWaE4DjxUtMtqRaGAxJT_54qSUGvkwv-FlRpmWZ",
      }}
    >
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
                setTotalPrice={setTotalPrice}
                setProdName={setProdName}
              />
            }
          ></Route>
          <Route
            path="/checkout"
            element={<Checkout totalPrice={totalPrice} prodName={prodName} />}
          ></Route>
          <Route path="/error" element={<ErrorPage />}></Route>
          <Route path="/sucess" element={<SucessPage />}></Route>
        </Routes>
      </div>
    </PayPalScriptProvider>
  );
}
export default App;
