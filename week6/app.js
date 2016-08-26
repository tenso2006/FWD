
$('.new-field').show();
var newToDoBox = $('.new-field');
$('.add').on('click',function(event){
    event.preventDefault();
    var newToDo = $('.to-do-list li').first().clone();
    //$('.to-do-list').append(newToDo)
    var newField = newToDoBox.val();
    newToDo.text(newField);
    $('.to-do-list').append(newToDo);
    newToDoBox.val('');
})

