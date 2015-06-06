/*
Description: Project 1: Manipulating The DOM
Author: Selena Vargas
Date: 6/06/15
*/

//Target 1
//$('li a').css('background-color', 'orange')(function(){
//
//});
document.getElementById("contentleft").style.background="orange"; //A
var li = $( "li:last" );
var offset = li.offset();
li.html( "left: " + offset.left + ", top: " + offset.top ); //B
var a = $( "li:first" );
var position = li.position();
$( "li a:last" ).text( "left: " + position.left + ", top: " + position.top ); //C

//Target 2
//$(function(){
//
//});
document.querySelectorAll("li")[1].style.marginLeft ="30px"; //A

//Target 3
document.querySelector("a").style.color="red"; //A
$('div').filter().width();           //B

//Target 4
document.querySelectorAll("li")[2].style.float ="right"; //A
$('h3').addClass('listhead');         //B
$('h3').hasClass();                   //C
//console.log();

//Target 5
document.querySelectorAll("a")[5,6,7].attr("http://www.yahoo.com"); //B
document.querySelectorAll("a")[5,6,7].attr("http://www.notgoogle.com" ); //B
