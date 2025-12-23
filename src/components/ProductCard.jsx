import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  function handleAddToCart(){
    dispatch({type:"ADD_TO_CART",payload:product})
    toast.success("Product added to cart!")
  }
  const categories=useSelector(state=>state.category);
  const productCategory=categories.data?.find(cat=>cat._id===product.category);
  return (
          <div  className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <h5>category :  {productCategory?.name}</h5>
                <p>{product.price} $</p>
                <button onClick={handleAddToCart}>add to cart</button>
              </div>
  )
}

export default ProductCard