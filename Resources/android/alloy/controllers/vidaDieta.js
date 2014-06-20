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
    this.__controllerPath = "vidaDieta";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.vidaDieta = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "vidaDieta"
    });
    $.__views.vidaDieta && $.addTopLevelView($.__views.vidaDieta);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.vidaDieta.add($.__views.menu);
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
    $.__views.__alloyId485 = Ti.UI.createView({
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
        id: "__alloyId485"
    });
    $.__views.options.add($.__views.__alloyId485);
    $.__views.__alloyId486 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId486"
    });
    $.__views.__alloyId485.add($.__views.__alloyId486);
    $.__views.__alloyId487 = Ti.UI.createView({
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
        id: "__alloyId487"
    });
    $.__views.options.add($.__views.__alloyId487);
    showAgenda ? $.__views.__alloyId487.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId487!click!showAgenda"] = true;
    $.__views.__alloyId488 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId488"
    });
    $.__views.__alloyId487.add($.__views.__alloyId488);
    $.__views.__alloyId489 = Ti.UI.createView({
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
        id: "__alloyId489"
    });
    $.__views.options.add($.__views.__alloyId489);
    $.__views.__alloyId490 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId490"
    });
    $.__views.__alloyId489.add($.__views.__alloyId490);
    $.__views.__alloyId491 = Ti.UI.createView({
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
        id: "__alloyId491"
    });
    $.__views.options.add($.__views.__alloyId491);
    showNews ? $.__views.__alloyId491.addEventListener("click", showNews) : __defers["$.__views.__alloyId491!click!showNews"] = true;
    $.__views.__alloyId492 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId492"
    });
    $.__views.__alloyId491.add($.__views.__alloyId492);
    $.__views.__alloyId493 = Ti.UI.createView({
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
        id: "__alloyId493"
    });
    $.__views.options.add($.__views.__alloyId493);
    showVida ? $.__views.__alloyId493.addEventListener("click", showVida) : __defers["$.__views.__alloyId493!click!showVida"] = true;
    $.__views.__alloyId494 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId494"
    });
    $.__views.__alloyId493.add($.__views.__alloyId494);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#D2D2D2",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.vidaDieta.add($.__views.main);
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
    $.__views.__alloyId495 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId495"
    });
    $.__views.menuBar.add($.__views.__alloyId495);
    showComida ? $.__views.__alloyId495.addEventListener("click", showComida) : __defers["$.__views.__alloyId495!click!showComida"] = true;
    $.__views.comidaBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/comidaBtn.png",
        id: "comidaBtn"
    });
    $.__views.__alloyId495.add($.__views.comidaBtn);
    $.__views.__alloyId496 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId496"
    });
    $.__views.menuBar.add($.__views.__alloyId496);
    showGrafica ? $.__views.__alloyId496.addEventListener("click", showGrafica) : __defers["$.__views.__alloyId496!click!showGrafica"] = true;
    $.__views.graficasBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/graficasBtn.png",
        id: "graficasBtn"
    });
    $.__views.__alloyId496.add($.__views.graficasBtn);
    $.__views.__alloyId497 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId497"
    });
    $.__views.menuBar.add($.__views.__alloyId497);
    showMonigote ? $.__views.__alloyId497.addEventListener("click", showMonigote) : __defers["$.__views.__alloyId497!click!showMonigote"] = true;
    $.__views.monigoteBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/monigoteBtn.png",
        id: "monigoteBtn"
    });
    $.__views.__alloyId497.add($.__views.monigoteBtn);
    $.__views.tabActive = Ti.UI.createView({
        bottom: 0,
        height: "3",
        width: Ti.UI.FILL,
        backgroundColor: "#d07436",
        layout: "horizontal",
        id: "tabActive"
    });
    $.__views.__alloyId497.add($.__views.tabActive);
    $.__views.principal = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "#fff",
        id: "principal"
    });
    $.__views.main.add($.__views.principal);
    $.__views.monigote = Ti.UI.createImageView({
        image: "/images/monigote.png",
        id: "monigote"
    });
    $.__views.principal.add($.__views.monigote);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId487!click!showAgenda"] && $.__views.__alloyId487.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId491!click!showNews"] && $.__views.__alloyId491.addEventListener("click", showNews);
    __defers["$.__views.__alloyId493!click!showVida"] && $.__views.__alloyId493.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.__alloyId495!click!showComida"] && $.__views.__alloyId495.addEventListener("click", showComida);
    __defers["$.__views.__alloyId496!click!showGrafica"] && $.__views.__alloyId496.addEventListener("click", showGrafica);
    __defers["$.__views.__alloyId497!click!showMonigote"] && $.__views.__alloyId497.addEventListener("click", showMonigote);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;