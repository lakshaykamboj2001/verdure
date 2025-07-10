"use client";
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import SearchOverlay from './SearchOverlay';
import MobileMenu from './MobileMenu';

const HeaderClient = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);
  const searchOverlayRef = useRef(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenMenu = () => setIsMobileMenuOpen(true);
  const handleCloseMenu = () => setIsMobileMenuOpen(false);
  const handleOverlayClick = () => setIsMobileMenuOpen(false);

  const handleAccordionClick = (name) => {
    setOpenAccordion(prev => (prev === name ? null : name));
  };

  const handleOpenSearch = () => {
    setIsSearchOverlayOpen(true);
    setTimeout(() => {
      const input = searchOverlayRef.current?.querySelector('.search_overlay_input');
      input?.focus();
    }, 0);
  };

  const handleCloseSearch = () => setIsSearchOverlayOpen(false);
  const handlePanelClick = (e) => e.stopPropagation();

  useEffect(() => {
    const searchIcons = document.querySelectorAll('.x_header_search.xhs_search');
    const menuOpenBtn = document.querySelector('.x_header_menu_open');

    searchIcons.forEach(icon => icon.addEventListener('click', handleOpenSearch));
    menuOpenBtn?.addEventListener('click', handleOpenMenu);

    return () => {
      searchIcons.forEach(icon => icon.removeEventListener('click', handleOpenSearch));
      menuOpenBtn?.removeEventListener('click', handleOpenMenu);
    };
  }, []);

  return (
    <>
      <div className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className={`x_mobile_header${!isHome ? " Product_Page_x_mobile_header" : ""}`}>
          {children}
        </div>
      </div>

      <MobileMenu 
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMenuRef={mobileMenuRef}
        overlayRef={overlayRef}
        openAccordion={openAccordion}
        handleCloseMenu={handleCloseMenu}
        handleOverlayClick={handleOverlayClick}
        handleAccordionClick={handleAccordionClick}
      />
      
      <SearchOverlay 
        isSearchOverlayOpen={isSearchOverlayOpen}
        searchOverlayRef={searchOverlayRef}
        handleCloseSearch={handleCloseSearch}
        handlePanelClick={handlePanelClick}
      />
    </>
  );
};

export default HeaderClient;
