$(function(){


    $.getJSON("data/02simple.json", function(data){
        $.each(data.student, function() {
            $("ul").append("<li>Name:" + this ['name'] +
                "</li><li>Program:" + this['program'] +
                "</li><li>GPA: " +this['gpa'] + "</li>");
        });
    });
});