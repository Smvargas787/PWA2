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

//Teacher Notes

///*
// Description: Project 1: Manipulating The DOM
// Author: Selena Vargas
// Date: 6/06/15
// */
//
////Target 1  Yes  create variables
////
//
////var leftNav = $('#contentleft'),
////		rightNav = $('#contentright'),
////		leftNavUL = leftNav.find('ul'),
////		rightNavUL = rightNav.find('ul');
//
//
////$('li a').css('background-color', 'orange')(function(){
////
////});
//document.getElementById("contentleft").style.background="orange"; //A   leftNavUL.css('backgroundColor', '#ff9933');
//var li = $( "li:last" );
//var offset = li.offset();
//li.html( "left: " + offset.left + ", top: " + offset.top ); //B
//var a = $( "li:first" );
//var position = li.position();
//$( "li a:last" ).text( "left: " + position.left + ", top: " + position.top ); //C
//
////Target 2
////$(function(){
////
////});
//document.querySelectorAll("li")[1].style.marginLeft ="30px"; //A  leftNavUL.find('li:eq(1)').css({marginLeft: 30});
//
////Target 3
//document.querySelector("a").style.color="red"; //A    leftNavUL.find('li:eq(3)').css({color: 'red'});
//$('div').filter().width();           //B  console.log(leftNavUL.find('li').filter(':eq(3)').width());
//
////Target 4
//document.querySelectorAll("li")[2].style.float ="right"; //A  var target4 = rightNav.find('h3').css({float: 'right'});
//$('h3').addClass('listhead');         //B   target4.addClass('listhead');
//$('h3').hasClass();                   //C   console.log("listhead: ", target4.hasClass('listhead'));
////console.log();
//
////Target 5
//document.querySelectorAll("a")[5,6,7].attr("http://www.yahoo.com"); //B  rightNavUL.find('li').children(':eq(2)').attr('href', 'http://www.yahoo.com');
//document.querySelectorAll("a")[5,6,7].attr("http://www.notgoogle.com" ); //B  rightNavUL.find('a').not(':eq(0)').attr('href', 'http://nogoogle.com');
//
