/* Función de configuración del slider Swiper.js */
const swiper = new Swiper('.swiper', {
    direction: "vertical",
    sliderPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

/* Función para activar/desactivar el menú lateral */
function toggleMenu() {
    var header = document.querySelector('header');
    var aside = document.querySelector('aside');
    header.classList.toggle('active');
    aside.classList.toggle('active');
}

/* Función para activar/desactivar el menú pegajoso (sticky menu) */
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})