$(document).ready(function() {
		$("#navBtn").click(function(){
		$("nav").slideToggle();
		$(this).toggleClass("navActive"); // "this" refers to parent, so this case, navBtn
		

	}); 
});