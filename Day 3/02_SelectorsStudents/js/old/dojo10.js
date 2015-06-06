$(document).ready(function(){
	var overlay= $('<div class="overlay"></div>');
	$("#login").click(function(){
		$("#hiddenizer").slideDown('slow', function(){
			overlay.appendTo(document.body);
		});
		$("#login").hide();
		
			});
		});
		
	$("#cancel").click(function(){
		$("#hiddenizer").slideUp('slow');
		$("#login").show();
		$('.overlay').remove();
		
});