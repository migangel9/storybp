function showMenu(e){
	$.main.width = Ti.Platform.displayCaps.platformWidth;
	$.main.animate({
		left: 300,
		duration: 100
	});
}

function hideMenu(e){	
	if(e.direction = "left"){
		$.main.width = Ti.UI.SIZE;
		$.main.animate({
			left: 0,
			duration: 100
		});
	}
}

function showNews(e){    
        var win = Alloy.createController('noticia').getView();
		win.open();
}

function showNewsAll(e){
        var win = Alloy.createController('index').getView();
		win.open();
}

function showAgenda(e){
        var win = Alloy.createController('agenda').getView();
		win.open();
}

function showVida(e){
        var win = Alloy.createController('vida').getView();
		win.open();
}

function showMercado(e){    
        var win = Alloy.createController('loboMercado').getView();
		win.open();
}

function showAlerta(){
    $.dialog.show();
}

function doClick(e){
    Ti.API.info('e.text: ' + e.text);
};

$.index.open();
