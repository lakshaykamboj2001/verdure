import React from 'react';

const PhilosophyBanner = () => {
  return (
    <section>
      <div className="banner_section Product_Page_banner_section Philosophy_banner_section">
        <div className="Va_banner_img Philosophy_banner_img">
          <img
            src="/images/banner-4.webp"
            className="banner-desk"
            alt="Men Desktop Banner"
          />
          <img
            src="/images/banner-4-mob.webp"
            className="banner-mob"
            alt="Men Mobile Banner"
          />
        </div>
        <div className="banner_section_content Product_Page_banner_section_content">
          <h2>a philosophy cut in cloth</h2>
          <h4>We Chose Differently</h4>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyBanner;
