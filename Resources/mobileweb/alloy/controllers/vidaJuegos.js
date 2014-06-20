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
    function showAgenda() {
        var win = Alloy.createController("agenda").getView();
        win.open();
    }
    function showVida() {
        var win = Alloy.createController("vida").getView();
        win.open();
    }
    function showCiertoFalso(e) {
        if ("right" == e.direction) {
            var win = Alloy.createController("index").getView();
            win.open();
        }
    }
    function showAlerta() {
        $.dialog.show();
    }
    function doClick(e) {
        Ti.API.info("e.text: " + e.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "vidaJuegos";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.vidaJuegos = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "vidaJuegos"
    });
    $.__views.vidaJuegos && $.addTopLevelView($.__views.vidaJuegos);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.vidaJuegos.add($.__views.menu);
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
    $.__views.__alloyId116 = Ti.UI.createView({
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
        id: "__alloyId116"
    });
    $.__views.options.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createView({
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
        id: "__alloyId118"
    });
    $.__views.options.add($.__views.__alloyId118);
    showAgenda ? $.__views.__alloyId118.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId118!click!showAgenda"] = true;
    $.__views.__alloyId119 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createView({
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
        id: "__alloyId120"
    });
    $.__views.options.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
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
        id: "__alloyId122"
    });
    $.__views.options.add($.__views.__alloyId122);
    showVida ? $.__views.__alloyId122.addEventListener("click", showVida) : __defers["$.__views.__alloyId122!click!showVida"] = true;
    $.__views.__alloyId123 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#D2D2D2",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.vidaJuegos.add($.__views.main);
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
    $.__views.categoriaLbl = Ti.UI.createLabel({
        right: 5,
        color: "#2B2D2B",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        layout: "horizontal",
        text: "Vida Juegos",
        id: "categoriaLbl"
    });
    $.__views.menuBar.add($.__views.categoriaLbl);
    var __alloyId124 = [];
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "60dp",
        backgroundColor: "#fff",
        focusable: false,
        id: "listRow"
    });
    __alloyId124.push($.__views.listRow);
    $.__views.ciertoFalsoBtn = Ti.UI.createImageView({
        width: "50",
        heigth: "50",
        left: 5,
        image: "/images/cierto_falsoBtn.png",
        id: "ciertoFalsoBtn"
    });
    $.__views.listRow.add($.__views.ciertoFalsoBtn);
    showCiertoFalso ? $.__views.ciertoFalsoBtn.addEventListener("click", showCiertoFalso) : __defers["$.__views.ciertoFalsoBtn!click!showCiertoFalso"] = true;
    $.__views.gameName = Ti.UI.createLabel({
        top: "5",
        left: "60",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Cierto o Falso",
        id: "gameName"
    });
    $.__views.listRow.add($.__views.gameName);
    $.__views.infoGame = Ti.UI.createLabel({
        top: "25",
        left: "60",
        color: "#33743C",
        font: {
            fontSize: "14"
        },
        text: "Prueba tus conocimientos y juega este reto.",
        id: "infoGame"
    });
    $.__views.listRow.add($.__views.infoGame);
    $.__views.playBtn = Ti.UI.createImageView({
        width: "50",
        heigth: "50",
        right: 5,
        image: "/images/playBtn.png",
        id: "playBtn"
    });
    $.__views.listRow.add($.__views.playBtn);
    showAlerta ? $.__views.playBtn.addEventListener("click", showAlerta) : __defers["$.__views.playBtn!click!showAlerta"] = true;
    $.__views.listRowDisable = Ti.UI.createTableViewRow({
        height: "60dp",
        backgroundColor: "#bbbbbb",
        focusable: false,
        id: "listRowDisable"
    });
    __alloyId124.push($.__views.listRowDisable);
    $.__views.runningBtn = Ti.UI.createImageView({
        width: "50",
        heigth: "50",
        left: 5,
        image: "/images/runningBtn.png",
        id: "runningBtn"
    });
    $.__views.listRowDisable.add($.__views.runningBtn);
    $.__views.gameNameDisable = Ti.UI.createLabel({
        top: "5",
        left: "60",
        color: "#676965",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Check in Running",
        id: "gameNameDisable"
    });
    $.__views.listRowDisable.add($.__views.gameNameDisable);
    $.__views.infoGameDisable = Ti.UI.createLabel({
        top: "25",
        left: "60",
        color: "#7f7f7e",
        font: {
            fontSize: "14"
        },
        text: "Corre hasta la meta y has check in!",
        id: "infoGameDisable"
    });
    $.__views.listRowDisable.add($.__views.infoGameDisable);
    $.__views.buyBtn = Ti.UI.createImageView({
        width: "50",
        heigth: "50",
        right: 5,
        image: "/images/buyBtn.png",
        id: "buyBtn"
    });
    $.__views.listRowDisable.add($.__views.buyBtn);
    showAlerta ? $.__views.buyBtn.addEventListener("click", showAlerta) : __defers["$.__views.buyBtn!click!showAlerta"] = true;
    $.__views.listRowDisable = Ti.UI.createTableViewRow({
        height: "60dp",
        backgroundColor: "#bbbbbb",
        focusable: false,
        id: "listRowDisable"
    });
    __alloyId124.push($.__views.listRowDisable);
    $.__views.tapBtn = Ti.UI.createImageView({
        width: "50",
        heigth: "50",
        left: 5,
        image: "/images/tapBtn.png",
        id: "tapBtn"
    });
    $.__views.listRowDisable.add($.__views.tapBtn);
    $.__views.gameNameDisable = Ti.UI.createLabel({
        top: "5",
        left: "60",
        color: "#676965",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Tap tap",
        id: "gameNameDisable"
    });
    $.__views.listRowDisable.add($.__views.gameNameDisable);
    $.__views.infoGameDisable = Ti.UI.createLabel({
        top: "25",
        left: "60",
        color: "#7f7f7e",
        font: {
            fontSize: "14"
        },
        text: "...",
        id: "infoGameDisable"
    });
    $.__views.listRowDisable.add($.__views.infoGameDisable);
    $.__views.coinsBtn = Ti.UI.createImageView({
        width: "50",
        heigth: "50",
        right: 5,
        image: "/images/coinsBtn.png",
        id: "coinsBtn"
    });
    $.__views.listRowDisable.add($.__views.coinsBtn);
    showAlerta ? $.__views.coinsBtn.addEventListener("click", showAlerta) : __defers["$.__views.coinsBtn!click!showAlerta"] = true;
    $.__views.mainList = Ti.UI.createTableView({
        backgroundColor: "#D4D6DA",
        separatorStyle: "NONE",
        data: __alloyId124,
        id: "mainList"
    });
    $.__views.main.add($.__views.mainList);
    var __alloyId126 = [];
    __alloyId126.push("Aceptar");
    __alloyId126.push("Cancelar");
    $.__views.dialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId126,
        id: "dialog",
        title: "Comprar Juego",
        message: "¿Quieres comprar este juego con tu dineroBUAP?",
        cancel: "1"
    });
    doClick ? $.__views.dialog.addEventListener("click", doClick) : __defers["$.__views.dialog!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId118!click!showAgenda"] && $.__views.__alloyId118.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId122!click!showVida"] && $.__views.__alloyId122.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.ciertoFalsoBtn!click!showCiertoFalso"] && $.__views.ciertoFalsoBtn.addEventListener("click", showCiertoFalso);
    __defers["$.__views.playBtn!click!showAlerta"] && $.__views.playBtn.addEventListener("click", showAlerta);
    __defers["$.__views.buyBtn!click!showAlerta"] && $.__views.buyBtn.addEventListener("click", showAlerta);
    __defers["$.__views.coinsBtn!click!showAlerta"] && $.__views.coinsBtn.addEventListener("click", showAlerta);
    __defers["$.__views.dialog!click!doClick"] && $.__views.dialog.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;