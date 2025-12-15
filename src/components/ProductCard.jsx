import React from 'react'

function ProductCard({ product }) {
  return (
          <div  className="product-card">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <h5>category :  {product.category}</h5>
                <p>{product.price} $</p>
                <button>add to cart</button>
              </div>
  )
}

export default ProductCard