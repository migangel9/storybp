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
    this.__controllerPath = "tabGraficas";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.tabGraficas = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "tabGraficas"
    });
    $.__views.tabGraficas && $.addTopLevelView($.__views.tabGraficas);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.tabGraficas.add($.__views.menu);
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
    $.__views.__alloyId417 = Ti.UI.createView({
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
        id: "__alloyId417"
    });
    $.__views.options.add($.__views.__alloyId417);
    $.__views.__alloyId418 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId418"
    });
    $.__views.__alloyId417.add($.__views.__alloyId418);
    $.__views.__alloyId419 = Ti.UI.createView({
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
        id: "__alloyId419"
    });
    $.__views.options.add($.__views.__alloyId419);
    showAgenda ? $.__views.__alloyId419.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId419!click!showAgenda"] = true;
    $.__views.__alloyId420 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId420"
    });
    $.__views.__alloyId419.add($.__views.__alloyId420);
    $.__views.__alloyId421 = Ti.UI.createView({
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
        id: "__alloyId421"
    });
    $.__views.options.add($.__views.__alloyId421);
    $.__views.__alloyId422 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId422"
    });
    $.__views.__alloyId421.add($.__views.__alloyId422);
    $.__views.__alloyId423 = Ti.UI.createView({
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
        id: "__alloyId423"
    });
    $.__views.options.add($.__views.__alloyId423);
    showNews ? $.__views.__alloyId423.addEventListener("click", showNews) : __defers["$.__views.__alloyId423!click!showNews"] = true;
    $.__views.__alloyId424 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId424"
    });
    $.__views.__alloyId423.add($.__views.__alloyId424);
    $.__views.__alloyId425 = Ti.UI.createView({
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
        id: "__alloyId425"
    });
    $.__views.options.add($.__views.__alloyId425);
    showVida ? $.__views.__alloyId425.addEventListener("click", showVida) : __defers["$.__views.__alloyId425!click!showVida"] = true;
    $.__views.__alloyId426 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId426"
    });
    $.__views.__alloyId425.add($.__views.__alloyId426);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#D2D2D2",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.tabGraficas.add($.__views.main);
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
    $.__views.__alloyId427 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId427"
    });
    $.__views.menuBar.add($.__views.__alloyId427);
    showComida ? $.__views.__alloyId427.addEventListener("click", showComida) : __defers["$.__views.__alloyId427!click!showComida"] = true;
    $.__views.comidaBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/comidaBtn.png",
        id: "comidaBtn"
    });
    $.__views.__alloyId427.add($.__views.comidaBtn);
    $.__views.__alloyId428 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId428"
    });
    $.__views.menuBar.add($.__views.__alloyId428);
    showGrafica ? $.__views.__alloyId428.addEventListener("click", showGrafica) : __defers["$.__views.__alloyId428!click!showGrafica"] = true;
    $.__views.graficasBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/graficasBtn.png",
        id: "graficasBtn"
    });
    $.__views.__alloyId428.add($.__views.graficasBtn);
    $.__views.tabActive = Ti.UI.createView({
        bottom: 0,
        height: "3",
        width: Ti.UI.FILL,
        backgroundColor: "#d07436",
        layout: "horizontal",
        id: "tabActive"
    });
    $.__views.__alloyId428.add($.__views.tabActive);
    $.__views.__alloyId429 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId429"
    });
    $.__views.menuBar.add($.__views.__alloyId429);
    showMonigote ? $.__views.__alloyId429.addEventListener("click", showMonigote) : __defers["$.__views.__alloyId429!click!showMonigote"] = true;
    $.__views.monigoteBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/monigoteBtn.png",
        id: "monigoteBtn"
    });
    $.__views.__alloyId429.add($.__views.monigoteBtn);
    $.__views.principal = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "principal",
        showVerticalScrollIndicator: "true",
        scrollType: "vertical"
    });
    $.__views.main.add($.__views.principal);
    $.__views.buttonsGrafica = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "buttonsGrafica"
    });
    $.__views.principal.add($.__views.buttonsGrafica);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Dia",
        top: "10",
        width: "100"
    });
    $.__views.buttonsGrafica.add($.__views.button);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Semana",
        top: "10",
        width: "100"
    });
    $.__views.buttonsGrafica.add($.__views.button);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Mes",
        top: "10",
        width: "100"
    });
    $.__views.buttonsGrafica.add($.__views.button);
    $.__views.graficaView = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "graficaView"
    });
    $.__views.principal.add($.__views.graficaView);
    $.__views.grafica = Ti.UI.createImageView({
        image: "/images/graph.png",
        id: "grafica"
    });
    $.__views.graficaView.add($.__views.grafica);
    $.__views.saludLbl = Ti.UI.createLabel({
        left: 10,
        text: "Saludometro",
        id: "saludLbl"
    });
    $.__views.principal.add($.__views.saludLbl);
    $.__views.saludPuntajeLbl = Ti.UI.createLabel({
        right: 10,
        text: "+ 14 pts",
        id: "saludPuntajeLbl"
    });
    $.__views.principal.add($.__views.saludPuntajeLbl);
    $.__views.__alloyId430 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId430"
    });
    $.__views.principal.add($.__views.__alloyId430);
    $.__views.pb = Ti.UI.createProgressBar({
        id: "pb",
        min: "0",
        width: "80%",
        max: "100",
        value: "30",
        color: "#000",
        message: "L"
    });
    $.__views.__alloyId430.add($.__views.pb);
    $.__views.__alloyId431 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId431"
    });
    $.__views.principal.add($.__views.__alloyId431);
    $.__views.pb2 = Ti.UI.createProgressBar({
        id: "pb2",
        min: "0",
        width: "80%",
        max: "100",
        value: "50",
        color: "#000",
        message: "Ma"
    });
    $.__views.__alloyId431.add($.__views.pb2);
    $.__views.__alloyId432 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId432"
    });
    $.__views.principal.add($.__views.__alloyId432);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "85",
        message: "Mi"
    });
    $.__views.__alloyId432.add($.__views.pb3);
    $.__views.__alloyId433 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId433"
    });
    $.__views.principal.add($.__views.__alloyId433);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "65",
        message: "J"
    });
    $.__views.__alloyId433.add($.__views.pb3);
    $.__views.__alloyId434 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId434"
    });
    $.__views.principal.add($.__views.__alloyId434);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "45",
        message: "V"
    });
    $.__views.__alloyId434.add($.__views.pb3);
    $.__views.__alloyId435 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId435"
    });
    $.__views.principal.add($.__views.__alloyId435);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "15",
        message: "S"
    });
    $.__views.__alloyId435.add($.__views.pb3);
    $.__views.__alloyId436 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId436"
    });
    $.__views.principal.add($.__views.__alloyId436);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "15",
        message: "D"
    });
    $.__views.__alloyId436.add($.__views.pb3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId419!click!showAgenda"] && $.__views.__alloyId419.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId423!click!showNews"] && $.__views.__alloyId423.addEventListener("click", showNews);
    __defers["$.__views.__alloyId425!click!showVida"] && $.__views.__alloyId425.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.__alloyId427!click!showComida"] && $.__views.__alloyId427.addEventListener("click", showComida);
    __defers["$.__views.__alloyId428!click!showGrafica"] && $.__views.__alloyId428.addEventListener("click", showGrafica);
    __defers["$.__views.__alloyId429!click!showMonigote"] && $.__views.__alloyId429.addEventListener("click", showMonigote);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;