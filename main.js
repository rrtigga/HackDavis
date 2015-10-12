
function moveVehicle() {
	var vehicles = ["#bus", "#bike", "#cow"]
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
