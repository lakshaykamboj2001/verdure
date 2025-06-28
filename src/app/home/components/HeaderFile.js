import React from 'react';
import HeaderClient from './HeaderClient';

const HeaderFile = () => {
  return (
    <div>
           <header>
        <HeaderClient>
          <div className="x_mobile_header">
            <div className="container-fluid">
              <div className="x_mobile_header_menu">
                <div className="x_mobile_header_menu_left">
                  {/* Search, Cart, Like, User icons */}
                  <div className="x_header_search xhs_search">
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

                  <div className="x_header_menu_open">
                    <img src="./images/menu.svg" alt="Open Menu" />
                    </div>
                </div>

                <div className="x_mobile_header_img">
                  <a href="/valogo/landing-page.html">Verdure Atelier</a>
        </div>

                <div className="x_mobile_header_logos">
                  <div className="x_header_search xhs_search">
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
                    </div>
                </div>
        </HeaderClient>
    </header>
    </div>
  );
};

export default HeaderFile;