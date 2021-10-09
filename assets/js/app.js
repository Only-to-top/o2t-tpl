document.addEventListener('DOMContentLoaded', () => {

    // Fancybox
    Fancybox.bind("[data-fancybox]", {
        animationEffect: 'fade',
        animationDuration: 555,
        l10n: {
            CLOSE: "Закрыть",
            NEXT: "Далее",
            PREV: "Назад",
        },
    });

    // Swiper
    if (document.querySelector(".swiper-1x")) {
        const swiper_1x = new Swiper('.swiper-1x', {
            loop: true,
            autoplay: {
                delay: 5000,
            },
            navigation: { prevEl: ".swiper-button-prev-1x", nextEl: ".swiper-button-next-1x" },
            // pagination: { el: ".swiper-pagination-1x", clickable: true },
            spaceBetween: 30,
            grabCursor: true,
            allowTouchMove: true, // touch mouse
            touchStartPreventDefault: false, // mouseup events
            breakpoints: { // mobile first
                0: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 }
            },
            on: {
                init() {
                    this.el.addEventListener('mouseenter', () => this.autoplay.stop());
                    this.el.addEventListener('mouseleave', () => this.autoplay.start());
                }
            },
        });
    };

    // $("img, a").on("dragstart", e => e.preventDefault());
});


window.addEventListener('load', () => { });


if (document.documentElement.clientWidth < 768) { };


$(document).on('scroll touchmove', () => { });
