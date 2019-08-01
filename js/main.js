
$('.btn').on('click', 'button', function(){
    let $val = $('.input').val();
    $('.listPoint').append(`<li type="square"><button id=remove class="btn btn-danger">x</button>${$val}</li>`);
});

var removeBtn = document.getElementById('button.remove');
removeBtn.addEventListener('click', function(evt){
    this.remove('li');

})