// // var owl = $('.reveiw-carousel');
// //  owl.owlCarousel({
// //    margin: 20,
// //    loop: true,
// //    nav: false,
// //    dots: false,
// // //    autoWidth: true,
// //    responsive: {
  
// //      600: {
// //        items: 2,
// //        autoWidth: true,
// //        center: true
// //      },
// //      1000: {
// //        items: 3,
// //        autoWidth: true,
// //        center: true
// //      }
// //    }
// // })


// // // ========testimonial=======

// // var owl = $('.testimonial-carousel');
// //  owl.owlCarousel({
// //    margin: 20,
// //    loop: true,
// //    nav: false,
// //    dots: false,
// // //    autoWidth: true,
// //    responsive: {
// //   0:{
// //     items: 1,
// //     autoWidth: true,
// //   },
// //      600: {
// //        items: 1,
// //        autoWidth: true,
// //        center: true
// //      },
// //      1000: {
// //        items: 2,
// //        autoWidth: true,
// //        center: true
// //      }
// //    }
// // })
// // function prevVideo() {
// //   owl.trigger('prev.owl.carousel');
// // }

// // function nextVideo() {
// //   owl.trigger('next.owl.carousel');
// // }


// // ============ crousel ============

// function updateArrowOpacity(event) {
//     const carousel = $(event.target);
//     const currentIndex = event.item.index;
//     const totalItems = event.item.count;
  
//     // Previous button
//     const prevBtn = carousel.find('.owl-prev svg');
//     if (currentIndex === 0) {
//       prevBtn.css('opacity', '0.2');
//     } else {
//       prevBtn.css('opacity', '1');
//     }
  
//     // Next button
//     const nextBtn = carousel.find('.owl-next svg');
//     if (currentIndex + event.page.size >= totalItems) {
//       nextBtn.css('opacity', '0.2');
//     } else {
//       nextBtn.css('opacity', '1');
//     }
//   }
  
//   $(document).ready(function(){
//     const $carousel = $('.product-carousel');
  
//     $carousel.owlCarousel({
//       loop: false,
//       margin: 0,
//       nav: true,
//       navText: [
//         `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M14.2768 15.9999L20.4102 9.86652L19.4665 8.92285L12.3895 15.9999L19.4665 23.0769L20.4102 22.1332L14.2768 15.9999Z" fill="#1C1C1C"/></svg>`,
//         `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M17.7232 15.9999L11.5898 9.86652L12.5335 8.92285L19.6105 15.9999L12.5335 23.0769L11.5898 22.1332L17.7232 15.9999Z" fill="#1C1C1C"/></svg>`
//       ],
//       dots: false,
//       responsive: {
//         0: { items: 2 },
//         600: { items: 2 },
//         1000: { items: 3 }
//       },
//       onInitialized: updateArrowOpacity,
//       onChanged: updateArrowOpacity
//     });
//   });
  
  
  
  
  
  
  
//   $(document).ready(function(){
//     const $carousel = $('.sustainability_product_carousel');
  
//     $carousel.owlCarousel({
//       loop: false,
//       margin: 24,
//       nav: false,
//       navText: [
//         `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M14.2768 15.9999L20.4102 9.86652L19.4665 8.92285L12.3895 15.9999L19.4665 23.0769L20.4102 22.1332L14.2768 15.9999Z" fill="#1C1C1C"/></svg>`,
//         `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M17.7232 15.9999L11.5898 9.86652L12.5335 8.92285L19.6105 15.9999L12.5335 23.0769L11.5898 22.1332L17.7232 15.9999Z" fill="#1C1C1C"/></svg>`
//       ],
//       dots: false,
//       responsive: {
//         0: { items: 1 },
//         600: { items: 2 },
//         1000: { items: 3 }
//       },
//       onInitialized: updateArrowOpacity,
//       onChanged: updateArrowOpacity
//     });
//   });
  
  
//   // =======================mobile menu=======================
  
//   $(document).ready(function() {
//     $('#open-menu-btn').click(function() {
//       $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
//       $('#overlay').addClass('active-behind');
//       $('body').css('overflow', 'hidden');
//     });
  
//     $('.x-header-menu-close').click(function() {
//       $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
//       $('#overlay').removeClass('active-behind');
//       $('body').css('overflow', 'unset');
//     });
//     $('.menu-bar-show-overlay').click(function() {
//       $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
//       $('#overlay').removeClass('active-behind');
//       $('body').css('overflow', 'unset');
//     })
  
