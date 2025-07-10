"use client";
import React from 'react';

const MobileMenu = ({ 
  isMobileMenuOpen, 
  mobileMenuRef, 
  overlayRef, 
  openAccordion, 
  handleCloseMenu, 
  handleOverlayClick, 
  handleAccordionClick 
}) => {
  return (
    <>
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
                                        <img src="/images/menu-close.svg" alt="Close Menu" />
                                    </div>
                                </div>
                            </div>

                            <div className="x_header_logo">
                                <p>Verdure Atelier</p>
                                <img src="/images/side-logo.svg" alt="logo" />
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
    </>
  );
};

export default MobileMenu; 