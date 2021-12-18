// Menu mobile
const menu = document.querySelector('.header-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
    if (hamburger.classList.contains('is-active')) {
        hamburger.classList.remove('is-active');
        menu.classList.remove('header-menu--active');
    } else {
        hamburger.classList.add('is-active');
        menu.classList.add('header-menu--active');
    }
});

document.addEventListener('click', function (e) {
    const its_menu = e.target == menu || menu.contains(e.target);
    const its_btn_menu = e.target == hamburger;
    const menu_is_active = menu.classList.contains('header-menu--active');

    if (!its_menu && !its_btn_menu && menu_is_active) {
        hamburger.classList.remove('is-active');
        menu.classList.remove('header-menu--active');
    };
});
