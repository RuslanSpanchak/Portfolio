window.addEventListener("scroll", function() {

	let value = window.scrollY;
	$("#stars").css("left", value * 0.25 + "px");
	$("#moon").css("top", value * 1 + "px");
	$("#mountains_behind").css("top", value * 0.5 + "px");
	$("#mountains_front").css("top", value * 0 + "px");
	$("#text").css("margin-top", value * 1.5 + "px");
	$("#btn").css("margin-top", value * 1.5 + "px");

})

window.addEventListener("scroll", reveal);

function reveal() {

	let reveals = document.querySelectorAll(".reveal");

	for (let i = 0; i < reveals.length; i++) {

		let windowHeight = window.innerHeight;
		let revealTop = reveals[i].getBoundingClientRect().top;
		let revealPoint = 50;

		if (revealTop < windowHeight - revealPoint) {

			reveals[i].classList.add("reveal_active");

		} else {

			

		}

	}

}

$("#menu_btn").click(function(e) {

	e.preventDefault;
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