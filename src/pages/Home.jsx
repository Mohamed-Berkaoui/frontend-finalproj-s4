
import ProductCard from "../components/ProductCard";
import Home_Slider from "../components/Home_Slider";
import useFetchTopRatedProducts from "../utils/useFetchTopRatedProducts";

function Home() {
 const products= useFetchTopRatedProducts();
  return (
    <div className="home">
      <Home_Slider />
      <section className="description">
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing products at great prices</p>
      </section>
      <section className="products">
        <h2>Featured Products</h2>
        {products.loading && <p>Loading products...</p>}
        {products.error && <p>Error: {products.error}</p>}
        {products.data.length > 0 && (
          <div className="product-grid">
            {products.data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
