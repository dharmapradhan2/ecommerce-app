import React, { useState } from "react";
import "./Checkout.css";
import { PayPalButtons } from "@paypal/react-paypal-js";
function Checkout({ totalPrice, prodName }) {
  let prodList = prodName.join(" ");
  // console.log(prodList);
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  // console.log(totalPrice);
  const handleApprove = (orderId) => {
    // here calling the backend function to fulfill the order
    // if response is success
    setPaid(true);
    // if response is error
    setError("error");
  };
  if (paid) {
    // display sucess message and redirect to sucess page
    alert("Thank you for your purches");
    window.location.reload();
    window.location.href = "/sucess";
  }
  if (error) {
    // display error message & redirect to error page
    alert(`error : ${error}`);
    window.location.reload();
    window.location.href = "/error";
  }
  return (
    <div className="container p-1 m-2 align-center">
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "blue",
          shape: "pill",
          label: "pay",
        }}
        onClick={(data, action) => {
          const purchased = false;
          if (purchased) {
            setError(`You alredy purchased these products.`);
            return action.reject();
          } else {
            return action.resolve();
          }
        }}
        createOrder={(data, actions) => {
          // Set up the transaction
          return actions.order.create({
            purchase_units: [
              {
                description: prodList,
                amount: {
                  value: totalPrice,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          handleApprove(data.orderID);
        }}
        onError={(err) => {
          setError(err);
          console.error(`Payment checkout error: ${err}`);
        }}
        onCancel={() => {
          // displaying cancel message and redirect to cancel page or back to cart
          window.location.reload();
          window.location.href = "/error";
        }}
      />
    </div>
  );
}

export default Checkout;
