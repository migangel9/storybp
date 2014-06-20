function Controller() {
    function showMenu() {
        $.main.width = Ti.Platform.displayCaps.platformWidth;
        $.main.animate({
            left: 300,
            duration: 100
        });
    }
    function hideMenu(e) {
        if (e.direction = "left") {
            $.main.width = Ti.UI.SIZE;
            $.main.animate({
                left: 0,
                duration: 100
            });
        }
    }
    function showNews() {
        var win = Alloy.createController("noticia").getView();
        win.open();
    }
    function showAgenda() {
        var win = Alloy.createController("agenda").getView();
        win.open();
    }
    function showVida() {
        var win = Alloy.createController("vida").getView();
        win.open();
    }
    function showNews() {
        var win = Alloy.createController("index").getView();
        win.open();
    }
    function showComida() {
        var win = Alloy.createController("tabComidaSe").getView();
        win.open();
    }
    function showGrafica() {
        var win = Alloy.createController("tabGraficas").getView();
        win.open();
    }
    function showMonigote() {
        var win = Alloy.createController("vidaDieta").getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabComida";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.tabComida = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "tabComida"
    });
    $.__views.tabComida && $.addTopLevelView($.__views.tabComida);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.tabComida.add($.__views.menu);
    hideMenu ? $.__views.menu.addEventListener("swipe", hideMenu) : __defers["$.__views.menu!swipe!hideMenu"] = true;
    $.__views.options = Ti.UI.createView({
        top: 0,
        left: 0,
        height: Ti.UI.SIZE,
        layout: "vertical",
        bubbleParent: false,
        backgroundColor: "#585B63",
        id: "options"
    });
    $.__views.menu.add($.__views.options);
    $.__views.__alloyId339 = Ti.UI.createView({
        top: "5",
        left: "5",
        height: 44,
        width: 290,
        borderColor: "#32384F",
        borderRadius: 5,
        borderWidht: 1,
        right: "5",
        bottom: "5",
        color: "#fff",
        backgroundColor: "#8A8C90",
        id: "__alloyId339"
    });
    $.__views.options.add($.__views.__alloyId339);
    $.__views.__alloyId340 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId340"
    });
    $.__views.__alloyId339.add($.__views.__alloyId340);
    $.__views.__alloyId341 = Ti.UI.createView({
        top: "5",
        left: "5",
        height: 44,
        width: 290,
        borderColor: "#32384F",
        borderRadius: 5,
        borderWidht: 1,
        right: "5",
        bottom: "5",
        color: "#fff",
        backgroundColor: "#8A8C90",
        id: "__alloyId341"
    });
    $.__views.options.add($.__views.__alloyId341);
    showAgenda ? $.__views.__alloyId341.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId341!click!showAgenda"] = true;
    $.__views.__alloyId342 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId342"
    });
    $.__views.__alloyId341.add($.__views.__alloyId342);
    $.__views.__alloyId343 = Ti.UI.createView({
        top: "5",
        left: "5",
        height: 44,
        width: 290,
        borderColor: "#32384F",
        borderRadius: 5,
        borderWidht: 1,
        right: "5",
        bottom: "5",
        color: "#fff",
        backgroundColor: "#8A8C90",
        id: "__alloyId343"
    });
    $.__views.options.add($.__views.__alloyId343);
    $.__views.__alloyId344 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId344"
    });
    $.__views.__alloyId343.add($.__views.__alloyId344);
    $.__views.__alloyId345 = Ti.UI.createView({
        top: "5",
        left: "5",
        height: 44,
        width: 290,
        borderColor: "#32384F",
        borderRadius: 5,
        borderWidht: 1,
        right: "5",
        bottom: "5",
        color: "#fff",
        backgroundColor: "#8A8C90",
        id: "__alloyId345"
    });
    $.__views.options.add($.__views.__alloyId345);
    showNews ? $.__views.__alloyId345.addEventListener("click", showNews) : __defers["$.__views.__alloyId345!click!showNews"] = true;
    $.__views.__alloyId346 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId346"
    });
    $.__views.__alloyId345.add($.__views.__alloyId346);
    $.__views.__alloyId347 = Ti.UI.createView({
        top: "5",
        left: "5",
        height: 44,
        width: 290,
        borderColor: "#32384F",
        borderRadius: 5,
        borderWidht: 1,
        right: "5",
        bottom: "5",
        color: "#fff",
        backgroundColor: "#8A8C90",
        id: "__alloyId347"
    });
    $.__views.options.add($.__views.__alloyId347);
    showVida ? $.__views.__alloyId347.addEventListener("click", showVida) : __defers["$.__views.__alloyId347!click!showVida"] = true;
    $.__views.__alloyId348 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId348"
    });
    $.__views.__alloyId347.add($.__views.__alloyId348);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#D2D2D2",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.tabComida.add($.__views.main);
    $.__views.iconBar = Ti.UI.createView({
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#FF761B",
                offset: 0
            }, {
                color: "#E66713",
                offset: 1
            } ]
        },
        width: Ti.UI.FILL,
        height: "54",
        id: "iconBar"
    });
    $.__views.main.add($.__views.iconBar);
    $.__views.topActions = Ti.UI.createView({
        width: "200",
        height: "50",
        layout: "horizontal",
        id: "topActions"
    });
    $.__views.iconBar.add($.__views.topActions);
    $.__views.contactsBtn = Ti.UI.createImageView({
        width: "30",
        height: "30",
        left: 20,
        top: 10,
        image: "/images/contactBtn.png",
        id: "contactsBtn"
    });
    $.__views.topActions.add($.__views.contactsBtn);
    $.__views.eventBtn = Ti.UI.createImageView({
        width: "30",
        height: "30",
        left: 20,
        top: 10,
        image: "/images/ic_action_event.png",
        id: "eventBtn"
    });
    $.__views.topActions.add($.__views.eventBtn);
    showAgenda ? $.__views.eventBtn.addEventListener("click", showAgenda) : __defers["$.__views.eventBtn!click!showAgenda"] = true;
    $.__views.messagesBtn = Ti.UI.createImageView({
        width: "30",
        height: "30",
        left: 20,
        top: 10,
        image: "/images/messagesBtn.png",
        id: "messagesBtn"
    });
    $.__views.topActions.add($.__views.messagesBtn);
    $.__views.notificationsBtn = Ti.UI.createImageView({
        width: "30",
        height: "30",
        left: 20,
        top: 10,
        image: "/images/notificationsBtn.png",
        id: "notificationsBtn"
    });
    $.__views.topActions.add($.__views.notificationsBtn);
    $.__views.menuBtn = Ti.UI.createImageView({
        left: 5,
        width: "35",
        height: "34",
        image: "/images/menuBtn.png",
        id: "menuBtn"
    });
    $.__views.iconBar.add($.__views.menuBtn);
    showMenu ? $.__views.menuBtn.addEventListener("click", showMenu) : __defers["$.__views.menuBtn!click!showMenu"] = true;
    $.__views.searchBtn = Ti.UI.createImageView({
        right: 5,
        width: "35",
        height: "34",
        image: "/images/searchBtn.png",
        id: "searchBtn"
    });
    $.__views.iconBar.add($.__views.searchBtn);
    $.__views.menuBar = Ti.UI.createView({
        backgroundColor: "#f5f6f9",
        width: Ti.UI.FILL,
        height: "45",
        layout: "horizontal",
        id: "menuBar"
    });
    $.__views.main.add($.__views.menuBar);
    $.__views.__alloyId349 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId349"
    });
    $.__views.menuBar.add($.__views.__alloyId349);
    showComida ? $.__views.__alloyId349.addEventListener("click", showComida) : __defers["$.__views.__alloyId349!click!showComida"] = true;
    $.__views.comidaBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/comidaBtn.png",
        id: "comidaBtn"
    });
    $.__views.__alloyId349.add($.__views.comidaBtn);
    $.__views.tabActive = Ti.UI.createView({
        bottom: 0,
        height: "3",
        width: Ti.UI.FILL,
        backgroundColor: "#d07436",
        layout: "horizontal",
        id: "tabActive"
    });
    $.__views.__alloyId349.add($.__views.tabActive);
    $.__views.__alloyId350 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId350"
    });
    $.__views.menuBar.add($.__views.__alloyId350);
    showGrafica ? $.__views.__alloyId350.addEventListener("click", showGrafica) : __defers["$.__views.__alloyId350!click!showGrafica"] = true;
    $.__views.graficasBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/graficasBtn.png",
        id: "graficasBtn"
    });
    $.__views.__alloyId350.add($.__views.graficasBtn);
    $.__views.__alloyId351 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId351"
    });
    $.__views.menuBar.add($.__views.__alloyId351);
    showMonigote ? $.__views.__alloyId351.addEventListener("click", showMonigote) : __defers["$.__views.__alloyId351!click!showMonigote"] = true;
    $.__views.monigoteBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/monigoteBtn.png",
        id: "monigoteBtn"
    });
    $.__views.__alloyId351.add($.__views.monigoteBtn);
    $.__views.saludometro = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "saludometro",
        showVerticalScrollIndicator: "true",
        scrollType: "vertical"
    });
    $.__views.main.add($.__views.saludometro);
    var __alloyId352 = [];
    $.__views.v1 = Ti.UI.createView({
        layout: "horizontal",
        id: "v1"
    });
    __alloyId352.push($.__views.v1);
    $.__views.__alloyId353 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId353"
    });
    $.__views.v1.add($.__views.__alloyId353);
    $.__views.__alloyId354 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/meatBtn.png",
        id: "__alloyId354"
    });
    $.__views.__alloyId353.add($.__views.__alloyId354);
    $.__views.__alloyId355 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId355"
    });
    $.__views.v1.add($.__views.__alloyId355);
    $.__views.__alloyId356 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/eggBtn.png",
        id: "__alloyId356"
    });
    $.__views.__alloyId355.add($.__views.__alloyId356);
    $.__views.__alloyId357 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId357"
    });
    $.__views.v1.add($.__views.__alloyId357);
    $.__views.__alloyId358 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/bananaBtn.png",
        id: "__alloyId358"
    });
    $.__views.__alloyId357.add($.__views.__alloyId358);
    $.__views.v2 = Ti.UI.createView({
        layout: "horizontal",
        id: "v2"
    });
    __alloyId352.push($.__views.v2);
    $.__views.__alloyId359 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId359"
    });
    $.__views.v2.add($.__views.__alloyId359);
    $.__views.__alloyId360 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/appleBtn.png",
        id: "__alloyId360"
    });
    $.__views.__alloyId359.add($.__views.__alloyId360);
    $.__views.__alloyId361 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId361"
    });
    $.__views.v2.add($.__views.__alloyId361);
    $.__views.__alloyId362 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/friesBtn.png",
        id: "__alloyId362"
    });
    $.__views.__alloyId361.add($.__views.__alloyId362);
    $.__views.__alloyId363 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId363"
    });
    $.__views.v2.add($.__views.__alloyId363);
    $.__views.__alloyId364 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/burguerBtn.png",
        id: "__alloyId364"
    });
    $.__views.__alloyId363.add($.__views.__alloyId364);
    $.__views.v3 = Ti.UI.createView({
        layout: "horizontal",
        id: "v3"
    });
    __alloyId352.push($.__views.v3);
    $.__views.__alloyId365 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId365"
    });
    $.__views.v3.add($.__views.__alloyId365);
    $.__views.__alloyId366 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/pizzaBtn.png",
        id: "__alloyId366"
    });
    $.__views.__alloyId365.add($.__views.__alloyId366);
    $.__views.__alloyId367 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId367"
    });
    $.__views.v3.add($.__views.__alloyId367);
    $.__views.__alloyId368 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/tomatoBtn.png",
        id: "__alloyId368"
    });
    $.__views.__alloyId367.add($.__views.__alloyId368);
    $.__views.__alloyId369 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId369"
    });
    $.__views.v3.add($.__views.__alloyId369);
    $.__views.__alloyId370 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/chickenBtn.png",
        id: "__alloyId370"
    });
    $.__views.__alloyId369.add($.__views.__alloyId370);
    $.__views.scrollView = Ti.UI.createScrollableView({
        width: Ti.UI.FILL,
        height: 65,
        backgroundColor: "#E3E3E3",
        views: __alloyId352,
        id: "scrollView",
        showPagingControl: "true"
    });
    $.__views.saludometro.add($.__views.scrollView);
    var __alloyId371 = [];
    $.__views.v1 = Ti.UI.createView({
        layout: "horizontal",
        id: "v1"
    });
    __alloyId371.push($.__views.v1);
    $.__views.__alloyId372 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId372"
    });
    $.__views.v1.add($.__views.__alloyId372);
    $.__views.__alloyId373 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/appleBtn.png",
        id: "__alloyId373"
    });
    $.__views.__alloyId372.add($.__views.__alloyId373);
    $.__views.__alloyId374 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId374"
    });
    $.__views.v1.add($.__views.__alloyId374);
    $.__views.__alloyId375 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/friesBtn.png",
        id: "__alloyId375"
    });
    $.__views.__alloyId374.add($.__views.__alloyId375);
    $.__views.__alloyId376 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId376"
    });
    $.__views.v1.add($.__views.__alloyId376);
    $.__views.__alloyId377 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/burguerBtn.png",
        id: "__alloyId377"
    });
    $.__views.__alloyId376.add($.__views.__alloyId377);
    $.__views.v2 = Ti.UI.createView({
        layout: "horizontal",
        id: "v2"
    });
    __alloyId371.push($.__views.v2);
    $.__views.__alloyId378 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId378"
    });
    $.__views.v2.add($.__views.__alloyId378);
    $.__views.__alloyId379 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/meatBtn.png",
        id: "__alloyId379"
    });
    $.__views.__alloyId378.add($.__views.__alloyId379);
    $.__views.__alloyId380 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId380"
    });
    $.__views.v2.add($.__views.__alloyId380);
    $.__views.__alloyId381 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/eggBtn.png",
        id: "__alloyId381"
    });
    $.__views.__alloyId380.add($.__views.__alloyId381);
    $.__views.__alloyId382 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId382"
    });
    $.__views.v2.add($.__views.__alloyId382);
    $.__views.__alloyId383 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/bananaBtn.png",
        id: "__alloyId383"
    });
    $.__views.__alloyId382.add($.__views.__alloyId383);
    $.__views.v3 = Ti.UI.createView({
        layout: "horizontal",
        id: "v3"
    });
    __alloyId371.push($.__views.v3);
    $.__views.__alloyId384 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId384"
    });
    $.__views.v3.add($.__views.__alloyId384);
    $.__views.__alloyId385 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/pizzaBtn.png",
        id: "__alloyId385"
    });
    $.__views.__alloyId384.add($.__views.__alloyId385);
    $.__views.__alloyId386 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId386"
    });
    $.__views.v3.add($.__views.__alloyId386);
    $.__views.__alloyId387 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/tomatoBtn.png",
        id: "__alloyId387"
    });
    $.__views.__alloyId386.add($.__views.__alloyId387);
    $.__views.__alloyId388 = Ti.UI.createView({
        width: "33%",
        height: "55dp",
        id: "__alloyId388"
    });
    $.__views.v3.add($.__views.__alloyId388);
    $.__views.__alloyId389 = Ti.UI.createImageView({
        top: 10,
        width: "55dp",
        height: "55dp",
        image: "/images/chickenBtn.png",
        id: "__alloyId389"
    });
    $.__views.__alloyId388.add($.__views.__alloyId389);
    $.__views.scrollView = Ti.UI.createScrollableView({
        width: Ti.UI.FILL,
        height: 65,
        backgroundColor: "#E3E3E3",
        views: __alloyId371,
        id: "scrollView",
        showPagingControl: "true"
    });
    $.__views.saludometro.add($.__views.scrollView);
    $.__views.platillo = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 150,
        backgroundColor: "#fff",
        id: "platillo"
    });
    $.__views.saludometro.add($.__views.platillo);
    $.__views.__alloyId390 = Ti.UI.createImageView({
        image: "/images/plato.png",
        id: "__alloyId390"
    });
    $.__views.platillo.add($.__views.__alloyId390);
    $.__views.__alloyId391 = Ti.UI.createImageView({
        height: "35",
        width: "35",
        right: "15",
        image: "/images/scanBtn.png",
        id: "__alloyId391"
    });
    $.__views.platillo.add($.__views.__alloyId391);
    $.__views.recomendaciones = Ti.UI.createView({
        backgroundColor: "#1BC123",
        color: "#fff",
        borderRadius: 5,
        borderWidht: 1,
        left: "5",
        right: "5",
        top: "5",
        width: Ti.UI.FILL,
        height: "45",
        id: "recomendaciones"
    });
    $.__views.saludometro.add($.__views.recomendaciones);
    $.__views.__alloyId392 = Ti.UI.createLabel({
        text: "Te recomendamos que agregues jitomate a tu comida, esta te ayudara a subir el nivel de ...",
        color: "#fff",
        left: "5",
        right: "5",
        id: "__alloyId392"
    });
    $.__views.recomendaciones.add($.__views.__alloyId392);
    $.__views.saludLbl = Ti.UI.createLabel({
        top: 10,
        left: 10,
        color: "#000",
        text: "Saludometro",
        id: "saludLbl"
    });
    $.__views.saludometro.add($.__views.saludLbl);
    $.__views.saludPuntajeLbl = Ti.UI.createLabel({
        right: 10,
        color: "#000",
        text: "+ 14 pts",
        id: "saludPuntajeLbl"
    });
    $.__views.saludometro.add($.__views.saludPuntajeLbl);
    $.__views.__alloyId393 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId393"
    });
    $.__views.saludometro.add($.__views.__alloyId393);
    $.__views.pb = Ti.UI.createProgressBar({
        id: "pb",
        min: "0",
        width: "80%",
        max: "100",
        value: "30",
        color: "#000",
        message: "Granos"
    });
    $.__views.__alloyId393.add($.__views.pb);
    $.__views.__alloyId394 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId394"
    });
    $.__views.saludometro.add($.__views.__alloyId394);
    $.__views.pb2 = Ti.UI.createProgressBar({
        id: "pb2",
        min: "0",
        width: "80%",
        max: "100",
        value: "50",
        color: "#000",
        message: "Verduras"
    });
    $.__views.__alloyId394.add($.__views.pb2);
    $.__views.__alloyId395 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId395"
    });
    $.__views.saludometro.add($.__views.__alloyId395);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "85",
        message: "Frutas"
    });
    $.__views.__alloyId395.add($.__views.pb3);
    $.__views.__alloyId396 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId396"
    });
    $.__views.saludometro.add($.__views.__alloyId396);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "65",
        message: "Lacteos"
    });
    $.__views.__alloyId396.add($.__views.pb3);
    $.__views.__alloyId397 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId397"
    });
    $.__views.saludometro.add($.__views.__alloyId397);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "45",
        message: "Grasas"
    });
    $.__views.__alloyId397.add($.__views.pb3);
    $.__views.__alloyId398 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId398"
    });
    $.__views.saludometro.add($.__views.__alloyId398);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "15",
        message: "Carne"
    });
    $.__views.__alloyId398.add($.__views.pb3);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Enviar",
        top: "10",
        width: "100",
        height: "50",
        bottom: "15"
    });
    $.__views.saludometro.add($.__views.button);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId341!click!showAgenda"] && $.__views.__alloyId341.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId345!click!showNews"] && $.__views.__alloyId345.addEventListener("click", showNews);
    __defers["$.__views.__alloyId347!click!showVida"] && $.__views.__alloyId347.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.__alloyId349!click!showComida"] && $.__views.__alloyId349.addEventListener("click", showComida);
    __defers["$.__views.__alloyId350!click!showGrafica"] && $.__views.__alloyId350.addEventListener("click", showGrafica);
    __defers["$.__views.__alloyId351!click!showMonigote"] && $.__views.__alloyId351.addEventListener("click", showMonigote);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;