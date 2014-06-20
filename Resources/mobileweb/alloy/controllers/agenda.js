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
    function showAlerta() {
        $.dialog.show();
    }
    function doClick(e) {
        Ti.API.info("e.text: " + e.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "agenda";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.agenda = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "agenda"
    });
    $.__views.agenda && $.addTopLevelView($.__views.agenda);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.agenda.add($.__views.menu);
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
    $.__views.__alloyId0 = Ti.UI.createView({
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
        id: "__alloyId0"
    });
    $.__views.options.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
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
        id: "__alloyId2"
    });
    $.__views.options.add($.__views.__alloyId2);
    showAgenda ? $.__views.__alloyId2.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId2!click!showAgenda"] = true;
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
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
        id: "__alloyId4"
    });
    $.__views.options.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
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
        id: "__alloyId6"
    });
    $.__views.options.add($.__views.__alloyId6);
    showVida ? $.__views.__alloyId6.addEventListener("click", showVida) : __defers["$.__views.__alloyId6!click!showVida"] = true;
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#D2D2D2",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.agenda.add($.__views.main);
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
                color: "#044D77",
                offset: 0
            }, {
                color: "#01466D",
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
        text: "Mi Agenda",
        id: "categoriaLbl"
    });
    $.__views.menuBar.add($.__views.categoriaLbl);
    var __alloyId8 = [];
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#fff",
        focusable: false,
        id: "listRow"
    });
    __alloyId8.push($.__views.listRow);
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Clase de Ecuaciones Diferenciales",
        id: "profileName"
    });
    $.__views.listRow.add($.__views.profileName);
    $.__views.date = Ti.UI.createLabel({
        top: "25",
        left: "5",
        color: "#33743C",
        font: {
            fontSize: "14"
        },
        text: "Hora: 7:00 - 9:00 am",
        id: "date"
    });
    $.__views.listRow.add($.__views.date);
    $.__views.agendarBtn = Ti.UI.createImageView({
        width: "30dp",
        heigth: "25",
        image: "/images/agendaBtn.png",
        right: 0,
        height: "30dp",
        id: "agendarBtn"
    });
    $.__views.listRow.add($.__views.agendarBtn);
    showAlerta ? $.__views.agendarBtn.addEventListener("click", showAlerta) : __defers["$.__views.agendarBtn!click!showAlerta"] = true;
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#fff",
        focusable: false,
        id: "listRow"
    });
    __alloyId8.push($.__views.listRow);
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Taller Animación 3D",
        id: "profileName"
    });
    $.__views.listRow.add($.__views.profileName);
    $.__views.date = Ti.UI.createLabel({
        top: "25",
        left: "5",
        color: "#33743C",
        font: {
            fontSize: "14"
        },
        text: "Hora: 2:00 - 4:00 pm",
        id: "date"
    });
    $.__views.listRow.add($.__views.date);
    $.__views.agendarBtn = Ti.UI.createImageView({
        width: "30dp",
        heigth: "25",
        image: "/images/agendaBtn.png",
        right: 0,
        height: "30dp",
        id: "agendarBtn"
    });
    $.__views.listRow.add($.__views.agendarBtn);
    showAlerta ? $.__views.agendarBtn.addEventListener("click", showAlerta) : __defers["$.__views.agendarBtn!click!showAlerta"] = true;
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#fff",
        focusable: false,
        id: "listRow"
    });
    __alloyId8.push($.__views.listRow);
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Conferencia Activa tu mente",
        id: "profileName"
    });
    $.__views.listRow.add($.__views.profileName);
    $.__views.date = Ti.UI.createLabel({
        top: "25",
        left: "5",
        color: "#33743C",
        font: {
            fontSize: "14"
        },
        text: "Hora: 5:00 - 6:00 pm",
        id: "date"
    });
    $.__views.listRow.add($.__views.date);
    $.__views.agendarBtn = Ti.UI.createImageView({
        width: "30dp",
        heigth: "25",
        image: "/images/agendaBtn.png",
        right: 0,
        height: "30dp",
        id: "agendarBtn"
    });
    $.__views.listRow.add($.__views.agendarBtn);
    showAlerta ? $.__views.agendarBtn.addEventListener("click", showAlerta) : __defers["$.__views.agendarBtn!click!showAlerta"] = true;
    $.__views.mainList = Ti.UI.createTableView({
        backgroundColor: "#D4D6DA",
        separatorStyle: "NONE",
        data: __alloyId8,
        id: "mainList"
    });
    $.__views.main.add($.__views.mainList);
    var __alloyId10 = [];
    __alloyId10.push("Aceptar");
    __alloyId10.push("Cancelar");
    $.__views.dialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId10,
        id: "dialog",
        title: "Agregar al calendario",
        message: "¿Quieres agregar este evento al calendario de tu movil?",
        cancel: "1"
    });
    doClick ? $.__views.dialog.addEventListener("click", doClick) : __defers["$.__views.dialog!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId2!click!showAgenda"] && $.__views.__alloyId2.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId6!click!showVida"] && $.__views.__alloyId6.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.agendarBtn!click!showAlerta"] && $.__views.agendarBtn.addEventListener("click", showAlerta);
    __defers["$.__views.agendarBtn!click!showAlerta"] && $.__views.agendarBtn.addEventListener("click", showAlerta);
    __defers["$.__views.agendarBtn!click!showAlerta"] && $.__views.agendarBtn.addEventListener("click", showAlerta);
    __defers["$.__views.dialog!click!doClick"] && $.__views.dialog.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;