//     $('.mobile-search-accordian').click(function() {
//       // Close all open split-accordion-text elements
//       $('.split-accordion-text').not($(this).next('.split-accordion-text')).slideUp();
  
//       // Toggle the visibility of the clicked split-accordion-text
//       $(this).next('.split-accordion-text').slideToggle();
//     });
//   });
  
  
  
//   // ======GSAP======
  
//   let animate = gsap.timeline();
  
//   gsap.from('.Va_banner_img img', {
//     // x: -1600,
//     scale: 1.1,
//     duration: 1,
//     ease: 'power10.out', // comma added
//     scrollTrigger: {
//       trigger: '.Va_banner_img img',
//       toggleActions: "play reverse play reverse",
//     }
//   });
  
//   gsap.from(".banner_section_content > *", {
//     y: 10,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.2,
//     ease: "power3.out", // comma added
//     scrollTrigger: {
//       trigger: ".banner_section_content",
//       toggleActions: "play reverse play reverse",
//     }
//   });
  
  
//   gsap.from('.Membership_works_section_content_img img, .mwscis_fade img', {
//     scale: 0.98,
//     opacity: 0,
//     duration: 1.2,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: ".Membership_works_section_content_img img, .mwsdci_fade img",
//       start: "top 80%",
//       // toggleActions: "play reverse play reverse", // will animate in and out on scroll
  
//     }
//   });
  
  
  
//   gsap.registerPlugin(ScrollTrigger);
  
//   // Animate image
//     // Loop through each collection block
//     document.querySelectorAll(".collection_section_content").forEach((section) => {
//       const img = section.querySelector(".collection_section_content_img img");
//       const texts = section.querySelectorAll(".collection_section_content_text > *");
  
//       // Animate image
//       gsap.from(img, {
//         scale: 0.8,
//         opacity: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: section,
//           start: "top 80%",
//           // end: "bottom 20%",
//           // toggleActions: "play reverse play reverse",
//           markers: false,
//         },
//       });
  
//       // Animate heading and paragraph
//       gsap.from(texts, {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: section,
//           start: "top 80%",
//           // end: "bottom 20%",
//           // toggleActions: "play reverse play reverse",
//           markers: false,
//         },
//       });
//     });
  
  
  
//   gsap.from(".new_beginning_section_content h2", {
//     y: -10,
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: ".new_beginning_section",
//       start: "top 80%",
//       // toggleActions: "play reverse play reverse", // will animate in and out on scroll
  
//     }
//   });
  
//   gsap.from(".new_beginning_section_content_img img", {
//     scale: 0.98,
//     opacity: 0,
//     duration: 1.2,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: ".new_beginning_section_content_img",
//       start: "top 80%",
//       // toggleActions: "play reverse play reverse", // will animate in and out on scroll
  
//     }
//   });
  
//   gsap.from(".nbsc_text p, .nbsc_text a", {
//     y: 10,
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//     stagger: 0.2,
//     scrollTrigger: {
//       trigger: ".nbsc_text",
//       start: "top 85%",
//       // toggleActions: "play reverse play reverse", // will animate in and out on scroll
  
//     }
//   });
  
  
//   window.addEventListener("load", () => {
//     // Animate heading and paragraph
//     gsap.from(".crousel_section_content h2", {
//       y: -50,
//       opacity: 0,
//       duration: 1,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: ".crousel_section_content",
//         start: "top 80%",
//         // toggleActions: "play reverse play reverse", // will animate in and out on scroll
  
//       }
//     });
  
//     gsap.from(".crousel_section_content p", {
//       y: -10,
//       opacity: 0,
//       duration: 1,
//       delay: 0.3,
//       ease: "power3.out",
//     });
  
//     // Animate each carousel item with a staggered effect
//     gsap.from(".owl-carousel .item", {
//       y: 10,
//       opacity: 0,
//       duration: 1,
//       delay: 0.6,
//       stagger: 0.2,
//       ease: "power3.out"
//     });
//   });
  
  
  
  
//   // Select section
//   const membership = document.querySelector(".membership_section");
  
