"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // Mobile menu functionality
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.querySelector(`.${styles.xheadermenuclose}`);
    const overlay = document.getElementById('overlay');
    const mobileMenuBg = document.querySelector(`.${styles.xmobileheaderhidemenubg}`);
    const accordionItems = document.querySelectorAll(`.${styles.mobilesearchaccordian}`);
    const searchButtons = document.querySelectorAll(`.${styles.xheadersearchxhssearch}`);
    const closeSearchBtn = document.getElementById('closeSearchOverlay');

    // Handler functions
    const handleOpenMenu = () => {
      setIsMenuOpen(true);
      mobileMenuBg?.classList.add('active-menu');
      overlay?.classList.add('active-behind');
      document.body.style.overflow = 'hidden';
    };

    const handleCloseMenu = () => {
      setIsMenuOpen(false);
      mobileMenuBg?.classList.remove('active-menu');
      overlay?.classList.remove('active-behind');
      document.body.style.overflow = 'unset';
    };

    const handleOpenSearch = () => {
      setIsSearchOpen(true);
      document.body.style.overflow = 'hidden';
    };

    const handleCloseSearch = () => {
      setIsSearchOpen(false);
      document.body.style.overflow = 'unset';
    };

    // Add event listeners
    if (openMenuBtn) {
      openMenuBtn.addEventListener('click', handleOpenMenu);
    }

    if (closeMenuBtn) {
      closeMenuBtn.addEventListener('click', handleCloseMenu);
    }

    if (overlay) {
      overlay.addEventListener('click', handleCloseMenu);
    }

    searchButtons.forEach(button => {
      button.addEventListener('click', handleOpenSearch);
    });

    if (closeSearchBtn) {
      closeSearchBtn.addEventListener('click', handleCloseSearch);
    }

    // Accordion functionality
    accordionItems.forEach(item => {
      const handleAccordionClick = () => {
        const accordionText = item.nextElementSibling;
        const allAccordionTexts = document.querySelectorAll(`.${styles.splitaccordiontext}`);
        
        allAccordionTexts.forEach(text => {
          if (text !== accordionText) {
            text.style.display = 'none';
          }
        });

        if (accordionText) {
          accordionText.style.display = accordionText.style.display === 'none' ? 'block' : 'none';
        }
      };

      item.addEventListener('click', handleAccordionClick);
    });

    // Cleanup function
    return () => {
      if (openMenuBtn) {
        openMenuBtn.removeEventListener('click', handleOpenMenu);
      }
      if (closeMenuBtn) {
        closeMenuBtn.removeEventListener('click', handleCloseMenu);
      }
      if (overlay) {
        overlay.removeEventListener('click', handleCloseMenu);
      }
      searchButtons.forEach(button => {
        button.removeEventListener('click', handleOpenSearch);
      });
      if (closeSearchBtn) {
        closeSearchBtn.removeEventListener('click', handleCloseSearch);
      }
    };
  }, []);

  return (
    <>
         <header>
    <div className={styles.xmobileheader}>
      <div className="container-fluid">
        <div className={styles.xmobileheadermenu}>
          <div className={styles.xmobileheadermenuleft}>
            <div className={styles.xmobileheadermenuleftsearch}>
                <div className={styles.xheadersearchxhssearch}><Image src="/images/search.svg" alt="search" width={24} height={24} /></div>
                <div className={styles.xheadersearch}><Image src="/images/shoping-cart.svg" alt="search" width={24} height={24} /></div>
        
                <div className={styles.xheadersearch}><Image src="/images/like-heart.svg" alt="like" width={24} height={24} /></div>
    
                <div className={styles.xheadersearch}><Image src="/images/user.svg" alt="search" width={24} height={24} /></div>
            </div>
           
            <div className={styles.xheadermenuopen} id="open-menu-btn">
                <Image src="/images/menu.svg" alt="Open Menu" width={24} height={24} />
            </div>

        </div>


          <div className={styles.xmobileheaderimg}>
            <Link href="/valogo/landing-page.html">Verdure Atelier</Link>
          </div>

          <div className={styles.xmobileheaderlogos}>
            <div className={styles.xheadersearchxhssearch}><Image src="/images/search.svg" alt="search" width={24} height={24} /></div>
            <div className={styles.xheadersearch}><Image src="/images/shoping-cart.svg" alt="search" width={24} height={24} /></div>
            {/* <div className="x-mobile-header-cart">
             <a href=""><Image src="/images/shoping-cart.svg" alt="cart" width={24} height={24} /></a> 
              <div className="cart-count-bubble count"><span className="" aria-hidden="true">1</span><span className="visually-hidden">1 item</span>
              </div>
          </div> */}
            <div className={styles.xheadersearch}><Image src="/images/like-heart.svg" alt="like" width={24} height={24} /></div>

            <div className={styles.xheadersearch}><Image src="/images/user.svg" alt="search" width={24} height={24} /></div>




          </div>
        </div>

        <div className={styles.menubarshowoverlay} id="overlay"></div>
        <div className={styles.xmobileheaderhidemenubg}>
          <div className={styles.xmobileheaderhidemenu}>
            {/* <div className="x-mobile-header-img">
          <a href=""><Image src="/images/mobile-logo.svg" alt="" width={100} height={50} /></a>
            </div> */}

            <div className={styles.xmobileheaderlogo}>
              {/* <div className="x-header-search"><Image src="/images/search.svg" alt="search" width={24} height={24} /></div>
          <div className="x-mobile-header-cart">
             <a href=""><Image src="/images/shoping-cart.svg" alt="cart" width={24} height={24} /></a> 
                <div className="cart-count-bubble count"><span className="" aria-hidden="true">1</span><span
                    className="visually-hidden">1 item</span>
              </div>
              </div> */}
              <div className={styles.xheadermenuclose}>
                <Image src="/images/menu-close.svg" alt="Close Menu" id="close-menu-btn" width={24} height={24} />
              </div>


            </div>
          </div>

          <div className={styles.xheaderlogo}>
            <p>Verdure Atelier</p>
            <Image src="/images/side-logo.svg" alt="logo" width={100} height={50} />
          </div>

          <div className={styles.xmobileheaderoverflowmenu}>

            <div className={styles.xmobileheaderhidemenulist}>
              <ul>
                {/* <li> <a className="accordion-link" href="">shop the collection</a> </li> */}

                <li>
                  <div className={styles.mobilesearchaccordian}>
                    <div className={styles.accordionlink}>New Arrivals</div>
                    {/* <a  href="your-about-page.html">Clothing</a> */}
                    <span className={styles.splitaccordiontoggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path
                          d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z"
                          fill="#1C1C1C" />
                      </svg>
                    </span>
                  </div>
                  <div className={styles.splitaccordiontext}>
                    <ul>
                      <li><Link href="/valogo/product-page.html">Products</Link></li>
                      <li><Link href="/valogo/product-detail.html">product details</Link></li>
                      <li><Link href="/valogo/membership.html">Membership</Link></li>
                      <li><Link href="/valogo/sustainability.html">Sustainability</Link></li>
                      <li><Link href="/valogo/philosophy.html">Philosophy</Link></li>
                      <li><Link href="/valogo/journal.html">Journal</Link></li>
                      <li><Link href="/valogo/journal-detail.html">Journal details</Link></li>
                      <li><Link href="/valogo/wardrobe.html">Wardrobe</Link></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div className={styles.mobilesearchaccordian}>
                    <div className={styles.accordionlink}>Woman</div>
                    <span className={styles.splitaccordiontoggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path
                          d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z"
                          fill="#1C1C1C" />
                      </svg>
                    </span>
                  </div>
                  <div className={styles.splitaccordiontext}>
                    <ul>
                      <li><Link href="#">bags & wallets</Link></li>
                      <li><Link href="#">headwear</Link></li>
                      <li><Link href="#">socks</Link></li>
                      <li><Link href="#">misc</Link></li>
                      <li><Link href="#">view all</Link></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div className={styles.mobilesearchaccordian}>
                    <div className={styles.accordionlink}>Men</div>
                    <span className={styles.splitaccordiontoggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path
                          d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z"
                          fill="#1C1C1C" />
                      </svg>
                    </span>
                  </div>
                  <div className={styles.splitaccordiontext}>
                    <ul>
                      <li><Link href="#">dragon76</Link></li>
                      <li><Link href="#">xiuter</Link></li>
                      <li><Link href="#">david flores</Link></li>
                      <li><Link href="#">chris pyrate</Link></li>
                      <li><Link href="#">akila</Link></li>
                      <li><Link href="#">view all</Link></li>

                    </ul>
                  </div>
                </li>

                <li>
                  <div className={styles.mobilesearchaccordian}>
                    <div className={styles.accordionlink}>Children</div>
                    <span className={styles.splitaccordiontoggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path
                          d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z"
                          fill="#1C1C1C" />
                      </svg>
                    </span>
                  </div>
                  <div className={styles.splitaccordiontext}>
                    <ul>
                      <li><Link href="#">bags & wallets</Link></li>
                      <li><Link href="#">headwear</Link></li>
                      <li><Link href="#">socks</Link></li>
                      <li><Link href="#">misc</Link></li>
                      <li><Link href="#">view all</Link></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div className={styles.mobilesearchaccordian}>
                    <div className={styles.accordionlink}>Travel</div>
                    <span className={styles.splitaccordiontoggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path
                          d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z"
                          fill="#1C1C1C" />
                      </svg>
                    </span>
                  </div>
                  <div className={styles.splitaccordiontext}>
                    <ul>
                      <li><Link href="#">bags & wallets</Link></li>
                      <li><Link href="#">headwear</Link></li>
                      <li><Link href="#">socks</Link></li>
                      <li><Link href="#">misc</Link></li>
                      <li><Link href="#">view all</Link></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div className={styles.mobilesearchaccordian}>
                    <div className={styles.accordionlink}>Bags</div>
                    <span className={styles.splitaccordiontoggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path
                          d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z"
                          fill="#1C1C1C" />
                      </svg>
                    </span>
                  </div>
                  <div className={styles.splitaccordiontext}>
                    <ul>
                      <li><Link href="#">bags & wallets</Link></li>
                      <li><Link href="#">headwear</Link></li>
                      <li><Link href="#">socks</Link></li>
                      <li><Link href="#">misc</Link></li>
                      <li><Link href="#">view all</Link></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div className={styles.mobilesearchaccordian}>
                    <div className={styles.accordionlink}>Accessories</div>
                    <span className={styles.splitaccordiontoggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path
                          d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z"
                          fill="#1C1C1C" />
                      </svg>
                    </span>
                  </div>
                  <div className={styles.splitaccordiontext}>
                    <ul>
                      <li><Link href="#">bags & wallets</Link></li>
                      <li><Link href="#">headwear</Link></li>
                      <li><Link href="#">socks</Link></li>
                      <li><Link href="#">misc</Link></li>
                      <li><Link href="#">view all</Link></li>
                    </ul>
                  </div>
                </li>

              </ul>

            </div>

            <div className={styles.headerline}></div>

            <div className={styles.xmobileheaderhidemenulist}>
              <ul>
                {/* <li> <a className="accordion-link" href="">shop the collection</a> </li> */}

                <li>
                  <div className={styles.mobilesearchaccordian}>
                    <div className={styles.accordionlink}>Verdure atelier services</div>
                    {/* <a  href="your-about-page.html">Clothing</a> */}
                    <span className={styles.splitaccordiontoggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path
                          d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z"
                          fill="#1C1C1C" />
                      </svg>
                    </span>
                  </div>
                  <div className={styles.splitaccordiontext}>
                    <ul>
                      <li><Link href="#">bcoats & jackets</Link></li>
                      <li><Link href="#">knitwear</Link></li>
                      <li><Link href="#"> pants & overalls</Link></li>
                      <li><Link href="#">sweats</Link></li>
                      <li><Link href="#">shirts</Link></li>
                      <li><Link href="#">shorts</Link></li>
                      <li><Link href="#">tees & tanks</Link></li>
                      <li><Link href="#">view all</Link></li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div className={styles.mobilesearchaccordian}>
                    <div className={styles.accordionlink}>sustainablity</div>
                    <span className={styles.splitaccordiontoggle}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path
                          d="M17.9534 15.9903L11.8201 9.857L12.7637 8.91333L19.8407 15.9903L12.7637 23.0673L11.8201 22.1237L17.9534 15.9903Z"
                          fill="#1C1C1C" />
                      </svg>
                    </span>
                  </div>
                  <div className={styles.splitaccordiontext}>
                    <ul>
                      <li><Link href="#">bags & wallets</Link></li>
                      <li><Link href="#">headwear</Link></li>
                      <li><Link href="#">socks</Link></li>
                      <li><Link href="#">misc</Link></li>
                      <li><Link href="#">view all</Link></li>
                    </ul>
                  </div>
                </li>





              </ul>

            </div>

            <div className={styles.headerline}></div>

            <div className={styles.xmobileheaderhidemenulist}>
              <div className={styles.xmobileheaderhidemenulistcontent}>
                <h5>Call us</h5>
                <Link href="tel:+1 (212) 555-0127">+1 (212) 555-0127</Link>
              </div>
              <div className={styles.xmobileheaderhidemenulistcontent}>
                <h5>Email Us</h5>
                <Link href="mailto:contact@verdureatelier.com">contact@verdureatelier.com</Link>
              </div>
              <div className={styles.xmobileheaderhidemenulistcontent}>
                <h5>Address</h5>
                <Link href="https://maps.app.goo.gl/1234567890">23 Artisan Lane, SoHo New York, NY 10013</Link>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
    <div id="searchOverlay" className={`${styles.searchoverlay} ${isSearchOpen ? styles.active : ''}`}>
      <div className={styles.searchoverlaybg}></div>
      <div className={styles.searchoverlaypanel}>
        <button className={styles.searchoverlayclose} id="closeSearchOverlay" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path
              d="M11.1995 32.0386L9.96094 30.8L19.7609 21L9.96094 11.2L11.1995 9.96143L20.9995 19.7614L30.7995 9.96143L32.0381 11.2L22.2381 21L32.0381 30.8L30.7995 32.0386L20.9995 22.2386L11.1995 32.0386Z"
              fill="#1C1C1C" />
          </svg>
        </button>
        <div className={styles.searchoverlaycontent}>
          <div className={styles.searchoverlayinputrow}>
            <input type="text" className={styles.searchoverlayinput} autoFocus />
            <div className={styles.searchoverlayinputicon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M10.6667 20C13.2444 20 15.4444 19.0902 17.2667 17.2707C19.0889 15.4509 20 13.2496 20 10.6667C20 8.08889 19.0889 5.88889 17.2667 4.06667C15.4444 2.24444 13.2444 1.33333 10.6667 1.33333C8.08378 1.33333 5.88244 2.24444 4.06267 4.06667C2.24311 5.88889 1.33333 8.08889 1.33333 10.6667C1.33333 13.2496 2.24311 15.4509 4.06267 17.2707C5.88244 19.0902 8.08378 20 10.6667 20ZM10.6667 21.3333C9.188 21.3333 7.80211 21.0551 6.509 20.4987C5.21589 19.9422 4.086 19.1807 3.11933 18.214C2.15267 17.2473 1.39111 16.1174 0.834666 14.8243C0.278222 13.5312 0 12.1453 0 10.6667C0 9.19311 0.278222 7.80978 0.834666 6.51667C1.39111 5.22356 2.15267 4.09233 3.11933 3.123C4.086 2.15389 5.21589 1.39111 6.509 0.834666C7.80211 0.278221 9.188 0 10.6667 0C12.1402 0 13.5236 0.278221 14.8167 0.834666C16.1098 1.39111 17.241 2.15389 18.2103 3.123C19.1794 4.09233 19.9422 5.22356 20.4987 6.51667C21.0551 7.80978 21.3333 9.19311 21.3333 10.6667C21.3333 12.0204 21.0958 13.2966 20.6207 14.495C20.1453 15.6932 19.488 16.7718 18.6487 17.7307L24 23.082L23.0743 24L17.723 18.6563C16.7641 19.4957 15.6856 20.1517 14.4873 20.6243C13.2889 21.097 12.0153 21.3333 10.6667 21.3333Z"
                  fill="#1C1C1C" />
              </svg>

            </div>
          </div>
          <div className={styles.searchoverlaypopular}>
            <div className={styles.searchoverlaypopulartitle}>Popular Searches</div>
            <div className={styles.searchoverlaytags}>
              <button className={styles.searchoverlaytag}>Woman</button>
              <button className={styles.searchoverlaytag}>Men</button>
              <button className={styles.searchoverlaytag}>Children</button>
              <button className={styles.searchoverlaytag}>Travel</button>
              <button className={styles.searchoverlaytag}>Bags</button>
            </div>
          </div>
          <div className={styles.searchoverlaycollections}>
            <div className={styles.searchoverlaycollectionsrow}>
              <div className={styles.searchoverlaycollection} style={{backgroundImage: "url('/images/collection1.png')"}}>
                <div className={styles.searchoverlaycollectioncontent}>
                  <div className={styles.searchoverlaycollectiontitle}>Seasonless Silhouettes</div>
                  <div className={styles.searchoverlaycollectionlink}>SHOP THE COLLECTION</div>
                </div>
              </div>
              <div className={styles.searchoverlaycollection} style={{backgroundImage: "url('/images/collection2.png')"}}>
                <div className={styles.searchoverlaycollectioncontent}>
                  <div className={styles.searchoverlaycollectiontitle}>Circular Essentials</div>
                  <div className={styles.searchoverlaycollectionlink}>SHOP THE COLLECTION</div>
                </div>
              </div>
            </div>
            <div className={styles.searchoverlaycollectionsrow}>
              <div className={styles.searchoverlaycollection} style={{backgroundImage: "url('/images/collection3.png')"}}>
                <div className={styles.searchoverlaycollectioncontent}>
                  <div className={styles.searchoverlaycollectiontitle}>The Reborn Collection</div>
                  <div className={styles.searchoverlaycollectionlink}>SHOP THE COLLECTION</div>
                </div>
              </div>
              <div className={styles.searchoverlaycollection} style={{backgroundImage: "url('/images/collection4.png')"}}>
                <div className={styles.searchoverlaycollectioncontent}>
                  <div className={styles.searchoverlaycollectiontitle}>Bags</div>
                  <div className={styles.searchoverlaycollectionlink}>SHOP THE COLLECTION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default Header