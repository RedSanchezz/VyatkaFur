//открыть блок с сортировкой
function sortBtn(){
    let $button = $('.sort-btn__title')
    $button.click(() => {
        $button.parent().toggleClass('active');
    })

}

//При активации чекбокса с цветом обводим его label
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

//Валидация формы с ценой
function validateCostInput(){
    //цена От
    let $startCost = $('#inp_const_start');
    //цена До
    let $endCost = $('#inp_const_end');

    $startCost.on('input', (e) => {
       let value = e.currentTarget.value;
       //строка не может содержать не цифры
       value = value.replace(/\D/g, '');
        //строка не может начинаться с  последовательности 0
        value =value.replace(/^0+/, '');

       e.currentTarget.value=value;
    });
    $startCost.on('change', (e) => {
        let value = e.currentTarget.value;
        //не может быть меньше 999
        value = parseInt(value) < 999 ? '999' : value;
        //не может быть больше 99999
        value = parseInt(value) > 99999 ? '99999' : value;
        e.currentTarget.value=value;
    });


    $endCost.on('input', (e) => {
        let value = e.currentTarget.value;
        //строка не может содержать не цифры
        value = value.replace(/\D/g, '');
        //строка не может начинаться с  последовательности 0
        value =value.replace(/^0+/, '');
        e.currentTarget.value=value;
    });
    $endCost.on('change', (e) => {
        let value = e.currentTarget.value;
        //не может быть меньше 999
        value = parseInt(value) < 999 ? '999' : value;

        //не может быть больше 99999
        value = parseInt(value) > 99999 ? '99999' : value;
        e.currentTarget.value=value;
    })
}



// нужно что бы у блока правильно появлялся нижний блок
{
    let globalZIndex = 99999;

    let array = Array.from($('.product--item'))
    for (const it of array) {
        $(it).css({
            zIndex: globalZIndex--,
        })
    }
}




sortBtn();
colorInputs();
validateCostInput();

