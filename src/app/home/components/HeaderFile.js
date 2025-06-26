"use client";
import React, { useEffect, useRef, useState } from 'react';

const HeaderFile = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to manage search overlay visibility
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);
  // State to track which accordion is open
  const [openAccordion, setOpenAccordion] = useState(null);

  // Refs for direct DOM manipulation where necessary (less preferred, but needed for global body overflow)
  const mobileMenuRef = useRef(null);
  const overlayRef = useRef(null);
  const searchOverlayRef = useRef(null);
  const searchOverlayPanelRef = useRef(null);

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
    // We use a timeout to ensure the input is rendered before trying to focus
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

  return (
    <div>
      <header>
        <div className="x_mobile_header">
          <div className="container-fluid">
            <div className="x_mobile_header_menu">
              <div className="x_mobile_header_menu_left">
                {/* Search, Cart, Like, User icons */}
                <div className="x_header_search xhs_search" onClick={handleOpenSearch}>
                  <img src="./images/search.svg" alt="search" />
                </div>
                <div className="x_header_search">
                  <img src="./images/shoping-cart.svg" alt="shopping cart" />
                </div>
                <div className="x_header_search">
                  <img src="./images/like-heart.svg" alt="like" />
                </div>
                <div className="x_header_search">
                  <img src="./images/user.svg" alt="user" />
                </div>

                <div className="x_header_menu_open" onClick={handleOpenMenu}>
                  <img src="./images/menu.svg" alt="Open Menu" />
                </div>
              </div>

              <div className="x_mobile_header_img">
                <a href="/valogo/landing-page.html">Verdure Atelier</a>
              </div>

              <div className="x_mobile_header_logos">
                <div className="x_header_search xhs_search" onClick={handleOpenSearch}>
                  <img src="./images/search.svg" alt="search" />
                </div>
                <div className="x_header_search">
                  <img src="./images/shoping-cart.svg" alt="shopping cart" />
                </div>
                <div className="x_header_search">
                  <img src="./images/like-heart.svg" alt="like" />
                </div>
                <div className="x_header_search">
                  <img src="./images/user.svg" alt="user" />
                </div>
              </div>
            </div>

            <div
              ref={overlayRef}
              className={`menu_bar_show_overlay ${isMobileMenuOpen ? 'active_behind' : ''}`}
              onClick={handleOverlayClick}
            ></div>
            <div
              ref={mobileMenuRef}
              className={`x_mobile_header_hide_menu_bg ${isMobileMenuOpen ? 'active_menu' : ''}`}
            >
              <div className="x_mobile_header_hide_menu">
                <div className="x_mobile_header_logo">
                  <div className="x_header_menu_close" onClick={handleCloseMenu}>
                    <img src="./images/menu-close.svg" alt="Close Menu" />
                  </div>
                </div>
              </div>

              <div className="x_header_logo">
                <p>Verdure Atelier</p>
                <img src="./images/side-logo.svg" alt="logo" />
              </div>

              <div className="x_mobile_header_overflow_menu">
                <div className="x_mobile_header_hide_menu_list">
                  <ul>
                    <li>
                      <div className="mobile_search_accordian" onClick={() => handleAccordionClick('newArrivals')}>
                        <div className="accordion_link">New Arrivals</div>
                        <span className="split_accordion_toggle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z" fill="#1C1C1C" />
                          </svg>
                        </span>
                      </div>
                      <div className="split_accordion_text" style={{ display: openAccordion === 'newArrivals' ? 'block' : 'none' }}>
                        <ul>
                          <li><a href="/valogo/product-page.html">Products</a></li>
                          <li><a href="/valogo/product-detail.html">Product Details</a></li>
                          <li><a href="/valogo/membership.html">Membership</a></li>
                          <li><a href="/valogo/sustainability.html">Sustainability</a></li>
                          <li><a href="/valogo/philosophy.html">Philosophy</a></li>
                          <li><a href="/valogo/journal.html">Journal</a></li>
                          <li><a href="/valogo/journal-detail.html">Journal Details</a></li>
                          <li><a href="/valogo/wardrobe.html">Wardrobe</a></li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className="mobile_search_accordian" onClick={() => handleAccordionClick('woman')}>
                        <div className="accordion_link">Woman</div>
                        <span className="split_accordion_toggle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z" fill="#1C1C1C" />
                          </svg>
                        </span>
                      </div>
                      <div className="split_accordion_text" style={{ display: openAccordion === 'woman' ? 'block' : 'none' }}>
                        <ul>
                          <li><a href="#">Bags & Wallets</a></li>
                          <li><a href="#">Headwear</a></li>
                          <li><a href="#">Socks</a></li>
                          <li><a href="#">Misc</a></li>
                          <li><a href="#">View All</a></li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className="mobile_search_accordian" onClick={() => handleAccordionClick('men')}>
                        <div className="accordion_link">Men</div>
                        <span className="split_accordion_toggle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z" fill="#1C1C1C" />
                          </svg>
                        </span>
                      </div>
                      <div className="split_accordion_text" style={{ display: openAccordion === 'men' ? 'block' : 'none' }}>
                        <ul>
                          <li><a href="#">Dragon76</a></li>
                          <li><a href="#">Xiuter</a></li>
                          <li><a href="#">David Flores</a></li>
                          <li><a href="#">Chris Pyrate</a></li>
                          <li><a href="#">Akila</a></li>
                          <li><a href="#">View All</a></li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className="mobile_search_accordian" onClick={() => handleAccordionClick('children')}>
                        <div className="accordion_link">Children</div>
                        <span className="split_accordion_toggle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z" fill="#1C1C1C" />
                          </svg>
                        </span>
                      </div>
                      <div className="split_accordion_text" style={{ display: openAccordion === 'children' ? 'block' : 'none' }}>
                        <ul>
                          <li><a href="#">Bags & Wallets</a></li>
                          <li><a href="#">Headwear</a></li>
                          <li><a href="#">Socks</a></li>
                          <li><a href="#">Misc</a></li>
                          <li><a href="#">View All</a></li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className="mobile_search_accordian" onClick={() => handleAccordionClick('travel')}>
                        <div className="accordion_link">Travel</div>
                        <span className="split_accordion_toggle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z" fill="#1C1C1C" />
                          </svg>
                        </span>
                      </div>
                      <div className="split_accordion_text" style={{ display: openAccordion === 'travel' ? 'block' : 'none' }}>
                        <ul>
                          <li><a href="#">Bags & Wallets</a></li>
                          <li><a href="#">Headwear</a></li>
                          <li><a href="#">Socks</a></li>
                          <li><a href="#">Misc</a></li>
                          <li><a href="#">View All</a></li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className="mobile_search_accordian" onClick={() => handleAccordionClick('bags')}>
                        <div className="accordion_link">Bags</div>
                        <span className="split_accordion_toggle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z" fill="#1C1C1C" />
                          </svg>
                        </span>
                      </div>
                      <div className="split_accordion_text" style={{ display: openAccordion === 'bags' ? 'block' : 'none' }}>
                        <ul>
                          <li><a href="#">Bags & Wallets</a></li>
                          <li><a href="#">Headwear</a></li>
                          <li><a href="#">Socks</a></li>
                          <li><a href="#">Misc</a></li>
                          <li><a href="#">View All</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="header_line"></div>

                <div className="x_mobile_header_hide_menu_list">
                  <ul>
                    <li>
                      <div className="mobile_search_accordian" onClick={() => handleAccordionClick('services')}>
                        <div className="accordion_link">Verdure Atelier Services</div>
                        <span className="split_accordion_toggle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z" fill="#1C1C1C" />
                          </svg>
                        </span>
                      </div>
                      <div className="split_accordion_text" style={{ display: openAccordion === 'services' ? 'block' : 'none' }}>
                        <ul>
                          <li><a href="#">Coats & Jackets</a></li>
                          <li><a href="#">Knitwear</a></li>
                          <li><a href="#">Pants & Overalls</a></li>
                          <li><a href="#">Sweats</a></li>
                          <li><a href="#">Shirts</a></li>
                          <li><a href="#">Shorts</a></li>
                          <li><a href="#">Tees & Tanks</a></li>
                          <li><a href="#">View All</a></li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <div className="mobile_search_accordian" onClick={() => handleAccordionClick('sustainability')}>
                        <div className="accordion_link">Sustainability</div>
                        <span className="split_accordion_toggle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z" fill="#1C1C1C" />
                          </svg>
                        </span>
                      </div>
                      <div className="split_accordion_text" style={{ display: openAccordion === 'sustainability' ? 'block' : 'none' }}>
                        <ul>
                          <li><a href="#">Bags & Wallets</a></li>
                          <li><a href="#">Headwear</a></li>
                          <li><a href="#">Socks</a></li>
                          <li><a href="#">Misc</a></li>
                          <li><a href="#">View All</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="header_line"></div>

                <div className="x_mobile_header_hide_menu_list">
                  <div className="x_mobile_header_hide_menu_list_content">
                    <h5>Call us</h5>
                    <a href="tel:+1 (212) 555-0127">+1 (212) 555-0127</a>
                  </div>
                  <div className="x_mobile_header_hide_menu_list_content">
                    <h5>Email Us</h5>
                    <a href="mailto:contact@verdureatelier.com">contact@verdureatelier.com</a>
                  </div>
                  <div className="x_mobile_header_hide_menu_list_content">
                    <h5>Address</h5>
                    <a href="https://maps.app.goo.gl/1234567890">23 Artisan Lane, SoHo New York, NY 10013</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={searchOverlayRef}
          className={`search_overlay ${isSearchOverlayOpen ? 'active' : ''}`}
          onClick={handleCloseSearch}
        >
          <div className="search_overlay_bg"></div>
          <div className="search_overlay_panel" onClick={handlePanelClick}>
            <button className="search_overlay_close" onClick={handleCloseSearch} aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <path d="M11.1995 32.0386L9.96094 30.8L19.7609 21L9.96094 11.2L11.1995 9.96143L20.9995 19.7614L30.7995 9.96143L32.0381 11.2L22.2381 21L32.0381 30.8L30.7995 32.0386L20.9995 22.2386L11.1995 32.0386Z" fill="#1C1C1C" />
              </svg>
            </button>
            <div className="search_overlay_content">
              <div className="search_overlay_input_row">
                <input type="text" className="search_overlay_input" />
                <div className="search_overlay_input_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10.6667 20C13.2444 20 15.4444 19.0902 17.2667 17.2707C19.0889 15.4509 20 13.2496 20 10.6667C20 8.08889 19.0889 5.88889 17.2667 4.06667C15.4444 2.24444 13.2444 1.33333 10.6667 1.33333C8.08378 1.33333 5.88244 2.24444 4.06267 4.06667C2.24311 5.88889 1.33333 8.08889 1.33333 10.6667C1.33333 13.2496 2.24311 15.4509 4.06267 17.2707C5.88244 19.0902 8.08378 20 10.6667 20ZM10.6667 21.3333C9.188 21.3333 7.80211 21.0551 6.509 20.4987C5.21589 19.9422 4.086 19.1807 3.11933 18.214C2.15267 17.2473 1.39111 16.1174 0.834666 14.8243C0.278222 13.5312 0 12.1453 0 10.6667C0 9.19311 0.278222 7.80978 0.834666 6.51667C1.39111 5.22356 2.15267 4.09233 3.11933 3.123C4.086 2.15389 5.21589 1.39111 6.509 0.834666C7.80211 0.278221 9.188 0 10.6667 0C12.1402 0 13.5236 0.278221 14.8167 0.834666C16.1098 1.39111 17.241 2.15389 18.2103 3.123C19.1794 4.09233 19.9422 5.22356 20.4987 6.51667C21.0551 7.80978 21.3333 9.19311 21.3333 10.6667C21.3333 12.0204 21.0958 13.2966 20.6207 14.495C20.1453 15.6932 19.488 16.7718 18.6487 17.7307L24 23.082L23.0743 24L17.723 18.6563C16.7641 19.4957 15.6856 20.1517 14.4873 20.6243C13.2889 21.097 12.0153 21.3333 10.6667 21.3333Z" fill="#1C1C1C" />
                  </svg>
                </div>
              </div>
              <div className="search_overlay_popular">
                <div className="search_overlay_popular_title">Popular Searches</div>
                <div className="search_overlay_tags">
                  <button className="search_overlay_tag">Woman</button>
                  <button className="search_overlay_tag">Men</button>
                  <button className="search_overlay_tag">Children</button>
                  <button className="search_overlay_tag">Travel</button>
                  <button className="search_overlay_tag">Bags</button>
                </div>
              </div>
              <div className="search_overlay_collections">
                <div className="search_overlay_collections_row">
                  <div className="search_overlay_collection" style={{ backgroundImage: "url('./images/collection1.png')" }}>
                    <div className="search_overlay_collection_content">
                      <div className="search_overlay_collection_title">Seasonless Silhouettes</div>
                      <div className="search_overlay_collection_link">SHOP THE COLLECTION</div>
                    </div>
                  </div>
                  <div className="search_overlay_collection" style={{ backgroundImage: "url('./images/collection2.png')" }}>
                    <div className="search_overlay_collection_content">
                      <div className="search_overlay_collection_title">Circular Essentials</div>
                      <div className="search_overlay_collection_link">SHOP THE COLLECTION</div>
                    </div>
                  </div>
                </div>
                <div className="search_overlay_collections_row">
                  <div className="search_overlay_collection" style={{ backgroundImage: "url('./images/collection3.png')" }}>
                    <div className="search_overlay_collection_content">
                      <div className="search_overlay_collection_title">The Reborn Collection</div>
                      <div className="search_overlay_collection_link">SHOP THE COLLECTION</div>
                    </div>
                  </div>
                  <div className="search_overlay_collection" style={{ backgroundImage: "url('./images/collection4.png')" }}>
                    <div className="search_overlay_collection_content">
                      <div className="search_overlay_collection_title">Bags</div>
                      <div className="search_overlay_collection_link">SHOP THE COLLECTION</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderFile;