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
    function showNews() {
        var win = Alloy.createController("index").getView();
        win.open();
    }
    function showCategoria() {
        var win = Alloy.createController("vidaBlog").getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "vidaBlogSecciones";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.vidaBlogSecciones = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "vidaBlogSecciones"
    });
    $.__views.vidaBlogSecciones && $.addTopLevelView($.__views.vidaBlogSecciones);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.vidaBlogSecciones.add($.__views.menu);
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
    $.__views.__alloyId467 = Ti.UI.createView({
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
        id: "__alloyId467"
    });
    $.__views.options.add($.__views.__alloyId467);
    $.__views.__alloyId468 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId468"
    });
    $.__views.__alloyId467.add($.__views.__alloyId468);
    $.__views.__alloyId469 = Ti.UI.createView({
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
        id: "__alloyId469"
    });
    $.__views.options.add($.__views.__alloyId469);
    showAgenda ? $.__views.__alloyId469.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId469!click!showAgenda"] = true;
    $.__views.__alloyId470 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId470"
    });
    $.__views.__alloyId469.add($.__views.__alloyId470);
    $.__views.__alloyId471 = Ti.UI.createView({
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
        id: "__alloyId471"
    });
    $.__views.options.add($.__views.__alloyId471);
    $.__views.__alloyId472 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId472"
    });
    $.__views.__alloyId471.add($.__views.__alloyId472);
    $.__views.__alloyId473 = Ti.UI.createView({
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
        id: "__alloyId473"
    });
    $.__views.options.add($.__views.__alloyId473);
    showNews ? $.__views.__alloyId473.addEventListener("click", showNews) : __defers["$.__views.__alloyId473!click!showNews"] = true;
    $.__views.__alloyId474 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId474"
    });
    $.__views.__alloyId473.add($.__views.__alloyId474);
    $.__views.__alloyId475 = Ti.UI.createView({
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
        id: "__alloyId475"
    });
    $.__views.options.add($.__views.__alloyId475);
    showVida ? $.__views.__alloyId475.addEventListener("click", showVida) : __defers["$.__views.__alloyId475!click!showVida"] = true;
    $.__views.__alloyId476 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId476"
    });
    $.__views.__alloyId475.add($.__views.__alloyId476);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.vidaBlogSecciones.add($.__views.main);
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
        backgroundColor: "#575757",
        width: Ti.UI.FILL,
        height: "30",
        id: "menuBar"
    });
    $.__views.main.add($.__views.menuBar);
    $.__views.seccionLbl = Ti.UI.createLabel({
        left: 5,
        color: "#fff",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        text: "VIDA BLOG",
        id: "seccionLbl"
    });
    $.__views.menuBar.add($.__views.seccionLbl);
    $.__views.buttons = Ti.UI.createScrollView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "buttons",
        showVerticalScrollIndicator: "true",
        scrollType: "vertical"
    });
    $.__views.main.add($.__views.buttons);
    $.__views.__alloyId477 = Ti.UI.createView({
        width: "40%",
        height: Ti.UI.SIZE,
        top: 25,
        left: 15,
        layout: "vertical",
        id: "__alloyId477"
    });
    $.__views.buttons.add($.__views.__alloyId477);
    $.__views.allBtn = Ti.UI.createImageView({
        width: "120",
        height: "105",
        image: "/images/allBtn.png",
        id: "allBtn"
    });
    $.__views.__alloyId477.add($.__views.allBtn);
    showCategoria ? $.__views.allBtn.addEventListener("click", showCategoria) : __defers["$.__views.allBtn!click!showCategoria"] = true;
    $.__views.__alloyId478 = Ti.UI.createLabel({
        text: "Todas",
        id: "__alloyId478"
    });
    $.__views.__alloyId477.add($.__views.__alloyId478);
    $.__views.__alloyId479 = Ti.UI.createView({
        width: "40%",
        height: Ti.UI.SIZE,
        top: 25,
        left: 15,
        layout: "vertical",
        id: "__alloyId479"
    });
    $.__views.buttons.add($.__views.__alloyId479);
    $.__views.nutricionBtn = Ti.UI.createImageView({
        width: "120",
        height: "105",
        image: "/images/bienBtn.jpg",
        id: "nutricionBtn"
    });
    $.__views.__alloyId479.add($.__views.nutricionBtn);
    showCategoria ? $.__views.nutricionBtn.addEventListener("click", showCategoria) : __defers["$.__views.nutricionBtn!click!showCategoria"] = true;
    $.__views.__alloyId480 = Ti.UI.createLabel({
        text: "Nutrición",
        id: "__alloyId480"
    });
    $.__views.__alloyId479.add($.__views.__alloyId480);
    $.__views.__alloyId481 = Ti.UI.createView({
        width: "40%",
        height: Ti.UI.SIZE,
        top: 25,
        left: 15,
        layout: "vertical",
        id: "__alloyId481"
    });
    $.__views.buttons.add($.__views.__alloyId481);
    $.__views.deporteBtn = Ti.UI.createImageView({
        width: "120",
        height: "105",
        image: "/images/deporteBtn.png",
        id: "deporteBtn"
    });
    $.__views.__alloyId481.add($.__views.deporteBtn);
    showCategoria ? $.__views.deporteBtn.addEventListener("click", showCategoria) : __defers["$.__views.deporteBtn!click!showCategoria"] = true;
    $.__views.__alloyId482 = Ti.UI.createLabel({
        text: "Deporte",
        id: "__alloyId482"
    });
    $.__views.__alloyId481.add($.__views.__alloyId482);
    $.__views.__alloyId483 = Ti.UI.createView({
        width: "40%",
        height: Ti.UI.SIZE,
        top: 25,
        left: 15,
        layout: "vertical",
        id: "__alloyId483"
    });
    $.__views.buttons.add($.__views.__alloyId483);
    $.__views.bienBtn = Ti.UI.createImageView({
        width: "120",
        height: "105",
        image: "/images/fisicoBtn.jpg",
        id: "bienBtn"
    });
    $.__views.__alloyId483.add($.__views.bienBtn);
    showCategoria ? $.__views.bienBtn.addEventListener("click", showCategoria) : __defers["$.__views.bienBtn!click!showCategoria"] = true;
    $.__views.__alloyId484 = Ti.UI.createLabel({
        text: "Bienestar Fisico",
        id: "__alloyId484"
    });
    $.__views.__alloyId483.add($.__views.__alloyId484);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId469!click!showAgenda"] && $.__views.__alloyId469.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId473!click!showNews"] && $.__views.__alloyId473.addEventListener("click", showNews);
    __defers["$.__views.__alloyId475!click!showVida"] && $.__views.__alloyId475.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.allBtn!click!showCategoria"] && $.__views.allBtn.addEventListener("click", showCategoria);
    __defers["$.__views.nutricionBtn!click!showCategoria"] && $.__views.nutricionBtn.addEventListener("click", showCategoria);
    __defers["$.__views.deporteBtn!click!showCategoria"] && $.__views.deporteBtn.addEventListener("click", showCategoria);
    __defers["$.__views.bienBtn!click!showCategoria"] && $.__views.bienBtn.addEventListener("click", showCategoria);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;