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

function closeNews(e){
	var win = Alloy.createController('index').getView();			
	win.open();
}
