// $(".header").mCustomScrollbar({

// });

function sortBtn(){
    let $button = $('.sort-btn')
    $button.click(() => {
        $button.toggleClass('active');
    })

}
sortBtn();