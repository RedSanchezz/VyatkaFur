$('.product-card__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.product-card__slider-block .slider-arrows__left ',
    nextArrow: '.product-card__slider-block .slider-arrows__right ',
    dots: true,
    appendDots: $('.product-card__slider-dots', '.product-card__slider-block')
});
$('.product-card__slider-mobile').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.product-card__slider-mobile-block .slider-arrows__left ',
    nextArrow: '.product-card__slider-mobile-block .slider-arrows__right ',
    dots: false,
});

