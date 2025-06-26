"use client";
import React, { useEffect, useRef, useState } from 'react';
import SearchOverlay from './SearchOverlay';
import MobileMenu from './MobileMenu';

const HeaderClient = ({ children }) => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to manage search overlay visibility
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  // State to track which accordion is open
  const [openAccordion, setOpenAccordion] = useState(null);

  // Refs for direct DOM manipulation where necessary
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);
  const searchOverlayRef = useRef(null);

  // Effect for handling body overflow when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Handlers for mobile menu
  const handleOpenMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Handler for mobile accordion
  const handleAccordionClick = (accordionName) => {
    setOpenAccordion(prev => (prev === accordionName ? null : accordionName));
  };

  // Handlers for search overlay
  const handleOpenSearch = () => {
    setIsSearchOverlayOpen(true);
    // Focus the input when the search overlay opens
    setTimeout(() => {
      if (searchOverlayRef.current) {
        const input = searchOverlayRef.current.querySelector('.search_overlay_input');
        if (input) {
          input.focus();
        }
      }
    }, 0);
  };

  const handleCloseSearch = () => {
    setIsSearchOverlayOpen(false);
  };

  // Prevent clicks inside the search overlay panel from closing it
  const handlePanelClick = (e) => {
    e.stopPropagation();
  };

  // Add event listeners to DOM elements
  useEffect(() => {
    // Add click handlers to search icons
    const searchIcons = document.querySelectorAll('.x_header_search.xhs_search');
    searchIcons.forEach(icon => {
      icon.addEventListener('click', handleOpenSearch);
    });

    // Add click handler to menu open button
    const menuOpenBtn = document.querySelector('.x_header_menu_open');
    if (menuOpenBtn) {
      menuOpenBtn.addEventListener('click', handleOpenMenu);
    }

    // Cleanup event listeners
    return () => {
      searchIcons.forEach(icon => {
        icon.removeEventListener('click', handleOpenSearch);
      });
      if (menuOpenBtn) {
        menuOpenBtn.removeEventListener('click', handleOpenMenu);
      }
    };
  }, []);

  return (
    <>
      {children}
      
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