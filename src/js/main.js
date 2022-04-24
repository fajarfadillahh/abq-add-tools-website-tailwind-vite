import "../css/index.css";

// ===== SHOW MENU =====
function showMenu(menuId, toggleId, closeId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);
  const close = document.getElementById(closeId);

  if (menu && toggle && close) {
    toggle.onclick = () => {
      menu.classList.add("show-menu");
    };
    close.onclick = () => {
      menu.classList.remove("show-menu");
    };
  }
}
showMenu("header-menu", "header-toggle", "header-close");

// ===== TESTIMONIAL SWIPER =====
let testimonialSwiper = new Swiper(".testimonial__swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 36,
  loop: true,
  autoplay: {
    duration: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
