$('#simple-search').on('keyup click input', function(){
	if(this.value.length > 0) {
		$('#search-list li').hide().filter(function () {
				return $(this).text().toLowerCase().indexOf($('#simple-search').val().toLowerCase()) != -1;
		}).show();
	}
	else {
		$('#search-list li').hide();
	}
});