//   // Image animation
//   gsap.from(".membership_section_content_img img", {
//     scale: 0.98,
//     opacity: 0,
//     duration: 1.2,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: membership,
//       start: "top 30%",
//       // toggleActions: "play reverse play reverse", // will animate in and out on scroll
  
//       once: true,
//     },
//   });
  
//   // Text animation
//   gsap.from(".membership_section_content_text > *", {
//     y: 10,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.2,
//     ease: "power3.out",
//     scrollTrigger: {
//       trigger: membership,
//       start: "top 60%",
//       // toggleActions: "play reverse play reverse", // will animate in and out on scroll
//       once: true,
//     },
//   });
  
//   gsap.from(".membership_section", {
//     opacity: 0,
//     y: 20,
//     duration: 1,
//     ease: "power2.out",
//     scrollTrigger: {
//       trigger: ".membership_section",
//       start: "top 30%",
//       // toggleActions: "play reverse play reverse", // will animate in and out on scroll
  
//       once: true,
//     },
//   });
  
//   // 1. Animate brand + logo
//   // gsap.from(".footer_section_content", {
//   //   opacity: 0,
//   //   y: 10,
//   //   duration: 1,
//   //   ease: "power2.out",
//   //   scrollTrigger: {
//   //     trigger: ".footer_section",
//   //     start: "top 85%",
//   //     // toggleActions: "play reverse play reverse", // will animate in and out on scroll
//   //     once: true,
//   //   },
//   // });
  
//   // // 2. Animate footer columns
//   // gsap.from(".footer_list", {
//   //   opacity: 0,
//   //   y: 10,
//   //   stagger: 0.2,
//   //   duration: 1,
//   //   ease: "power2.out",
//   //   scrollTrigger: {
//   //     trigger: ".footer_section",
//   //     start: "top 85%",
//   //     // toggleActions: "play reverse play reverse", // will animate in and out on scroll
  
//   //     once: true,
//   //   },
//   // });
  
//   // // 3. Animate footer bottom section
//   // gsap.from(".footer_bottom", {
//   //   opacity: 0,
//   //   y: 10,
//   //   duration: 1,
//   //   ease: "power2.out",
//   //   scrollTrigger: {
//   //     trigger: ".footer_section",
//   //     start: "top 85%",
//   //     // toggleActions: "play reverse play reverse", // will animate in and out on scroll
  
//   //     once: true,
//   //   },
//   // });
  
  
//   // animate.from('.x-about-img',{
//   //   y:-500,
//   //   x:-500,
//   //   duration:1,
//   //   opacity:0,
//   // })
  
//   // animate.from('.x-about-text h2',{
//   //   x:500,
//   //   duration:1,
//   //   opacity:0,
//   // })
  
  
//   // animate.from('.x-about-text p',{
//   //   duration:1,
//   //   opacity:0,
//   // })
  
//   // animate.from('.x-about-text img',{
//   //   x:-500,
//   //   duration:1,
//   //   opacity:0,
//   // })
  
  
  
//   // const ninjaL = document.querySelector('.ninja-l');
//   // const ninjaLImg = document.querySelector('.ninja-l-img');
//   // let offsetX = 0;
//   // let offsetY = 0;
  
//   // document.addEventListener('mousemove', (event) => {
//   //     const { clientX, clientY } = event;
//   //     const { left, top, width, height } = ninjaL.getBoundingClientRect();
//   //     const maxX = width - ninjaLImg.clientWidth;
//   //     const maxY = height - ninjaLImg.clientHeight;
  
//   //     offsetX = Math.max(0, Math.min(clientX - left, maxX));
//   //     offsetY = Math.max(0, Math.min(clientY - top, maxY));
  
//   //     updatePosition();
//   // });
  
//   // document.addEventListener('mouseleave', () => {
//   //     offsetX = 0;
//   //     offsetY = 0;
//   //     updatePosition();
//   // });
  
//   // function updatePosition() {
//   //     ninjaLImg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
//   // }
  
  
  
  
  
//   // Add scroll event listener
//   window.addEventListener('scroll', function () {
//       const headers = document.querySelectorAll('.x-mobile-header, .x-mobile-header-menu');
//       headers.forEach(header => {
//           if (window.scrollY > 20) {
//               header.classList.add('scrolled');
//           } else {
//               header.classList.remove('scrolled');
//           }
//       });
//   });
  
  
  
  
  
