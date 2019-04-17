//@prepros-prepend vendor/in-view.js
//@prepros-prepend vendor/smoothscroll.js

// Document ready
$(function() {
	$("body").addClass('js');

	$(".mainnav-toggle, #mainnav a").on("click", function() {
		$("#mainnav--wrapper, .hamburger").toggleClass("is-active");
	});


	inView("h1, h2, h3, p, .section-label, .time, .icon svg, .cover-img, .animate")
	.on("enter", function(el) {
		$(el).addClass("in-view");
	})
	.on('exit', el => {
		$(el).removeClass("in-view");
	});
});