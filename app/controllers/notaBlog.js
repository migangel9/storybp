function showMenu(e){
	$.main.width = Ti.Platform.displayCaps.platformWidth;
	$.main.animate({
		left: 300,
		duration: 100
	});
}

function hideMenu(e){
	$.main.width = Ti.Platform.displayCaps.platformWidth;
	$.main.animate({
		left: 0,
		duration: 100
	});
}

function closeNota(e){
	var win = Alloy.createController('vidaBlog').getView();		
	if (e.direction == 'right'){    		
		win.open();
	}
	win.open();
}
