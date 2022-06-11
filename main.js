window.addEventListener("scroll", function() {

	let value = window.scrollY;
	$("#stars").css("left", value * 0.25 + "px");
	// $("#moon").css("top", value * 1.05 + "px");
	$("#moon").css("top", value * 1 + "px");
	$("#mountains_behind").css("top", value * 0.5 + "px");
	$("#mountains_front").css("top", value * 0 + "px");
	$("#text").css("margin-top", value * 1.5 + "px");
	$("#btn").css("margin-top", value * 1.5 + "px");
	$("#header").css("top", value * 0.5 + "px");

})

$("#menu_btn").click(function(e) {

	e.preventDefault;
	$(this).toggleClass("menu_btn_active");
	$(".nav").toggleClass("nav_active");

})

// $("#home").click(function() {

// 	$("#home").addClass("nav_item_active")
// 	$("#work").removeClass("nav_item_active")
// 	$("#about").removeClass("nav_item_active")
// 	$("#contact").removeClass("nav_item_active")

// })

// $("#work").click(function() {

// 	$("#home").removeClass("nav_item_active")
// 	$("#work").addClass("nav_item_active")
// 	$("#about").removeClass("nav_item_active")
// 	$("#contact").removeClass("nav_item_active")

// })

// $("#about").click(function() {

// 	$("#home").removeClass("nav_item_active")
// 	$("#work").removeClass("nav_item_active")
// 	$("#about").addClass("nav_item_active")
// 	$("#contact").removeClass("nav_item_active")

// })

// $("#contact").click(function() {

// 	$("#home").removeClass("nav_item_active")
// 	$("#work").removeClass("nav_item_active")
// 	$("#about").removeClass("nav_item_active")
// 	$("#contact").addClass("nav_item_active")

// })