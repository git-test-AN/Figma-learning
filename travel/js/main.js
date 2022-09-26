(function () {
    const header = document.querySelection('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

// Burger handler

(function () {
    const burgerItem = document.querySelection('.burger');
    const menu = document.querySelection('.header__nav');
    const menuCloseItem = document.querySelection('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
    });
}());