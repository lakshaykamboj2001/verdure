"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './LuxuryShowcase.module.css';
// import svgPaths from '../imports/svg-0go14ixb5x';

// Import all the Figma assets
const imgImage = "./images/luxurybag.webp";
const imgImage1 = "./images/luxurybag.webp";
const imgImage2 = "./images/luxurybag.webp";
const imgImage3 = "./images/luxurybag.webp";
const imgImage4 = "./images/luxurybag.webp";
const imgImage5 = "./images/luxurybag.webp";
const imgImage6 = "./images/luxurybag.webp";
const imgImage7 = "./images/luxurybag.webp";

export default function LuxuryShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredHeart, setHoveredHeart] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Sample product data - only 3 items for rotation
  const products = [
    {
      image: imgImage,
      title: "the ivy",
      description: '"Woven with echoes of Earth" Organic Hemp • 78% Recycled',
      actionText: "uncover the way"
    },
    {
      image: imgImage1,
      title: "the classic",
      description: '"Timeless elegance meets modern comfort" Premium Cotton • 100% Organic',
      actionText: "wear this story"
    },
    {
      image: imgImage,
      title: "the artisan",
      description: '"Handcrafted with passion" Natural Linen • Sustainable',
      actionText: "discover more"
    }
  ];

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 3000); // 3 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, products.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleCardClick = () => {
    setIsPaused(true);
    // Resume after 5 seconds of inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const HeartIcon = () => (
    <div 
      className={`${styles.heartIcon} ${hoveredHeart ? styles.heartHovered : ''}`}
      onMouseEnter={() => setHoveredHeart(true)}
      onMouseLeave={() => setHoveredHeart(false)}
    >
      <svg
        className={styles.heartSvg}
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path
        //   d={svgPaths.p3d8b6c00}
          className={styles.heartPath}
        />
      </svg>
    </div>
  );

  const ProductCard = ({ image, title = "the ivy", description = '"Woven with echoes of Earth" Organic Hemp • 78% Recycled', actionText = "uncover the way", index = 0 }) => (
    <div 
      className={`${styles.productCard} ${isVisible ? styles.productCardVisible : ''}`}
      style={{ animationDelay: `${index * 0.3}s` }}
      onClick={handleCardClick}
    >
      <div className={styles.cardContent}>
        <div
          className={styles.productImage}
          style={{ backgroundImage: `url('${image}')` }}
        />
        
        <div className={styles.productInfo}>
          <div 
            className={`${styles.productTextContainer} ${isVisible ? styles.productTextVisible : ''}`}
            style={{ animationDelay: `${0.2 + index * 0.3}s` }}
          >
            <div className={styles.productTitle}>
              <p>{title}</p>
            </div>
            <div className={`${styles.productDescription} ${styles.adjustLetterSpacing}`}>
              <p>{description}</p>
            </div>
          </div>
          
          <div className={styles.actionContainer}>
            <div className={`${styles.actionText} ${styles.adjustLetterSpacing}`}>
              <p>{actionText}</p>
            </div>
          </div>
        </div>
        
        <HeartIcon />
      </div>
    </div>
  );

  // Get current product based on rotation
  const currentProduct = products[currentIndex];
  const nextProduct = products[(currentIndex + 1) % products.length];
  const prevProduct = products[(currentIndex - 1 + products.length) % products.length];

  return (
    <div className={`${styles.container} ${isVisible ? styles.containerVisible : ''}`}>
      <div
        className={`${styles.backgroundImage} ${isVisible ? styles.backgroundImageVisible : ''}`}
        style={{
          backgroundImage: `url('${imgImage2}'), url('${imgImage3}'), url('${imgImage4}'), url('${imgImage5}'), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgImage6}'), url('${imgImage7}')`,
        }}
      />
      
      <div 
        className={`${styles.productCardsContainer} ${isVisible ? styles.productCardsContainerVisible : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ProductCard 
          image={prevProduct.image}
          title={prevProduct.title}
          description={prevProduct.description}
          actionText={prevProduct.actionText}
          index={0}
        />
        
        <ProductCard 
          image={currentProduct.image}
          title={currentProduct.title}
          description={currentProduct.description}
          actionText={currentProduct.actionText}
          index={1}
        />
        
        <ProductCard 
          image={nextProduct.image}
          title={nextProduct.title}
          description={nextProduct.description}
          actionText={nextProduct.actionText}
          index={2}
        />
      </div>
      
      <div className={styles.categoryText}>
        <p>Bags</p>
      </div>
    </div>
  );
}