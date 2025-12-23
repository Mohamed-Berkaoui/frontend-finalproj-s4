import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart_Item from "../components/Cart_Item";
import { useNavigate } from "react-router";

function Cart() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!cart.length) {
      return navigate(-1);
    }
  });
  return (
    <div className="cart">
      <button className="checkout-button" onClick={() => navigate("/checkout")}>
        Checkout
      </button>
      <h2>Your Cart</h2>

      {cart?.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <Cart_Item key={item._id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
