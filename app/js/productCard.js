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

//rating 
let rating = $('.product-card__rating').attr('data-rating');
$('.product-card__rating-active').css({
    width: rating + '%',
})

{
    let rating = $('.product-card__rating-unactive');
    let array = Array.from($('a', rating));
    console.log(array);
    array.map((value, index, array) => {
        value.addEventListener('mousemove', (e) => {
            for(let i =index; i>=0; i--){
                array[i].classList.add('active');
            }
        });
        value.addEventListener('mouseleave', (e) => {
            for (const it of array) {
                it.classList.remove('active');
            }
        });

    })


}
