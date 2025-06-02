import React from 'react'
import './ProductCard.css'
import desktopImage from '../assets/image-product-desktop.jpg'
import mobileImage from '../assets/image-product-mobile.jpg'
import cartIcon from '../assets/icon-cart.svg'

const ProductCard = () => {
  return (
    <div className="product-card">
      
      <picture>
        <source media="(min-width: 768px)" srcSet={desktopImage} />
        <img src={mobileImage} alt="Gabrielle perfume bottle" className="product-image" />
      </picture>

      
      <div className="card-text">
        <p className="category">PERFUME</p>
        <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
        <p className="description">
          A floral, solar and voluptuous interpretation composed by Olivier Polge,
          Perfumer-Creator for the House of CHANEL.
        </p>

        <div className="price-section">
          <span className="price">$149.99</span>
          <span className="original-price">$169.99</span>
        </div>

        <button className="add-to-cart">
          <img src={cartIcon} alt="cart icon" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
