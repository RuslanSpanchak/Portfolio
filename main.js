window.addEventListener("scroll", function() {

	let value = window.scrollY;
	$("#stars").css("left", value * 0.25 + "px");
	$("#moon").css("top", value * 1 + "px");
	$("#mountains_behind").css("top", value * 0.5 + "px");
	$("#mountains_front").css("top", value * 0 + "px");
	$("#text").css("margin-top", value * 1.5 + "px");
	$("#btn").css("margin-top", value * 1.5 + "px");

})

$("#menu_btn").click(function(e) {

	e.preventDefault;
	$("#menu_btn").toggleClass("menu_btn_active");
	$(".nav").toggleClass("nav_active");

})

$(".section").click(function() {

	$("#menu_btn").toggleClass("menu_btn_active");
	$(".nav").toggleClass("nav_active");

})

$(".works").click(function() {

	$("#menu_btn").toggleClass("menu_btn_active");
	$(".nav").toggleClass("nav_active");

})

$(".footer").click(function() {

	$("#menu_btn").toggleClass("menu_btn_active");
	$(".nav").toggleClass("nav_active");

})

$("#home").click(function() {

	$("#menu_btn").toggleClass("menu_btn_active");
	$(".nav").toggleClass("nav_active");

})

$("#work").click(function() {

	$("#menu_btn").toggleClass("menu_btn_active");
	$(".nav").toggleClass("nav_active");
	
})

$("#about").click(function() {

	$("#menu_btn").toggleClass("menu_btn_active");
	$(".nav").toggleClass("nav_active");
	
})

$("#skills_scroll").click(function() {

	$("#menu_btn").toggleClass("menu_btn_active");
	$(".nav").toggleClass("nav_active");
	
})