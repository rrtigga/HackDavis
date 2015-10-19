
function moveVehicle() {
	var vehicles = ["#bus", "#bike", "#cow"];
	var num = 0;
	var xpos = $(vehicles[num]).offset().left;
	
	//move horizontally
	$(vehicles[num]).css({left: xpos + 5})
	if ( xpos + 5 > screen.width + 200) {
		$(vehicles[num]).css({left: -200})
	}
}

var animateObj = setInterval(moveVehicle, 25); //sets intervals

function moveCloud1() {
	var xpos = $("#cloud1").offset().left;
	
	//move horizontally
	$("#cloud1").css({left: xpos + 2})
	if ( xpos + 5 > screen.width + 200) {
		$("#cloud1").css({left: -200})
	}
}

var animateCloud1 = setInterval(moveCloud1, 25); //sets intervals

function moveCloud2() {
	var xpos = $("#cloud2").offset().left;
	
	//move horizontally
	$("#cloud2").css({left: xpos + 1})
	if ( xpos + 5 > screen.width + 200) {
		$("#cloud2").css({left: -200})
	}
}

var animateCloud2 = setInterval(moveCloud2, 25); //sets intervals

// $(document).ready(function() {
// var stickyNavTop = $('.nav').offset().top;
 
// var stickyNav = function(){
// var scrollTop = $(window).scrollTop();
      
// if (scrollTop > stickyNavTop) { 
//     $('.nav').addClass('sticky');
// } else {
//     $('.nav').removeClass('sticky'); 
// }
// };
 
// stickyNav();
 
// $(window).scroll(function() {
//     stickyNav();
// });
// });

//  $(document).ready(function (){
//     $("#clickIcon").click(function (){
//             $('html, body').animate({
//                 scrollTop: $("body").offset().top 
//             }, 500);
//     });
//     $("#clickAbout").click(function (){
//             $('html, body').animate({
//                 scrollTop: $("#about").offset().top
//             }, 500);
//     });
//     $("#clickFaq").click(function (){
//             $('html, body').animate({
//                 scrollTop: $("#faq").offset().top
//             }, 500);
//     });

// });

// $("#submit").click(function(){
// 	alert("asdfsadF")
// 	console.log("clicked")
// });

function submitClicked() {
	var email = $("#inp").val();
	$("#inp").val('');

	if (validateEmail(email)){
		console.log("email is valid");
		$.ajax({
			method: 'POST',
			dataType: "json",
			url: "/saveEmail/" + email, 
			data: {},
			success: function(result){
	        	console.log(result);
	        }
		});
		$("#msg").text('Thanks for submitting!');
	}
	else {
		$("#msg").text('This email isn\'t valid.');
		//console.log("email is not valid");
	}
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}