//   // ============= like button =============
  
//   $(document).on('click', '.crousel_item_img_svg svg', function() {
//     $(this).toggleClass('active');
//   });
  
  
//   // ============= scroll to top =============
  
//   $(document).on('click', '.scroll-to-top-btn', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: 0 }, 200);
//   });
  
  
  
  
  
  
  
//   $(document).ready(function() {
//     // Open filter sidebar
//     $(document).on('click', '#filterToggle', function() {
//       openFilter();
//     });
  
//     // Close filter sidebar
//     $(document).on('click', '#closeFilter, #filterBackdrop', function() {
//       closeFilter();
//     });
  
//     function openFilter() {
//       $('#filterOverlay').css({ right: 0 });
//       $('#filterBackdrop').fadeIn(300);
//       $('body').css('overflow', 'hidden');
//     }
  
//     function closeFilter() {
//       $('#filterOverlay').css({ right: '-500px' });
//       $('#filterBackdrop').fadeOut(300);
//       $('body').css('overflow', 'auto');
//     }
  
//     // Responsive adjustment for filter panel
//     $(window).on('resize', function() {
//       if ($(window).width() <= 767) {
//         $('#filterOverlay').css('right', '-100%');
//       } else {
//         if ($('#filterBackdrop').is(':visible')) {
//           $('#filterOverlay').css('right', 0);
//         } else {
//           $('#filterOverlay').css('right', '-500px');
//         }
//       }
//     });
  
//     // Accordion toggle for filter sections
//     $(document).on('click', '.filter-section-header', function() {
//       $(this).next('.filter-options').slideToggle(300);
//       $(this).find('.chevron-icon').toggleClass('rotated');
//     });
  
//     // Filter option select/deselect
//     $(document).on('click', '.filter-option', function() {
//       $(this).toggleClass('selected');
//       const checkbox = $(this).find('svg');
//       if ($(this).hasClass('selected')) {
//         checkbox.css('opacity', '1');
//         checkbox.html('<path d="M3.5 20.5V3.5H20.5V20.5H3.5ZM5 19H19V5H5V19ZM8 16L12 12L16 16L14.6 17.4L12 14.8L9.4 17.4L8 16ZM14.6 8.6L16 10L12 14L8 10L9.4 8.6L12 11.2L14.6 8.6Z" fill="#3A4F41"/>');
//       } else {
//         checkbox.css('opacity', '0.2');
//         checkbox.html('<path d="M3.5 20.5V3.5H20.5V20.5H3.5ZM5 19H19V5H5V19Z" fill="#111111"/>');
//       }
//     });
  
//     // Add CSS for rotated chevron and selected state
//     if (!$('head style[data-filter-css]').length) {
//       $('<style data-filter-css>')
//         .prop('type', 'text/css')
//         .html(`
//           .chevron-icon.rotated {
//             transform: rotate(90deg);
//             transition: transform 0.3s ease;
//           }
//           .filter-section-header .chevron-icon {
//             transition: transform 0.3s ease;
//           }
//           .filter-option.selected {
//             color: var(--primary-green, #3A4F41);
//             font-weight: 500;
//           }
//         `)
//         .appendTo('head');
//     }
//   });
  
//   // Tab functionality for sustainability.html
//   $(document).on('click', '.tab_nav_item', function() {
//     var tab = $(this).data('tab');
//     // Set active tab button
//     $('.tab_nav_item').removeClass('active');
//     $(this).addClass('active');
//     // Show corresponding panel
//     $('.tab_panel').removeClass('active');
//     $('#tab-' + tab).addClass('active');
//   });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//     // Size selection
//     $('.size-option').on('click', function() {
//       $('.size-option').removeClass('selected');
//       $(this).addClass('selected');
//   });
  
//   // Heart icon (favorites)
//   $('.heart-icon').on('click', function() {
//       const $heart = $(this).find('path');
      
//       if ($heart.attr('fill') === '#1C1C1C') {
//           $heart.attr('fill', '#d4183d');
//           $(this).css('transform', 'scale(1.1)');
//           setTimeout(() => {
//               $(this).css('transform', 'scale(1)');
//           }, 200);
//       } else {
//           $heart.attr('fill', '#1C1C1C');
//       }
//   });
  
  
  
