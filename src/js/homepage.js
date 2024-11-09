window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  const scroll = 200;

  if (window.scrollY > 200) {
    navbar.classList.add("fixed", "top-0");
  } else {
    navbar.classList.remove("fixed", "top-0");
  }
};
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
