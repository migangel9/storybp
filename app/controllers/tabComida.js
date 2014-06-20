
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

function showAgenda(e){    
        var win = Alloy.createController('agenda').getView();
		win.open();      
}

function showVida(e){    
        var win = Alloy.createController('vida').getView();
		win.open();      
}

function showNews(e){    
        var win = Alloy.createController('index').getView();
		win.open();      
}

function showJuegos(e){    
        var win = Alloy.createController('vidaJuegos').getView();
		win.open();      
}

function showVidaBlog(e){    
        var win = Alloy.createController('vidaBlog').getView();
		win.open();      
}

function showComida(e){    
        var win = Alloy.createController('tabComidaSe').getView();
		win.open();      
}

function showGrafica(e){    
        var win = Alloy.createController('tabGraficas').getView();
		win.open();      
}

function showMonigote(e){    
        var win = Alloy.createController('vidaDieta').getView();
		win.open();      
}