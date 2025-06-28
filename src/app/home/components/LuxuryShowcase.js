"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './LuxuryShowcase.module.css';
// import svgPaths from '../imports/svg-0go14ixb5x';

// Import all the Figma assets - Desktop images
const imgImage = "/images/luxurybag.webp";
const imgImage1 = "/images/luxurybag.webp";
const imgImage2 = "/images/luxurybag.webp";
const imgImage3 = "/images/luxurybag.webp";
const imgImage4 = "/images/luxurybag.webp";
const imgImage5 = "/images/luxurybag.webp";
const imgImage6 = "/images/luxurybag.webp";
const imgImage7 = "/images/luxurybag.webp";

// Mobile-specific images
const mobileImgImage = "/images/mobile-banner.png";
const mobileImgImage1 = "/images/mob-arrival-3.png";
const mobileImgImage2 = "/images/mob-arrival-4.png";

export default function LuxuryShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredHeart, setHoveredHeart] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sample product data - different images for mobile and desktop
  const products = [
    {
      image: isMobile ? mobileImgImage : imgImage,
      title: "the ivy",
      description: '"Woven with echoes of Earth" Organic Hemp • 78% Recycled',
      actionText: "uncover the way"
    },
    {
      image: isMobile ? mobileImgImage1 : imgImage1,
      title: "the classic",
      description: '"Timeless elegance meets 100% Organic',
      actionText: "wear this story"
    },
    {
      image: isMobile ? mobileImgImage2 : imgImage,
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
//   useEffect(() => {
//     if (!isPaused) {
//       intervalRef.current = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//       }, 3000); // 3 seconds
//     }

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [isPaused, products.length]);

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
    //   onMouseEnter={() => setHoveredHeart(true)}
    //   onMouseLeave={() => setHoveredHeart(false)}
    >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 19.6541L11.2423 18.9696C9.61025 17.4786 8.26025 16.2024 7.19225 15.1409C6.12442 14.0792 5.2815 13.143 4.6635 12.3321C4.0455 11.5213 3.61375 10.7876 3.36825 10.1311C3.12275 9.47481 3 8.81456 3 8.15039C3 6.87856 3.43208 5.81064 4.29625 4.94664C5.16025 4.08247 6.22817 3.65039 7.5 3.65039C8.3795 3.65039 9.2045 3.87539 9.975 4.32539C10.7455 4.77539 11.4205 5.42989 12 6.28889C12.5795 5.42989 13.2545 4.77539 14.025 4.32539C14.7955 3.87539 15.6205 3.65039 16.5 3.65039C17.7718 3.65039 18.8398 4.08247 19.7038 4.94664C20.5679 5.81064 21 6.87856 21 8.15039C21 8.81456 20.8773 9.47481 20.6318 10.1311C20.3863 10.7876 19.9545 11.5213 19.3365 12.3321C18.7185 13.143 17.8787 14.0792 16.8173 15.1409C15.7558 16.2024 14.4026 17.4786 12.7578 18.9696L12 19.6541ZM12 18.3004C13.6 16.8542 14.9167 15.6155 15.95 14.5841C16.9833 13.5526 17.8 12.6577 18.4 11.8994C19 11.1411 19.4167 10.4693 19.65 9.88414C19.8833 9.29881 20 8.72089 20 8.15039C20 7.15039 19.6667 6.31706 19 5.65039C18.3333 4.98372 17.5 4.65039 16.5 4.65039C15.7038 4.65039 14.9692 4.87764 14.2962 5.33214C13.6231 5.78664 13.0205 6.47089 12.4885 7.38489H11.5115C10.9667 6.45806 10.3609 5.77056 9.69425 5.32239C9.02758 4.87439 8.29617 4.65039 7.5 4.65039C6.51283 4.65039 5.68267 4.98372 5.0095 5.65039C4.3365 6.31706 4 7.15039 4 8.15039C4 8.72089 4.11667 9.29881 4.35 9.88414C4.58333 10.4693 5 11.1411 5.6 11.8994C6.2 12.6577 7.01667 13.5494 8.05 14.5744C9.08333 15.5994 10.4 16.8414 12 18.3004Z" fill="#1C1C1C"/>
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
          backgroundImage: isMobile 
            ? `url('/images/luxurybagmob.png')`
            : `url('${imgImage2}'), url('${imgImage3}'), url('${imgImage4}'), url('${imgImage5}'), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgImage6}'), url('${imgImage7}')`,
        }}
      />
      
      <div 
        className={`${styles.productCardsContainer} ${isVisible ? styles.productCardsContainerVisible : ''}`}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
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