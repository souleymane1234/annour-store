// src/components/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./HeroSlider.css"; // tu peux personnaliser ici
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Super Woussoulan",
    subtitle: "Profiter de notre offre exceptionnelle.",
    price: "7500",
    oldPrice: "12000",
    discount: "37%",
    image: "/img/affiche2-removebg-preview.png", // ajoute ton image ici
  },
  {
    title: "Super Woussoulan",
    subtitle: "Profiter de notre offre exceptionnelle.",
    price: "7500",
    oldPrice: "12000",
    discount: "37%",
    image: "/img/affiche2-removebg-preview.png", // ajoute ton image ici
  },
  // Tu peux ajouter plus de slides ici
];

const scrollToProducts = () => {
  const section = document.getElementById('nos-produits');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
  const HeroSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="hero-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            <div className="text-content">
              <span className="label">🔥 Offre du jour</span>
              <h1 className="title">
                <span className="highlight" style={{fontSize: '80px'}}>{slide.title}</span>
              </h1>
              <p className="description">{slide.subtitle}</p>
              <div className="stars">⭐⭐⭐⭐⭐ <span className="rating">(4.9)</span></div>
              <div className="price">
                <span className="new"> A partir de {slide.price} Fcfa</span>
                <span className="old">{slide.oldPrice} Fcfa</span>
                <span className="discount">{slide.discount} de réduction</span>
              </div>
              <div className="buttons">
                <button className="buy-now" onClick={scrollToProducts}>COMMANDER MAINTENANT</button>
                <button className="discover"><Link to="/products" style={{color: "white"}}> VOIR PLUS </Link></button>
              </div>
            </div>
            <div className="image-content">
              <img src={slide.image} alt="Produit en vedette" className="max-w-md w-full transition duration-500 ease-in-out transform hover:scale-105 hover:-rotate-3 hover:animate-bounce"
              />
            </div>
          </div>
        </SwiperSlide>

      ))}
    </Swiper>
  );
}
export default HeroSlider;