//     // Toggle accordion sections
//     $('.section-header').on('click', function() {
//       const $header = $(this);
//       const $content = $header.next('.section-content');
//       const $icon = $header.find('.toggle-icon');
      
//       // Toggle the current section
//       $content.slideToggle(300);
      
//       // Rotate the icon
//       if ($content.is(':visible')) {
//           $icon.css('transform', 'rotate(45deg)');
//       } else {
//           $icon.css('transform', 'rotate(0deg)');
//       }
      
//       // Close other sections
//       $('.section-content').not($content).slideUp(300);
//       $('.section-header').not($header).find('.toggle-icon').css('transform', 'rotate(0deg)');
//   });
  
//   // Search Overlay Functionality
//   $(document).ready(function() {
//     function openSearchOverlay() {
//       $('#searchOverlay').addClass('active');
//       $('body').addClass('search-open');
//       setTimeout(function() {
//         $('#searchOverlay .search-overlay-input').focus();
//       }, 100);
//     }
//     function closeSearchOverlay() {
//       $('#searchOverlay').removeClass('active');
//       $('body').removeClass('search-open');
//     }
//     // Open overlay on search icon click
//     $(document).on('click', '.xhs_search img[alt="search"]', function() {
//       openSearchOverlay();
//     });
//     // Close overlay on close button or background click
//     $(document).on('click', '#closeSearchOverlay, .search-overlay-bg', function() {
//       closeSearchOverlay();
//     });
//     // ESC key closes overlay
//     $(document).on('keydown', function(e) {
//       if (e.key === 'Escape' && $('#searchOverlay').hasClass('active')) {
//         closeSearchOverlay();
//       }
//     });
//     // Prevent scroll on overlay
//     $('#searchOverlay').on('wheel touchmove', function(e) {
//       if ($('#searchOverlay').hasClass('active')) {
//         e.stopPropagation();
//       }
//     });
//   });
  
//   // Lightbox functionality
//   let currentImageIndex = 0;
//   const images = document.querySelectorAll('.pd_inventry_left_img img');
  
//   function openLightbox(img) {
//       const lightbox = document.getElementById('lightbox');
//       const lightboxImg = document.getElementById('lightbox-img');
//       currentImageIndex = Array.from(images).indexOf(img);
      
//       lightboxImg.src = img.src;
//       lightbox.classList.add('active');
//       document.body.style.overflow = 'hidden';
//   }
  
//   function closeLightbox() {
//       const lightbox = document.getElementById('lightbox');
//       lightbox.classList.remove('active');
//       document.body.style.overflow = '';
//   }
  
//   function changeImage(direction) {
//       currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
//       const lightboxImg = document.getElementById('lightbox-img');
//       lightboxImg.src = images[currentImageIndex].src;
//   }
  
//   // Close lightbox when clicking outside the image
//   document.getElementById('lightbox').addEventListener('click', function(e) {
//       if (e.target === this) {
//           closeLightbox();
//       }
//   });
  
//   // Keyboard navigation
//   document.addEventListener('keydown', function(e) {
//       const lightbox = document.getElementById('lightbox');
//       if (lightbox.classList.contains('active')) {
//           if (e.key === 'Escape') {
//               closeLightbox();
//           } else if (e.key === 'ArrowLeft') {
//               changeImage(-1);
//           } else if (e.key === 'ArrowRight') {
//               changeImage(1);
//           }
//       }
//   });
  
  
  
//   // ============= Product Detail Slider =============
  
//   const slides = document.getElementById('slides');
//   const counter = document.getElementById('counter');
//   const prev = document.getElementById('prev');
//   const next = document.getElementById('next');
  
//   let currentIndex = 0;
//   const totalSlides = slides.children.length;
  
//   function updateSlider() {
//     slides.style.transform = `translateX(-${currentIndex * 100}%)`;
//     counter.textContent = `${currentIndex + 1}/${totalSlides}`;
//   }
  
//   prev.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     updateSlider();
//   });
  
//   next.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     updateSlider();
//   });
  
//   // Optional: swipe handling for mobile
//   let startX = 0;
//   slides.addEventListener('touchstart', e => startX = e.touches[0].clientX);
//   slides.addEventListener('touchend', e => {
//     const endX = e.changedTouches[0].clientX;
//     if (startX - endX > 50) next.click();
//     else if (endX - startX > 50) prev.click();
//   });
  
//   updateSlider();