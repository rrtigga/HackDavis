
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

