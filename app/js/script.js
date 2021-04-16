// $(".header").mCustomScrollbar({

// });

function sortBtn(){
    let $button = $('.sort-btn')
    $button.click(() => {
        $button.toggleClass('active');
    })

}
function colorInputs(){
    let $colorList= $('.catalog__filter-colors-list');
    let labels =  Array.from($('label', $colorList));
    let inputs = Array.from($('input', $colorList));

    inputs.map((value, i) => {
        inputs[i].addEventListener('change', (e) => {
            labels[i].classList.toggle('active');
        })
    })
}

sortBtn();
colorInputs();

