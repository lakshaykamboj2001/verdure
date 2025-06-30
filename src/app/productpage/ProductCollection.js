"use client"
import React, { useState, useEffect } from 'react'; // Import useState and useEffect hooks

const ProductCollection = () => {
  // State to manage the visibility of the filter sidebar
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // useEffect to handle body overflow when filter is open/closed
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow when component unmounts or isFilterOpen changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isFilterOpen]); // Re-run effect when isFilterOpen changes

  // Function to open the filter sidebar
  const openFilter = () => {
    setIsFilterOpen(true);
  };

  // Function to close the filter sidebar
  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  // State to manage the active sorting option
  const [selectedSortOption, setSelectedSortOption] = useState('Newly purveyed');

  // State to manage selected filter options (e.g., collections, colors, sizes)
  // For simplicity, we'll use a single state for all selected options,
  // but in a larger app, you might want more granular state management.
  const [selectedFilters, setSelectedFilters] = useState({
    collections: [],
    colors: [],
    sizes: [],
    availability: false, // For a single "Availability" toggle
  });

  // Function to toggle accordion sections (e.g., Sort By, Collections)
  const toggleAccordion = (event) => {
    const header = event.currentTarget;
    const options = header.nextElementSibling;
    const chevronIcon = header.querySelector('.chevron-icon');

    // Toggle a class to handle the slide effect and chevron rotation via CSS
    if (options.classList.contains('active')) {
      options.classList.remove('active');
      chevronIcon.classList.remove('rotated');
      options.style.maxHeight = null; // Collapse
    } else {
      options.classList.add('active');
      chevronIcon.classList.add('rotated');
      options.style.maxHeight = options.scrollHeight + 'px'; // Expand to content height
    }
  };

  // Function to handle filter option selection/deselection
  const handleFilterOptionClick = (type, value, isSingleSelect = false) => {
    setSelectedFilters(prevFilters => {
      const newFilters = { ...prevFilters };

      if (type === 'availability') {
        newFilters.availability = !prevFilters.availability;
      } else {
        if (isSingleSelect) {
          // For single-select options like "Sort By"
          newFilters[type] = value;
          setSelectedSortOption(value); // Update dedicated sort option state
        } else {
          // For multi-select options like collections, colors, sizes
          const currentOptions = prevFilters[type];
          if (currentOptions.includes(value)) {
            newFilters[type] = currentOptions.filter(item => item !== value);
          } else {
            newFilters[type] = [...currentOptions, value];
          }
        }
      }
      return newFilters;
    });
  };

  // Responsive adjustment for filter panel (using CSS and isFilterOpen state)
  // No direct DOM manipulation needed here, CSS will handle `right` property based on a class
  // We can add an effect to check window size for initial render or on resize if needed for very specific scenarios,
  // but generally, CSS media queries are preferred for responsive layouts.

  return (
    <div>
      <section>
        <div className="crousel_section">
          <div className="row justify-content-between align-items-center ProductPageBreadcrumb_padding">
            <div className="col-md-6">
              <div className="ProductPageBreadcrumb ">
                <div className="breadcrumb_item">
                  <p>Men</p>
                  <div className="breadcrumb_line"></div>
                </div>
                <span>/</span>
                <p className="breadcrumb_item_count">Ready to wear: Men (20 items)</p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="ProductPageFilterToggle " id="filterToggle" onClick={openFilter}>
                <p>Sort & Filters</p>
                <button>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8.58824 23V20.6364H2V19.4545H8.58824V17.0909H10.2353V23H8.58824ZM15.1765 20.6364V19.4545H30V20.6364H15.1765ZM21.7647 15.9091V10H23.4118V12.3636H30V13.5455H23.4118V15.9091H21.7647ZM2 13.5455V12.3636H16.8235V13.5455H2Z" fill="#1C1C1C" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Filters Overlay - conditionally rendered with classes */}
          <div className={`ProductPageFilter ${isFilterOpen ? 'open' : ''}`} id="filterOverlay">
            <div className="filter_content">
              <div className="filter_header d-flex justify-content-between align-items-center mb-4">
                <h2>Filters</h2>
                <div className="close_filter" id="closeFilter" onClick={closeFilter}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6.4 18.6538L5.34625 17.6L10.9463 12L5.34625 6.4L6.4 5.34625L12 10.9462L17.6 5.34625L18.6538 6.4L13.0538 12L18.6538 17.6L17.6 18.6538L12 13.0537L6.4 18.6538Z" fill="#111111" />
                  </svg>
                </div>
              </div>

              <hr className="filter_divider" />

              <div className="filter_section mb-4">
                <div className="filter_section_header d-flex justify-content-between align-items-center" onClick={toggleAccordion}>
                  <h3>Sort By</h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="chevron-icon">
                    <path d="M12.9462 12L8.34625 7.4L9.4 6.34625L15.0538 12L9.4 17.6537L8.34625 16.6L12.9462 12Z" fill="#111111" />
                  </svg>
                </div>

                <div className="filter_options">
                  <div
                    className={`filter_option d-flex justify-content-between align-items-center ${selectedSortOption === 'Newly purveyed' ? 'selected' : ''}`}
                    onClick={() => handleFilterOptionClick('sort', 'Newly purveyed', true)}
                  >
                    <p>Newly purveyed</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      {selectedSortOption === 'Newly purveyed' ? (
                        <path d="M3.5 20.5V3.5H20.5V20.5H3.5ZM5 19H19V5H5V19ZM8 16L12 12L16 16L14.6 17.4L12 14.8L9.4 17.4L8 16ZM14.6 8.6L16 10L12 14L8 10L9.4 8.6L12 11.2L14.6 8.6Z" fill="#3A4F41" />
                      ) : (
                        <path d="M12.0057 16.3C13.2006 16.3 14.215 15.8811 15.049 15.0432C15.883 14.2056 16.3 13.1892 16.3 11.9942C16.3 10.7994 15.8811 9.785 15.0432 8.951C14.2056 8.117 13.1892 7.7 11.9942 7.7C10.7994 7.7 9.785 8.11892 8.951 8.95675C8.117 9.79442 7.7 10.8107 7.7 12.0057C7.7 13.2006 8.11892 14.215 8.95675 15.049C9.79442 15.883 10.8107 16.3 12.0057 16.3ZM12.0085 21.1C10.7567 21.1 9.57767 20.8632 8.4715 20.3895C7.36533 19.9158 6.39717 19.2641 5.567 18.4342C4.73683 17.6044 4.08475 16.637 3.61075 15.532C3.13692 14.4272 2.9 13.2466 2.9 11.9902C2.9 10.7339 3.13683 9.55683 3.6105 8.459C4.08417 7.36117 4.73592 6.39717 5.56575 5.567C6.39558 4.73683 7.363 4.08475 8.468 3.61075C9.57283 3.13692 10.7534 2.9 12.0097 2.9C13.2661 2.9 14.4432 3.13683 15.541 3.6105C16.6388 4.08417 17.6028 4.73592 18.433 5.56575C19.2632 6.39558 19.9152 7.361 20.3892 8.462C20.8631 9.56317 21.1 10.7397 21.1 11.9915C21.1 13.2433 20.8632 14.4223 20.3895 15.5285C19.9158 16.6347 19.2641 17.6028 18.4342 18.433C17.6044 19.2632 16.639 19.9152 15.538 20.3892C14.4368 20.8631 13.2603 21.1 12.0085 21.1ZM12 19.8C14.1667 19.8 16.0083 19.0417 17.525 17.525C19.0417 16.0083 19.8 14.1667 19.8 12C19.8 9.83333 19.0417 7.99167 17.525 6.475C16.0083 4.95833 14.1667 4.2 12 4.2C9.83333 4.2 7.99167 4.95833 6.475 6.475C4.95833 7.99167 4.2 9.83333 4.2 12C4.2 14.1667 4.95833 16.0083 6.475 17.525C7.99167 19.0417 9.83333 19.8 12 19.8Z" fill="#3A4F41" />
                      )}
                    </svg>
                  </div>
                  <div
                    className={`filter_option d-flex justify-content-between align-items-center ${selectedSortOption === 'Availability' ? 'selected' : ''}`}
                    onClick={() => handleFilterOptionClick('sort', 'Availability', true)}
                  >
                    <p>Availability</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      {selectedSortOption === 'Availability' ? (
                        <path d="M3.5 20.5V3.5H20.5V20.5H3.5ZM5 19H19V5H5V19ZM8 16L12 12L16 16L14.6 17.4L12 14.8L9.4 17.4L8 16ZM14.6 8.6L16 10L12 14L8 10L9.4 8.6L12 11.2L14.6 8.6Z" fill="#3A4F41" />
                      ) : (
                        <path d="M12.0018 21.5C10.6878 21.5 9.45267 21.2507 8.2965 20.752C7.14033 20.2533 6.13467 19.5766 5.2795 18.7218C4.42433 17.8669 3.74725 16.8617 3.24825 15.706C2.74942 14.5503 2.5 13.3156 2.5 12.0018C2.5 10.6878 2.74933 9.55267 3.248 8.2965C3.74667 7.14033 4.42342 6.13467 5.27825 5.567C6.13308 4.73683 7.13833 4.08475 8.294 3.61075C9.44967 3.13692 10.6844 2.9 12.0085 2.9C13.2661 2.9 14.4432 3.13683 15.541 3.6105C16.6388 4.08417 17.6028 4.73592 18.433 5.56575C19.2632 6.39558 19.9152 7.361 20.3892 8.462C20.8631 9.56317 21.1 10.7397 21.1 11.9915C21.1 13.2433 20.8632 14.4223 20.3895 15.5285C19.9158 16.6347 19.2641 17.6028 18.4342 18.433C17.6044 19.2632 16.639 19.9152 15.538 20.3892C14.4368 20.8631 13.2603 21.1 12.0085 21.1ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4.2 14.2333 4.95833 16.125 6.475 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#111111" />
                      )}
                    </svg>
                  </div>
                </div>
              </div>

              <hr className="filter_divider" />

              <div className="filter_section mb-4">
                <div className="filter_section_header d-flex justify-content-between align-items-center" onClick={toggleAccordion}>
                  <h3>Collections</h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="chevron-icon">
                    <path d="M12.9462 12L8.34625 7.4L9.4 6.34625L15.0538 12L9.4 17.6537L8.34625 16.6L12.9462 12Z" fill="#111111" />
                  </svg>
                </div>

                <div className="filter_options">
                  {['Blazers and Jackets', 'Knitwear', 'Pants', 'Shirts', 'T-Shirts and Polos'].map(collection => (
                    <div
                      key={collection}
                      className={`filter_option d-flex justify-content-between align-items-center ${selectedFilters.collections.includes(collection) ? 'selected' : ''}`}
                      onClick={() => handleFilterOptionClick('collections', collection)}
                    >
                      <p>{collection}</p>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        {selectedFilters.collections.includes(collection) ? (
                          <path d="M3.5 20.5V3.5H20.5V20.5H3.5ZM5 19H19V5H5V19ZM8 16L12 12L16 16L14.6 17.4L12 14.8L9.4 17.4L8 16ZM14.6 8.6L16 10L12 14L8 10L9.4 8.6L12 11.2L14.6 8.6Z" fill="#3A4F41" />
                        ) : (
                          <path d="M3.5 20.5V3.5H20.5V20.5H3.5ZM5 19H19V5H5V19Z" fill="#111111" opacity="0.2" />
                        )}
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="filter_divider" />

              <div className="filter_section mb-4">
                <div className="filter_section_header d-flex justify-content-between align-items-center" onClick={toggleAccordion}>
                  <h3>Colour</h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="chevron-icon">
                    <path d="M12.9462 12L8.34625 7.4L9.4 6.34625L15.0538 12L9.4 17.6537L8.34625 16.6L12.9462 12Z" fill="#111111" />
                  </svg>
                </div>

                <div className="filter_options">
                  {['Black', 'White', 'Beige', 'Grey', 'Blue'].map(color => (
                    <div
                      key={color}
                      className={`filter_option d-flex justify-content-between align-items-center ${selectedFilters.colors.includes(color) ? 'selected' : ''}`}
                      onClick={() => handleFilterOptionClick('colors', color)}
                    >
                      <p>{color}</p>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        {selectedFilters.colors.includes(color) ? (
                          <path d="M3.5 20.5V3.5H20.5V20.5H3.5ZM5 19H19V5H5V19ZM8 16L12 12L16 16L14.6 17.4L12 14.8L9.4 17.4L8 16ZM14.6 8.6L16 10L12 14L8 10L9.4 8.6L12 11.2L14.6 8.6Z" fill="#3A4F41" />
                        ) : (
                          <path d="M3.5 20.5V3.5H20.5V20.5H3.5ZM5 19H19V5H5V19Z" fill="#111111" opacity="0.2" />
                        )}
                      </svg>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="filter_divider" />

              <div className="filter_section mb-4">
                <div className="filter_section_header d-flex justify-content-between align-items-center" onClick={toggleAccordion}>
                  <h3>Size</h3>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="chevron-icon">
                    <path d="M12.9462 12L8.34625 7.4L9.4 6.34625L15.0538 12L9.4 17.6537L8.34625 16.6L12.9462 12Z" fill="#111111" />
                  </svg>
                </div>

                <div className="filter_options">
                  {['XS', 'S', 'M', 'L'].map(size => (
                    <div
                      key={size}
                      className={`filter_option d-flex justify-content-between align-items-center ${selectedFilters.sizes.includes(size) ? 'selected' : ''}`}
                      onClick={() => handleFilterOptionClick('sizes', size)}
                    >
                      <p>{size}</p>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        {selectedFilters.sizes.includes(size) ? (
                          <path d="M3.5 20.5V3.5H20.5V20.5H3.5ZM5 19H19V5H5V19ZM8 16L12 12L16 16L14.6 17.4L12 14.8L9.4 17.4L8 16ZM14.6 8.6L16 10L12 14L8 10L9.4 8.6L12 11.2L14.6 8.6Z" fill="#3A4F41" />
                        ) : (
                          <path d="M3.5 20.5V3.5H20.5V20.5H3.5ZM5 19H19V5H5V19Z" fill="#111111" opacity="0.2" />
                        )}
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Overlay background for filters - conditionally rendered */}
          {isFilterOpen && <div className={`ProductPageFilterOverlay ${isFilterOpen ? 'active' : ''}`} id="filterBackdrop" onClick={closeFilter}></div>}
        </div>
      </section>

      {/* Add your product grid or collection display here */}
      <style jsx>{`
        /* Add these styles to your global CSS or a CSS module for this component */
        .ProductPageFilter {
          position: fixed;
          top: 0;
          right: -500px; /* Hidden by default */
          width: 500px; /* Or a percentage like 80% */
          height: 100%;
          background-color: white;
          z-index: 1000;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
          transition: right 0.3s ease-in-out;
          overflow-y: auto; /* Enable scrolling for filter content */
        }

        .ProductPageFilter.open {
          right: 0;
        }

        .ProductPageFilterOverlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }

        /* Responsive adjustment for filter panel */
        @media (max-width: 767px) {
          .ProductPageFilter {
            width: 100%; /* Full width on smaller screens */
            right: -100%;
          }
          .ProductPageFilter.open {
            right: 0;
          }
        }

        .chevron-icon {
          transition: transform 0.3s ease;
        }
        .chevron-icon.rotated {
          transform: rotate(90deg);
        }

        .filter-options {
          display: none; /* Hidden by default for accordion */
          overflow: hidden; /* For slideToggle effect */
          transition: max-height 0.3s ease-out; /* For smooth accordion transition */
          max-height: 0; /* Initial collapsed state */
        }

        .filter-options.active {
          display: block; /* Show when active */
        }

        .filter-option.selected {
          color: var(--primary-green, #3A4F41);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default ProductCollection;