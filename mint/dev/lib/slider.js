$(document).ready(function() {
    $('.header__slider').slick({
        slidesToShow: 1,
        verticalSwiping: false,
        vertical: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows : false
        // dots: true
        // variableWidth: true
    });
});