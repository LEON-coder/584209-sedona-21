$(document).ready(function() {
    $('.header__menu-burger').click(function() {
        $(this).toggleClass('active');
        $('.header__menu-burger_list-items').slideToggle(700);
        $('.header__menu-burger_list-items').addClass(".active-item");
        $('.header__menu-burger').toggleClass('menu-burger-active');
    })
})