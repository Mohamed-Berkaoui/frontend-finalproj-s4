import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState({
    data: [],
    loading: false,
    error: null,
  });
  useEffect(() => {
    setProducts((prevState) => ({ ...prevState, loading: true }));
    axios
      .get("http://localhost:3000/api/v1/product/top-rated")
      .then((response) => {
        console.log(response.data)
        setProducts({ data: response.data.data, loading: false, error: null });
      })
      .catch((error) => {
        console.log(error)
        setProducts({ data: [], loading: false, error: error.message });
      });
  }, []);
  const slides = [
    {
      id: 1,
      image: "https://wallpapercave.com/wp/wp6001987.jpg",
      title: "Summer Collection",
    },
    {
      id: 2,
      image: "https://wallpapers.com/images/featured/pc-gaming-zvbj1ryoiptz09af.jpg",
      title: "New Arrivals",
    },
    {
      id: 3,
      image: "https://png.pngtree.com/thumb_back/fh260/background/20240716/pngtree-d-cat-as-video-game-live-stream-gamer-use-pc-computer-image_16004832.jpg",
      title: "Special Offer",
    },
  ];
  const nextSlide = () => {setCurrentSlide((prev) => (prev + 1) % slides.length)};
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  return (
    <div className="home">
      <div className="slider" style={{backgroundImage:`url(${slides[currentSlide].image})`}}>

        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>

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
