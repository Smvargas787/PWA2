$('#duedate').datepicker();

    $('#add-todo').button({
        icons: {
            primary: "url-icon-cirlce-plus"
        }
    }).click(function(){
        $('#new-todo').dialog('open');
    });//end click
    $('#new-todo').dialog({
        width: 350,
        height: 300,
        modal: true,
        autoOpen: false,
        close: function(){
            $('#new-todo input').val('');     //    clear fields

        },

        buttons : {
            "Add task" : function() {
                var taskName = $('task').val();
                var dueDate = $('due-date').val();
                var beginLi = '<li><span class="done">%</span><span class="delete">X</span>';

                var taskLi = '<span class="task">' + taskName + '</span>';
                var dateLi = '<span class="due-date">' + dueDate + '</span>';
                var endLi = '</li>';
                $('#todo-list').prepend(beginLi + taskLi +dateLi + endLi);
                $('#todo-list').hide().slideDown(250).find('li:first')
                    .animate({
                        'background-color': 'rgb(255, 255, 204)'
                    },250)
                    .animate({
                        'background-color': 'white'
                    },750).animate();  //end animate
                $.(this).dialog('close');
            },
            "Cancel": function(){
                $(this).dialog('close');
            }
        }
    }); //dialog

//Marking As Complete

$('#todo-list').on('click' , '.done', function() {
    var $taskItem = $(this).parent('li');
    $taskItem.slideUp(250, function(){
        var $this = $(this);
        $this.detach();
        $('#completed-list').prepend($this);
        $this.slideDown();
    });
});

//Sortable
$('.sortlist').sortable({
    connectWith: '.sortlist',
    cursor : 'pointer',
    placeholder : 'ui-state-highlight',
    cancel : '.delete,.done'
});

//Delete
$.('.sortlist').on('click', '.delete',function(){
    $(this).parent('li').effect('puff', function () {
        $(this).remove();
    });
});