//слайдеры
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
//Заполняем рейтинг из атрибута
let rating = $('.product-card__rating').attr('data-rating');
$('.product-card__rating-active').css({
    width: rating + '%',
})
//меняем цвет звездочек при hover
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
//Меню в нижнем блоке
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


//Динамически считаем выгоду и отображаем окно с ней
{
    let discount = $('.product-card__discount-img img');
    //убираем все не цифры и превращаем в целочислненное
    let oldCost = parseInt($('.product-card__old-cost-text').text().replace(/\D/gi, ''));
    let newCost = parseInt($('.product-card__new-cost').text().replace(/\D/gi, ''));

    let difference = oldCost - newCost;

    let benefit = $('.product-card__discount-benefit');
    benefit.text('Выгода: '+ difference + ' ₽')
    if(window.matchMedia('(min-width: 560px)').matches){
        // do functionality on screens smaller than 768px
        discount.on('mouseenter', (e) => {
            benefit.addClass('active');

        });
    }
    discount.on('mouseleave', (e) => {
        benefit.removeClass('active');
    });
}
