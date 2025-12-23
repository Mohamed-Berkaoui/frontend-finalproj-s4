import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Cart_Item({item}) {
    const dispatch=useDispatch();
  return (
          <li >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price} $</p>
              <button onClick={()=>{
                dispatch({type:"REMOVE_FROM_CART",payload:item})
                toast.success("Product removed from cart!")
              }}>Remove</button>
              <button onClick={()=>{
                dispatch({type:"INCREASE_QUANTITY",payload:item})
                toast.info("Increased product quantity!")
              }}>increase</button>
              <button onClick={()=>{
                dispatch({type:"DECREASE_QUANTITY",payload:item})
                toast.info("Decreased product quantity!")
              }}>decrease</button>
            </li>
  )
}

export default Cart_Item