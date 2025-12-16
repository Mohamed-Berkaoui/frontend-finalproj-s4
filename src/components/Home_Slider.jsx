import React, { useState } from "react";

function Home_Slider() {
  const slides = [
    {
      id: 1,
      image: "https://wallpapercave.com/wp/wp6001987.jpg",
      title: "Summer Collection",
    },
    {
      id: 2,
      image:
        "https://wallpapers.com/images/featured/pc-gaming-zvbj1ryoiptz09af.jpg",
      title: "New Arrivals",
    },
    {
      id: 3,
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20240716/pngtree-d-cat-as-video-game-live-stream-gamer-use-pc-computer-image_16004832.jpg",
      title: "Special Offer",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="slider"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default Home_Slider;
