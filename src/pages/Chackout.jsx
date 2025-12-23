import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Chackout() {
  const [paymentMethod, setPaymentMethod] = useState("onDelivery");
  const cart = useSelector((state) => state.cart);
  const token = useSelector((state) => state.user);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
const dispatch=useDispatch();
const navigate=useNavigate();
  function handleCheckout() {
    if (!token) {
      toast.error("You must be logged in to checkout.");
       return navigate('/user/login',{state:'/checkout'});
    }
    const items = cart.map((item) => ({
      product: item._id,
      quantity: item.quantity,
    }));
    const reqBody = {
      items: items,
      total: totalPrice,
      paymentMethod: paymentMethod,
    };
    axios
      .post("http://localhost:3000/api/v1/order", reqBody, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        toast.success("Order placed successfully!");
        dispatch({type:"CLEAR_CART"})
        navigate('/')
      })
      .catch((err) => toast.error("Checkout failed: " + err.response?.data.data));
  }

  return (
    <div className="checkout">
      <h2>Checkout Page</h2>
      <h3>Total Price: {totalPrice} $</h3>
      <select
        name="checkoutType"
        id=""
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="onDelevary">Cash on Delivery</option>
        <option value="paypal">PayPal</option>
      </select>
      <button onClick={handleCheckout}>order now </button>
    </div>
  );
}

export default Chackout;
