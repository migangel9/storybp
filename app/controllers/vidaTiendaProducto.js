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

function closeProducto(e){
	var win = Alloy.createController('vidaTienda').getView();		
	if (e.direction == 'right'){    		
		win.open();
	}
	win.open();
}
