"use client"
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';
// import svgPathsDesktop from '../imports/svg-rem2zhim4a';
// import svgPathsMobile from '../imports/svg-6swyda5olx';

function VALogo({ isMobile = false }) {
//   const svgPaths = isMobile ? svgPathsMobile : svgPathsDesktop;
  const size = isMobile ? { width: 43.764, height: 34.002 } : { width: 57.918, height: 45 };
  
  return (
    <div 
      className={`${styles.logo} ${isMobile ? styles.logoMobile : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      role="button"
      tabIndex={0}
      aria-label="Verdure Atelier - Back to top"
    >
      <div className={styles.LogosvgSize} style={{ width: `${size.width}px`, height: `${size.height}px` }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="45" viewBox="0 0 58 45" fill="none">
  <path d="M19.336 44.9997H17.9165L4.73164 8.74356C3.13471 4.36679 2.07009 2.53328 0 0.758918V0.640625H10.3505V0.758918C9.28584 2.17841 8.57609 5.37226 9.87729 8.92099L20.4643 37.9023L30.2233 11.4051C32.4117 5.5497 30.8148 2.41499 29.5727 0.758918V0.640625H37.4391V0.758918C34.7184 3.24303 33.7721 5.37226 32.116 9.98561L19.336 44.9997Z" fill="white"/>
  <path d="M53.2422 36.8018C55.0639 41.6595 55.8534 43.0562 57.918 44.8779V45H48.2627L49.4834 44.6904C50.4765 44.5249 50.4767 44.3589 48.0195 36.5586L45.4219 29.4414H45.4355L44.5293 27.0244H44.5576L37.1963 6.6875L39.6191 0H39.6387L53.2422 36.8018Z" fill="white"/>
  <path d="M22.6304 42.0205L22.7142 42.0657C24.4758 43.0994 25.4825 43.2874 27.8313 43.2874L48.132 43.2874C52.1849 43.2874 51.4875 43.0681 53.2491 42.0344L53.333 42.0344L53.4169 44.7978H53.333C51.5714 43.764 51.8352 44.9999 49.4445 44.9999L27.8313 44.9789C25.4405 44.9789 25.2063 44.9895 22.6304 44.9999L22.6303 44.9789L22.6304 42.0205Z" fill="white"/>
</svg>
      </div>
    </div>
  );
}

function NavigationLinks({ isMobile = false }) {
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const links = [
    'Collections',
    'About', 
    'Membership',
    'Sustainability',
    'My Account',
    'Contact Us',
    'Privacy Policy',
    isMobile ? 'Terms of service' : 'Terms & Conditions'
  ];

  const handleLinkClick = (link) => {
    // Handle navigation - replace with actual routing logic
    console.log(`Navigating to ${link}`);
  };

  return (
    <nav className={`${styles.navigation} ${isMobile ? styles.navigationMobile : ''}`}>
      {links.map((link, index) => (
        <a
          key={index}
          className={`${styles.navLink} ${isMobile ? styles.navLinkMobile : ''}`}
          onClick={() => handleLinkClick(link)}
          onMouseEnter={() => setHoveredLink(index)}
          onMouseLeave={() => setHoveredLink(null)}
          role="button"
          tabIndex={0}
          aria-label={`Navigate to ${link}`}
        >
          {link}
        </a>
      ))}
    </nav>
  );
}

function SocialIcon({ type, isMobile = false, svgPaths }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleSocialClick = (platform) => {
    // Handle social media navigation - replace with actual links
    const urls = {
      facebook: 'https://facebook.com/verdureatelier',
      instagram: 'https://instagram.com/verdureatelier', 
      linkedin: 'https://linkedin.com/company/verdureatelier'
    };
    window.open(urls[platform], '_blank');
  };

  const renderSocialSVG = () => {
    const size = isMobile ? 24 : 32;
    
    switch(type) {
      case 'facebook':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <path d="M9.3335 17.388V12.8048H12.7691V10.5C12.7691 8.83575 13.2703 7.4205 14.274 6.252C15.2777 5.08425 16.494 4.5 17.9209 4.5H21.3335V9.084H17.9209C17.6985 9.084 17.4978 9.216 17.3193 9.48C17.1409 9.744 17.0517 10.068 17.0517 10.452V12.804H21.3335V17.3873H17.051V28.5H12.7684V17.388H9.3335Z" fill="white"/>
          </svg>
        );
      case 'instagram':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <path d="M15.8169 21.496C18.6295 21.496 20.9096 19.2159 20.9096 16.4033C20.9096 13.5906 18.6295 11.3105 15.8169 11.3105C13.0042 11.3105 10.7241 13.5906 10.7241 16.4033C10.7241 19.2159 13.0042 21.496 15.8169 21.496Z" fill="#FEFEFE"/>
            <path d="M10.9099 4.5C6.97473 4.5 3.77051 7.70422 3.77051 11.6394V21.3561C3.77051 25.2912 6.97473 28.4953 10.9099 28.4953H20.725C24.6602 28.4953 27.8642 25.2914 27.8642 21.3561V11.6394C27.8642 7.70422 24.6604 4.5 20.725 4.5H10.9099ZM10.9099 6.80881H20.725C23.4211 6.80881 25.5554 8.94347 25.5554 11.6394V21.3561C25.5554 24.0522 23.4211 26.1864 20.725 26.1864H10.9099C8.21379 26.1864 6.07931 24.0522 6.07931 21.3561V11.6394C6.07931 8.94328 8.21398 6.80881 10.9099 6.80881Z" fill="#FEFEFE"/>
            <path d="M22.298 11.5959C23.0971 11.5959 23.7449 10.9481 23.7449 10.149C23.7449 9.34994 23.0971 8.70215 22.298 8.70215C21.4989 8.70215 20.8511 9.34994 20.8511 10.149C20.8511 10.9481 21.4989 11.5959 22.298 11.5959Z" fill="#FEFEFE"/>
          </svg>
        );
      case 'linkedin':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
            <path d="M8.48071 6.90039C7.16871 6.90039 6.30371 7.79639 6.30371 8.98039C6.30371 10.1324 7.13621 11.0594 8.41621 11.0594C9.79221 11.0594 10.6562 10.1324 10.6242 8.98039C10.6242 7.79639 9.79271 6.90039 8.48071 6.90039ZM20.7677 12.4044C18.5597 12.4044 17.2162 13.6839 16.6722 14.5799H16.6087L16.4162 12.6924H12.8647C12.8967 13.9084 12.9602 15.3164 12.9602 16.9804V26.0994H17.0557V18.3874C17.0557 18.0034 17.0877 17.6199 17.1837 17.3319C17.5037 16.5639 18.1762 15.7634 19.2962 15.7634C20.8002 15.7634 21.3762 16.9479 21.3762 18.6759V26.0994H25.5042V18.1964C25.5042 14.2284 23.4557 12.4044 20.7677 12.4044ZM6.40071 12.6924V26.0994H10.4962V12.6924H6.40071Z" fill="#FEFEFE"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`${styles.socialIcon} ${isMobile ? styles.socialIconMobile : ''}`}
      onClick={() => handleSocialClick(type)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`Visit our ${type} page`}
    >
      {renderSocialSVG()}
    </div>
  );
}

function SocialMediaIcons({ isMobile = false }) {
  // const svgPaths = isMobile ? svgPathsMobile : svgPathsDesktop;
  
  if (isMobile) {
    return (
      <div className={styles.mobileSocialSection}>
        <div className={styles.socialDivider}></div>
        <div className={styles.socialContainer}>
          <SocialIcon type="facebook" isMobile={isMobile} />
          <SocialIcon type="instagram" isMobile={isMobile} />
          <SocialIcon type="linkedin" isMobile={isMobile} />
        </div>
        <div className={styles.socialDivider}></div>
      </div>
    );
  }

  return (
    <div className={styles.socialContainer}>
      <SocialIcon type="facebook" isMobile={isMobile} />
      <SocialIcon type="instagram" isMobile={isMobile} />
      <SocialIcon type="linkedin" isMobile={isMobile} />
    </div>
  );
}

function BackToTopButton() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleBackToTop}
      role="button"
      tabIndex={0}
      aria-label="Back to top"
    >
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 8.90041L1.52258 19L-6.26513e-08 17.5667L12 6L24 17.5667L22.4774 19L12 8.90041Z" fill="white"/>
</svg>
    </div>
  );
}

function CopyrightText({ isMobile = false }) {
  return (
    <div className={`${styles.copyright} ${isMobile ? styles.copyrightMobile : ''}`}>
      <p>©2025 Verdure Atelier. All rights reserved.</p>
    </div>
  );
}

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <footer className={`${styles.footer} ${styles.footerMobile}`}>
        <div className={`${styles.footerContainer} ${styles.footerContainerMobile}`}>
          <VALogo isMobile={true} />
          
          <div className={styles.mainContentMobile}>
            <NavigationLinks isMobile={true} />
            <SocialMediaIcons isMobile={true} />
            <CopyrightText isMobile={true} />
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.mainContent}>
          <VALogo />
          <NavigationLinks />
          <SocialMediaIcons />
        </div>
        
        <div className={styles.bottomSection}>
          <div className={styles.dividerLine}></div>
          <div className={styles.bottomContent}>
            <CopyrightText />
            <BackToTopButton />
          </div>
        </div>
      </div>
    </footer>
  );
}