// Document ready
$(function() {

	$(window).scroll(function() {
		if ( $(window).scrollTop() > 0 ) {
			$(".imgSlider_container").css("transform", "translateY(-100%)");
		}
	});
});
