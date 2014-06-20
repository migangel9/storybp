function showMenu(e){
	$.main.width = Ti.Platform.displayCaps.platformWidth;
	$.main.animate({
		left: 300,
		duration: 100
	});
}

function showNewsAll(e){    
        var win = Alloy.createController('index').getView();
		win.open();      
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

function closeAgenda(e){
	if (e.direction == 'right'){    		
		var win = Alloy.createController('index').getView();
		win.open();
	}
}