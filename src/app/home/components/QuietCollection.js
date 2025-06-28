"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import styles from './QuietCollection.module.css';
// import svgPaths from "../imports/svg-qxglyvf1bm";
// import svgPathsMobile from "../imports/svg-r7d7netbz0";
import imgFrame1430106881 from "../../../../public/images/jacket1.png";
import imgRectangle1796 from "../../../../public/images/jacket1.png";
import imgRectangle1797 from "../../../../public/images/jacket1.png";

export default function QuietCollection() {
  const [favorites, setFavorites] = useState({});
  const [is_mobile, setIsMobile] = useState(false);

  const products = [
    {
      id: 1,
      name: "The Horizon Blazer",
      description: '"Woven with echoes of Earth" Organic Hemp • 78% Recycled',
      image: imgFrame1430106881,
      member_price: "3,250",
      standard_price: "4,250",
      link: "/products/horizon-blazer"
    },
    {
      id: 2,
      name: "Mist Dress",
      description: '"Woven with echoes of Earth" Organic Hemp • 78% Recycled',
      image: imgRectangle1796,
      member_price: "2,850",
      standard_price: "3,750",
      link: "/products/mist-dress"
    },
    {
      id: 3,
      name: "Salt Hem Tunic",
      description: '"Woven with echoes of Earth" Organic Hemp • 78% Recycled',
      image: imgRectangle1797,
      member_price: "2,450",
      standard_price: "3,250",
      link: "/products/salt-hem-tunic"
    }
  ];

  // Responsive breakpoints for react-multi-carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 0
    }
  };

  // Check if mobile
  useEffect(() => {
    const check_mobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    check_mobile();
    window.addEventListener('resize', check_mobile);
    return () => window.removeEventListener('resize', check_mobile);
  }, []);

  const toggle_favorite = (product_id) => {
    setFavorites(prev => ({
      ...prev,
      [product_id]: !prev[product_id]
    }));
  };

  const CustomButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    
    return (
      <div className={`${styles.carousel_navigation}`}>
        <div 
          className={`${styles.nav_arrow} ${styles.nav_arrow_left}`}
          onClick={() => previous()}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g clip-path="url(#clip0_3407_111)">
    <path d="M17.7232 24.9989L11.5898 18.8655L12.5335 17.9219L19.6105 24.9989L12.5335 32.0759L11.5898 31.1322L17.7232 24.9989Z" fill="#1C1C1C"/>
  </g>
  <defs>
    <clipPath id="clip0_3407_111">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
        
        <div 
          className={`${styles.nav_arrow}`}
          onClick={() => next()}
        >
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g clip-path="url(#clip0_3407_111)">
    <path d="M17.7232 24.9989L11.5898 18.8655L12.5335 17.9219L19.6105 24.9989L12.5335 32.0759L11.5898 31.1322L17.7232 24.9989Z" fill="#1C1C1C"/>
  </g>
  <defs>
    <clipPath id="clip0_3407_111">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
      </div>
    );
  };

  const HeartIcon = ({ is_favorited, onClick }) => (
    <div 
      className={`${styles.favorite_button} ${is_favorited ? styles.favorited : ''}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
    >
    <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24"><path d="M12 19.6538L11.2422 18.9693C9.61025 17.4783 8.26025 16.202 7.19225 15.1405C6.12442 14.0788 5.2815 13.1426 4.6635 12.3318C4.0455 11.5209 3.61375 10.7873 3.36825 10.1308C3.12275 9.47442 3 8.81417 3 8.15C3 6.87817 3.43208 5.81025 4.29625 4.94625C5.16025 4.08208 6.22817 3.65 7.5 3.65C8.3795 3.65 9.2045 3.875 9.975 4.325C10.7455 4.775 11.4205 5.4295 12 6.2885C12.5795 5.4295 13.2545 4.775 14.025 4.325C14.7955 3.875 15.6205 3.65 16.5 3.65C17.7718 3.65 18.8398 4.08208 19.7038 4.94625C20.5679 5.81025 21 6.87817 21 8.15C21 8.81417 20.8773 9.47442 20.6318 10.1308C20.3863 10.7873 19.9545 11.5209 19.3365 12.3318C18.7185 13.1426 17.8788 14.0788 16.8173 15.1405C15.7558 16.202 14.4026 17.4783 12.7577 18.9693L12 19.6538ZM12 18.3C13.6 16.8538 14.9167 15.6151 15.95 14.5838C16.9833 13.5523 17.8 12.6573 18.4 11.899C19 11.1407 19.4167 10.4689 19.65 9.88375C19.8833 9.29842 20 8.7205 20 8.15C20 7.15 19.6667 6.31667 19 5.65C18.3333 4.98333 17.5 4.65 16.5 4.65C15.7038 4.65 14.9692 4.87725 14.2962 5.33175C13.6231 5.78625 13.0205 6.4705 12.4885 7.3845H11.5115C10.9667 6.45767 10.3609 5.77017 9.69425 5.322C9.02758 4.874 8.29617 4.65 7.5 4.65C6.51283 4.65 5.68267 4.98333 5.0095 5.65C4.3365 6.31667 4 7.15 4 8.15C4 8.7205 4.11667 9.29842 4.35 9.88375C4.58333 10.4689 5 11.1407 5.6 11.899C6.2 12.6573 7.01667 13.549 8.05 14.574C9.08333 15.599 10.4 16.841 12 18.3Z" fill="#1C1C1C"></path></svg>
    </div>
  );

  const ProductCard = ({ product }) => (
    <div className={`${styles.product_card}`}>
      <img 
        className={styles.product_image}
        src={product.image.src}
        alt={product.name}
        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
      />
      <div className={`${styles.product_overlay}`} />
      
      <HeartIcon 
        is_favorited={favorites[product.id]} 
        onClick={() => toggle_favorite(product.id)}
      />

      <div className={`${styles.product_content}`}>
        <div className={`${styles.product_info}`}>
          <div className={`${styles.product_details}`}>
            <h3 className={`${styles.product_name}`}>{product.name}</h3>
            <p className={`${styles.product_description}`}>{product.description}</p>
          </div>
          
          <Link href={product.link} className={`${styles.wear_story_link}`}>
            <p className={`${styles.wear_story_text}`}>wear this story</p>
            <div className={`${styles.wear_story_line}`} />
          </Link>
        </div>
      </div>

      {!is_mobile && (
        <div className={`${styles.price_section}`}>
          <div className={`${styles.price_item}`}>
            <p className={`${styles.price_label}`}>Member Rate</p>
            <p className={`${styles.price_value}`}>$ {product.member_price}</p>
          </div>
          <div className={`${styles.price_item}`}>
            <p className={`${styles.price_label}`}>Standard Rate</p>
            <p className={`${styles.price_value}`}>$ {product.standard_price}</p>
          </div>
        </div>
      )}

      {is_mobile && (
        <div className={`${styles.price_section}`}>
          <div className={`${styles.price_item}`}>
            <p className={`${styles.price_label}`}>Member Rate</p>
            <p className={`${styles.price_value}`}>$ {product.member_price}</p>
          </div>
          <div className={`${styles.price_item}`}>
            <p className={`${styles.price_label}`}>Standard Rate</p>
            <p className={`${styles.price_value}`}>$ {product.standard_price}</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
    <div className={`${styles.mobile_enter_ritual_textPadding}`}>
    <div className={`${styles.quiet_collection_container}`}>
      <div className={`${styles.collection_header}`}>
        <h1 className={`${styles.collection_title}`}>
          {is_mobile ? "The Quite Collection" : "The Quiet Collection"}
        </h1>
        
        <div className={`${styles.enter_ritual_section}`}>
          <Link href="/ritual" className={`${styles.enter_ritual_text}`}>
            Enter the ritual
          </Link>
        </div>
      </div>

      <div className={`${styles.carousel_wrapper}`}>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all 0.5s"
          transitionDuration={500}
          containerClass={`${styles.carousel_container}`}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CustomButtonGroup />}
          itemClass={`${styles.carousel_item}`}
          sliderClass={`${styles.carousel_track}`}
          dotListClass={`${styles.dot_list}`}
          showDots={false}
          swipeable={true}
          draggable={true}
          centerMode={false}
          focusOnSelect={false}
          minimumTouchDrag={80}
          shouldResetAutoplay={true}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          ssr={false}
          partialVisible={is_mobile}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>

  
    </div>
        <div className={`${styles.enter_ritual_section}`}>
        <Link href="/ritual" className={`${styles.enter_ritual_text} ${styles.mobile_enter_ritual_text}`}>
          Enter the ritual
        </Link>
      </div>
      </div>
      </>
  );
}