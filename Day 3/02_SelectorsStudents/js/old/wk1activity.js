// JavaScript Document

(function($){  //10. Explain why this is used instead of a document ready function.

//4. Add the jQuery function-select the h2 of this simple web page.
$('h2')

//5. Selectors using IDS
$('#hlisting')

//6. Selectors using Classes
$('.america')

//7. Manipulator
var message = $('<span></span>');

//8. Manipulator-Before
var message = $("<span>Call 1-555-jquery-air to book this tour</span>");
$(".buy").before(message);

//9. CSS Method - Complete this line
 $(".trip").on("mouseenter", function() {
    $(this).__("______", "_____");
  });
  
  
//Answer
//$(document).ready(function() {
 // $(".tour").on("mouseenter", function() {
  //  $(this).css({"background-color": "#252b30"});
//  });
//});  
  


})(jQuery) 