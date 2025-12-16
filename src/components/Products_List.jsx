import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function Products_List({ search }) {
  const products = useSelector((state) => state.product);

  if (products.loading)
    return <div className="products-list">Loading products...</div>;
  if (products.error)
    return <div className="products-list">Error: {products.error}</div>;

  return (
    <div className="products-list">
      {products.data
        ?.filter((prod) =>
          prod.title.toLowerCase().includes(search.title.toLowerCase())
        )
        .filter((prod) =>
          search.category === "all" ? true : prod.category === search.category
        )
        .filter((prod) =>
          !search.price ? true : prod.price <= Number(search.price)
        )
        .map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
}

export default Products_List;
