import React from 'react';

const ProductBanner = () => {
  return (
    <section>
      <div className="banner_section Product_Page_banner_section">
        <div className="Va_banner_img Product_Page_banner_img">
          <img
            src="/images/banner-2.webp"
            className="banner-desk"
            alt="Men Desktop Banner"
          />
          <img
            src="/images/banner-2-mob.png"
            className="banner-mob"
            alt="Men Mobile Banner"
          />
        </div>
        <div className="banner_section_content Product_Page_banner_section_content">
          <h2>Men</h2>
          {/* <p>Explore new in men's ready-to-wear collection.</p> */}
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;
