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
        var win = Alloy.createController("tabComida").getView();
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
    $.__views.__alloyId29 = Ti.UI.createView({
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
        id: "__alloyId29"
    });
    $.__views.options.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
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
        id: "__alloyId31"
    });
    $.__views.options.add($.__views.__alloyId31);
    showAgenda ? $.__views.__alloyId31.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId31!click!showAgenda"] = true;
    $.__views.__alloyId32 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
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
        id: "__alloyId33"
    });
    $.__views.options.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
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
        id: "__alloyId35"
    });
    $.__views.options.add($.__views.__alloyId35);
    showNews ? $.__views.__alloyId35.addEventListener("click", showNews) : __defers["$.__views.__alloyId35!click!showNews"] = true;
    $.__views.__alloyId36 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createView({
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
        id: "__alloyId37"
    });
    $.__views.options.add($.__views.__alloyId37);
    showVida ? $.__views.__alloyId37.addEventListener("click", showVida) : __defers["$.__views.__alloyId37!click!showVida"] = true;
    $.__views.__alloyId38 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
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
    $.__views.__alloyId39 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId39"
    });
    $.__views.menuBar.add($.__views.__alloyId39);
    showComida ? $.__views.__alloyId39.addEventListener("click", showComida) : __defers["$.__views.__alloyId39!click!showComida"] = true;
    $.__views.comidaBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/comidaBtn.png",
        id: "comidaBtn"
    });
    $.__views.__alloyId39.add($.__views.comidaBtn);
    $.__views.tabActive = Ti.UI.createView({
        bottom: 0,
        height: "3",
        width: Ti.UI.FILL,
        backgroundColor: "#d07436",
        layout: "horizontal",
        id: "tabActive"
    });
    $.__views.__alloyId39.add($.__views.tabActive);
    $.__views.__alloyId40 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId40"
    });
    $.__views.menuBar.add($.__views.__alloyId40);
    showGrafica ? $.__views.__alloyId40.addEventListener("click", showGrafica) : __defers["$.__views.__alloyId40!click!showGrafica"] = true;
    $.__views.graficasBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/graficasBtn.png",
        id: "graficasBtn"
    });
    $.__views.__alloyId40.add($.__views.graficasBtn);
    $.__views.__alloyId41 = Ti.UI.createView({
        width: "33%",
        heigth: "45",
        id: "__alloyId41"
    });
    $.__views.menuBar.add($.__views.__alloyId41);
    showMonigote ? $.__views.__alloyId41.addEventListener("click", showMonigote) : __defers["$.__views.__alloyId41!click!showMonigote"] = true;
    $.__views.monigoteBtn = Ti.UI.createImageView({
        width: "25",
        height: "25",
        image: "/images/monigoteBtn.png",
        id: "monigoteBtn"
    });
    $.__views.__alloyId41.add($.__views.monigoteBtn);
    var __alloyId42 = [];
    $.__views.v1 = Ti.UI.createView({
        layout: "horizontal",
        id: "v1"
    });
    __alloyId42.push($.__views.v1);
    $.__views.__alloyId43 = Ti.UI.createView({
        width: "33%",
        height: "70dp",
        id: "__alloyId43"
    });
    $.__views.v1.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createImageView({
        top: 10,
        width: "70dp",
        height: "70dp",
        image: "/images/meatBtn.png",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createView({
        width: "33%",
        height: "70dp",
        id: "__alloyId45"
    });
    $.__views.v1.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createImageView({
        top: 10,
        width: "70dp",
        height: "70dp",
        image: "/images/eggBtn.png",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createView({
        width: "33%",
        height: "70dp",
        id: "__alloyId47"
    });
    $.__views.v1.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createImageView({
        top: 10,
        width: "70dp",
        height: "70dp",
        image: "/images/bananaBtn.png",
        id: "__alloyId48"
    });
    $.__views.__alloyId47.add($.__views.__alloyId48);
    $.__views.v2 = Ti.UI.createView({
        layout: "horizontal",
        id: "v2"
    });
    __alloyId42.push($.__views.v2);
    $.__views.__alloyId49 = Ti.UI.createView({
        width: "33%",
        height: "70dp",
        id: "__alloyId49"
    });
    $.__views.v2.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createImageView({
        top: 10,
        width: "70dp",
        height: "70dp",
        image: "/images/appleBtn.png",
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createView({
        width: "33%",
        height: "70dp",
        id: "__alloyId51"
    });
    $.__views.v2.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createImageView({
        top: 10,
        width: "70dp",
        height: "70dp",
        image: "/images/friesBtn.png",
        id: "__alloyId52"
    });
    $.__views.__alloyId51.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        width: "33%",
        height: "70dp",
        id: "__alloyId53"
    });
    $.__views.v2.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createImageView({
        top: 10,
        width: "70dp",
        height: "70dp",
        image: "/images/burguerBtn.png",
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.v3 = Ti.UI.createView({
        layout: "horizontal",
        id: "v3"
    });
    __alloyId42.push($.__views.v3);
    $.__views.__alloyId55 = Ti.UI.createView({
        width: "33%",
        height: "70dp",
        id: "__alloyId55"
    });
    $.__views.v3.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createImageView({
        top: 10,
        width: "70dp",
        height: "70dp",
        image: "/images/pizzaBtn.png",
        id: "__alloyId56"
    });
    $.__views.__alloyId55.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        width: "33%",
        height: "70dp",
        id: "__alloyId57"
    });
    $.__views.v3.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createImageView({
        top: 10,
        width: "70dp",
        height: "70dp",
        image: "/images/tomatoBtn.png",
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createView({
        width: "33%",
        height: "70dp",
        id: "__alloyId59"
    });
    $.__views.v3.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createImageView({
        top: 10,
        width: "70dp",
        height: "70dp",
        image: "/images/chickenBtn.png",
        id: "__alloyId60"
    });
    $.__views.__alloyId59.add($.__views.__alloyId60);
    $.__views.scrollView = Ti.UI.createScrollableView({
        width: Ti.UI.FILL,
        height: 85,
        backgroundColor: "#E3E3E3",
        views: __alloyId42,
        id: "scrollView",
        showPagingControl: "true"
    });
    $.__views.main.add($.__views.scrollView);
    $.__views.saludometro = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "saludometro",
        showVerticalScrollIndicator: "true",
        scrollType: "vertical"
    });
    $.__views.main.add($.__views.saludometro);
    $.__views.platillo = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 150,
        backgroundColor: "#fff",
        id: "platillo"
    });
    $.__views.saludometro.add($.__views.platillo);
    $.__views.__alloyId61 = Ti.UI.createImageView({
        image: "/images/plato.png",
        id: "__alloyId61"
    });
    $.__views.platillo.add($.__views.__alloyId61);
    $.__views.saludLbl = Ti.UI.createLabel({
        left: 10,
        text: "Saludometro",
        id: "saludLbl"
    });
    $.__views.saludometro.add($.__views.saludLbl);
    $.__views.saludPuntajeLbl = Ti.UI.createLabel({
        right: 10,
        text: "+ 14 pts",
        id: "saludPuntajeLbl"
    });
    $.__views.saludometro.add($.__views.saludPuntajeLbl);
    $.__views.__alloyId62 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId62"
    });
    $.__views.saludometro.add($.__views.__alloyId62);
    $.__views.pb = Ti.UI.createProgressBar({
        id: "pb",
        min: "0",
        width: "80%",
        max: "100",
        value: "30",
        color: "#000",
        message: "Granos"
    });
    $.__views.__alloyId62.add($.__views.pb);
    $.__views.__alloyId63 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId63"
    });
    $.__views.saludometro.add($.__views.__alloyId63);
    $.__views.pb2 = Ti.UI.createProgressBar({
        id: "pb2",
        min: "0",
        width: "80%",
        max: "100",
        value: "50",
        color: "#000",
        message: "Verduras"
    });
    $.__views.__alloyId63.add($.__views.pb2);
    $.__views.__alloyId64 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId64"
    });
    $.__views.saludometro.add($.__views.__alloyId64);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "85",
        message: "Frutas"
    });
    $.__views.__alloyId64.add($.__views.pb3);
    $.__views.__alloyId65 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId65"
    });
    $.__views.saludometro.add($.__views.__alloyId65);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "65",
        message: "Lacteos"
    });
    $.__views.__alloyId65.add($.__views.pb3);
    $.__views.__alloyId66 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId66"
    });
    $.__views.saludometro.add($.__views.__alloyId66);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "45",
        message: "Grasas"
    });
    $.__views.__alloyId66.add($.__views.pb3);
    $.__views.__alloyId67 = Ti.UI.createView({
        height: "35dp",
        width: Ti.UI.SIZE,
        id: "__alloyId67"
    });
    $.__views.saludometro.add($.__views.__alloyId67);
    $.__views.pb3 = Ti.UI.createProgressBar({
        id: "pb3",
        min: "0",
        width: "80%",
        max: "100",
        value: "15",
        message: "Carne"
    });
    $.__views.__alloyId67.add($.__views.pb3);
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
    __defers["$.__views.__alloyId31!click!showAgenda"] && $.__views.__alloyId31.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId35!click!showNews"] && $.__views.__alloyId35.addEventListener("click", showNews);
    __defers["$.__views.__alloyId37!click!showVida"] && $.__views.__alloyId37.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.__alloyId39!click!showComida"] && $.__views.__alloyId39.addEventListener("click", showComida);
    __defers["$.__views.__alloyId40!click!showGrafica"] && $.__views.__alloyId40.addEventListener("click", showGrafica);
    __defers["$.__views.__alloyId41!click!showMonigote"] && $.__views.__alloyId41.addEventListener("click", showMonigote);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;