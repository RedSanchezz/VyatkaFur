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



// bottom block
let height;
let titles=$('.descriptions-item__title');

for (const it of titles) {
    let title = $(it);
    let item = title.parent();

    let popup = $('.descriptions-item__popup', item);
    let height = getComputedStyle(popup.get(0)).height;

    $(it).on('click', (e) => {
        item.toggleClass('active');
    });
}


//benefit
{
    let discount = $('.product-card__discount-img');
    let benefit = $('<div class="product-card__discount-benefit">Выгода: 10 800 ₽</div>');

    discount.on('mouseenter', (e) => {
        console.log('enter');
        discount.append(benefit);
    });
    discount.on('mouseleave', (e) => {
        console.log('leave');
        benefit.remove();
    });
}
