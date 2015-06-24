// JavaScript Document

$("button").click(function(){
    $.getJSON("data/01simple.json", function(obj){
        $.each(obj, function(key, value){
            $("ul").append("<li>" + value.course + "</li>");
        });
    });
});