$(document).ready(function(){
    
	//$('#awesomeList').addClass('hilite');
	//$('.submit').addClass('hilite');
	//$('p').addClass('hilite');

	//$('#awesomeList ul li').addClass('hilite');

	//$('div, p').addClass('hiliteBig');

	//$('img[title]').addClass('hilite');
	//$('img[src*="2009"]').addClass('hilite');

	//var targ = document.querySelector('awesomeList li');

	//targ.nextSibling.nextSibling.nextSibling.nextSibling

	//targ.next();

	var elem = $('p');
	//elem.html('<a href="test.com">WHAT</a>');

	elem.append('<a>WHAT</a>');
	elem.prepend('<a>OK</a>');

	var moz = elem.find('a[href*=mozilla]');
	moz.after('<a>InBetween</a>');

	moz.wrap('<span style="background:yellow;"></span>');

	moz.before('<a>InBetween</a>').fadeOut(2000).fadeIn();

	moz.remove();


});