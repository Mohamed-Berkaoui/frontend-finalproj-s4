import React from 'react'
import { useSelector } from 'react-redux'

function ProductCard({ product }) {
  const categories=useSelector(state=>state.category);
  const productCategory=categories.data?.find(cat=>cat._id===product.category);
  return (
          <div  className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <h5>category :  {productCategory?.name}</h5>
                <p>{product.price} $</p>
                <button>add to cart</button>
              </div>
  )
}

export default ProductCard