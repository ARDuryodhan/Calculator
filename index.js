


function insertClick(num) {
    $('.result').val($('.result').val()+num);
}

function equalClick(){
    $('.result').val(eval($('.result').val()));
}

function delClick() {
    $('.result').val("");
}

function clearClick() {
    value= $('.result').val();
    $('.result').val(value.substring(0, value.length -1));
}