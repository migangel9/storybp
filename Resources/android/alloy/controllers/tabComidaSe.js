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
    function showComidas() {
        var win = Alloy.createController("tabComida").getView();
        win.open();
    }
    function doClick(e) {
        Ti.API.info("e.text: " + e.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tabComidaSe";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.tabComidaSe = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "tabComidaSe"
    });
    $.__views.tabComidaSe && $.addTopLevelView($.__views.tabComidaSe);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.tabComidaSe.add($.__views.menu);
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
    $.__views.__alloyId399 = Ti.UI.createView({
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
        id: "__alloyId399"
    });
    $.__views.options.add($.__views.__alloyId399);
    $.__views.__alloyId400 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId400"
    });
    $.__views.__alloyId399.add($.__views.__alloyId400);
    $.__views.__alloyId401 = Ti.UI.createView({
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
        id: "__alloyId401"
    });
    $.__views.options.add($.__views.__alloyId401);
    showAgenda ? $.__views.__alloyId401.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId401!click!showAgenda"] = true;
    $.__views.__alloyId402 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId402"
    });
    $.__views.__alloyId401.add($.__views.__alloyId402);
    $.__views.__alloyId403 = Ti.UI.createView({
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
        id: "__alloyId403"
    });
    $.__views.options.add($.__views.__alloyId403);
    $.__views.__alloyId404 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId404"
    });
    $.__views.__alloyId403.add($.__views.__alloyId404);
    $.__views.__alloyId405 = Ti.UI.createView({
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
        id: "__alloyId405"
    });
    $.__views.options.add($.__views.__alloyId405);
    showNews ? $.__views.__alloyId405.addEventListener("click", showNews) : __defers["$.__views.__alloyId405!click!showNews"] = true;
    $.__views.__alloyId406 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId406"
    });
    $.__views.__alloyId405.add($.__views.__alloyId406);
    $.__views.__alloyId407 = Ti.UI.createView({
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
        id: "__alloyId407"
    });
    $.__views.options.add($.__views.__alloyId407);
    showVida ? $.__views.__alloyId407.addEventListener("click", showVida) : __defers["$.__views.__alloyId407!click!showVida"] = true;
    $.__views.__alloyId408 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId408"
    });
    $.__views.__alloyId407.add($.__views.__alloyId408);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#D2D2D2",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.tabComidaSe.add($.__views.main);
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
    $.__views.__alloyId409 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId409"
    });
    $.__views.menuBar.add($.__views.__alloyId409);
    showComida ? $.__views.__alloyId409.addEventListener("click", showComida) : __defers["$.__views.__alloyId409!click!showComida"] = true;
    $.__views.comidaBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/comidaBtn.png",
        id: "comidaBtn"
    });
    $.__views.__alloyId409.add($.__views.comidaBtn);
    $.__views.tabActive = Ti.UI.createView({
        bottom: 0,
        height: "3",
        width: Ti.UI.FILL,
        backgroundColor: "#d07436",
        layout: "horizontal",
        id: "tabActive"
    });
    $.__views.__alloyId409.add($.__views.tabActive);
    $.__views.__alloyId410 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId410"
    });
    $.__views.menuBar.add($.__views.__alloyId410);
    showGrafica ? $.__views.__alloyId410.addEventListener("click", showGrafica) : __defers["$.__views.__alloyId410!click!showGrafica"] = true;
    $.__views.graficasBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/graficasBtn.png",
        id: "graficasBtn"
    });
    $.__views.__alloyId410.add($.__views.graficasBtn);
    $.__views.__alloyId411 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId411"
    });
    $.__views.menuBar.add($.__views.__alloyId411);
    showMonigote ? $.__views.__alloyId411.addEventListener("click", showMonigote) : __defers["$.__views.__alloyId411!click!showMonigote"] = true;
    $.__views.monigoteBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/monigoteBtn.png",
        id: "monigoteBtn"
    });
    $.__views.__alloyId411.add($.__views.monigoteBtn);
    var __alloyId412 = [];
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#fff",
        focusable: false,
        id: "listRow"
    });
    __alloyId412.push($.__views.listRow);
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Desayuno",
        id: "profileName"
    });
    $.__views.listRow.add($.__views.profileName);
    $.__views.tickBtn = Ti.UI.createImageView({
        width: "30dp",
        heigth: "25",
        right: 0,
        height: "30dp",
        id: "tickBtn",
        image: "/images/tick_64.png"
    });
    $.__views.listRow.add($.__views.tickBtn);
    showComidas ? $.__views.tickBtn.addEventListener("click", showComidas) : __defers["$.__views.tickBtn!click!showComidas"] = true;
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#fff",
        focusable: false,
        id: "listRow"
    });
    __alloyId412.push($.__views.listRow);
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Almuerzo",
        id: "profileName"
    });
    $.__views.listRow.add($.__views.profileName);
    $.__views.tickBtn = Ti.UI.createImageView({
        width: "30dp",
        heigth: "25",
        right: 0,
        height: "30dp",
        id: "tickBtn",
        image: "/images/tick_64.png"
    });
    $.__views.listRow.add($.__views.tickBtn);
    showComidas ? $.__views.tickBtn.addEventListener("click", showComidas) : __defers["$.__views.tickBtn!click!showComidas"] = true;
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#fff",
        focusable: false,
        id: "listRow"
    });
    __alloyId412.push($.__views.listRow);
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Comida",
        id: "profileName"
    });
    $.__views.listRow.add($.__views.profileName);
    $.__views.tickBtn = Ti.UI.createImageView({
        width: "30dp",
        heigth: "25",
        right: 0,
        height: "30dp",
        id: "tickBtn",
        image: "/images/tick_64.png"
    });
    $.__views.listRow.add($.__views.tickBtn);
    showComidas ? $.__views.tickBtn.addEventListener("click", showComidas) : __defers["$.__views.tickBtn!click!showComidas"] = true;
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#fff",
        focusable: false,
        id: "listRow"
    });
    __alloyId412.push($.__views.listRow);
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Merienda",
        id: "profileName"
    });
    $.__views.listRow.add($.__views.profileName);
    $.__views.tickBtn = Ti.UI.createImageView({
        width: "30dp",
        heigth: "25",
        right: 0,
        height: "30dp",
        id: "tickBtn",
        image: "/images/tick_gray_64.png"
    });
    $.__views.listRow.add($.__views.tickBtn);
    showComidas ? $.__views.tickBtn.addEventListener("click", showComidas) : __defers["$.__views.tickBtn!click!showComidas"] = true;
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "50dp",
        backgroundColor: "#fff",
        focusable: false,
        id: "listRow"
    });
    __alloyId412.push($.__views.listRow);
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Cena",
        id: "profileName"
    });
    $.__views.listRow.add($.__views.profileName);
    $.__views.tickBtn = Ti.UI.createImageView({
        width: "30dp",
        heigth: "25",
        right: 0,
        height: "30dp",
        id: "tickBtn",
        image: "/images/tick_gray_64.png"
    });
    $.__views.listRow.add($.__views.tickBtn);
    showComidas ? $.__views.tickBtn.addEventListener("click", showComidas) : __defers["$.__views.tickBtn!click!showComidas"] = true;
    $.__views.mainList = Ti.UI.createTableView({
        backgroundColor: "#D4D6DA",
        separatorStyle: "NONE",
        data: __alloyId412,
        id: "mainList"
    });
    $.__views.main.add($.__views.mainList);
    var __alloyId414 = [];
    __alloyId414.push("Aceptar");
    __alloyId414.push("Cancelar");
    $.__views.dialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId414,
        id: "dialog",
        title: "Agregar al calendario",
        message: "¿Quieres agregar este evento al calendario de tu movil?",
        cancel: "1"
    });
    doClick ? $.__views.dialog.addEventListener("click", doClick) : __defers["$.__views.dialog!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId401!click!showAgenda"] && $.__views.__alloyId401.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId405!click!showNews"] && $.__views.__alloyId405.addEventListener("click", showNews);
    __defers["$.__views.__alloyId407!click!showVida"] && $.__views.__alloyId407.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.__alloyId409!click!showComida"] && $.__views.__alloyId409.addEventListener("click", showComida);
    __defers["$.__views.__alloyId410!click!showGrafica"] && $.__views.__alloyId410.addEventListener("click", showGrafica);
    __defers["$.__views.__alloyId411!click!showMonigote"] && $.__views.__alloyId411.addEventListener("click", showMonigote);
    __defers["$.__views.tickBtn!click!showComidas"] && $.__views.tickBtn.addEventListener("click", showComidas);
    __defers["$.__views.tickBtn!click!showComidas"] && $.__views.tickBtn.addEventListener("click", showComidas);
    __defers["$.__views.tickBtn!click!showComidas"] && $.__views.tickBtn.addEventListener("click", showComidas);
    __defers["$.__views.tickBtn!click!showComidas"] && $.__views.tickBtn.addEventListener("click", showComidas);
    __defers["$.__views.tickBtn!click!showComidas"] && $.__views.tickBtn.addEventListener("click", showComidas);
    __defers["$.__views.dialog!click!doClick"] && $.__views.dialog.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;