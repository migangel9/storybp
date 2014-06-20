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
    function showVidaProducto() {
        var win = Alloy.createController("lmProducto").getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "loboMercado";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loboMercado = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "loboMercado"
    });
    $.__views.loboMercado && $.addTopLevelView($.__views.loboMercado);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.loboMercado.add($.__views.menu);
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
    $.__views.__alloyId287 = Ti.UI.createView({
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
        id: "__alloyId287"
    });
    $.__views.options.add($.__views.__alloyId287);
    $.__views.__alloyId288 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId288"
    });
    $.__views.__alloyId287.add($.__views.__alloyId288);
    $.__views.__alloyId289 = Ti.UI.createView({
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
        id: "__alloyId289"
    });
    $.__views.options.add($.__views.__alloyId289);
    showAgenda ? $.__views.__alloyId289.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId289!click!showAgenda"] = true;
    $.__views.__alloyId290 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId290"
    });
    $.__views.__alloyId289.add($.__views.__alloyId290);
    $.__views.__alloyId291 = Ti.UI.createView({
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
        id: "__alloyId291"
    });
    $.__views.options.add($.__views.__alloyId291);
    $.__views.__alloyId292 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId292"
    });
    $.__views.__alloyId291.add($.__views.__alloyId292);
    $.__views.__alloyId293 = Ti.UI.createView({
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
        id: "__alloyId293"
    });
    $.__views.options.add($.__views.__alloyId293);
    showNews ? $.__views.__alloyId293.addEventListener("click", showNews) : __defers["$.__views.__alloyId293!click!showNews"] = true;
    $.__views.__alloyId294 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId294"
    });
    $.__views.__alloyId293.add($.__views.__alloyId294);
    $.__views.__alloyId295 = Ti.UI.createView({
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
        id: "__alloyId295"
    });
    $.__views.options.add($.__views.__alloyId295);
    showVida ? $.__views.__alloyId295.addEventListener("click", showVida) : __defers["$.__views.__alloyId295!click!showVida"] = true;
    $.__views.__alloyId296 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId296"
    });
    $.__views.__alloyId295.add($.__views.__alloyId296);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#EEF0F2",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.loboMercado.add($.__views.main);
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
        backgroundColor: "#575757",
        width: Ti.UI.FILL,
        height: "30",
        id: "menuBar"
    });
    $.__views.main.add($.__views.menuBar);
    $.__views.__alloyId297 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "30",
        id: "__alloyId297"
    });
    $.__views.menuBar.add($.__views.__alloyId297);
    $.__views.tituloLbl = Ti.UI.createLabel({
        left: 5,
        color: "#fff",
        font: {
            fontSize: "18",
            fontWeight: "bold"
        },
        text: "Lobo Mercado",
        id: "tituloLbl"
    });
    $.__views.__alloyId297.add($.__views.tituloLbl);
    $.__views.pickerNoticias = Ti.UI.createPicker({
        right: 25,
        height: 30,
        id: "pickerNoticias",
        selectionIndicator: "true"
    });
    $.__views.__alloyId297.add($.__views.pickerNoticias);
    var __alloyId298 = [];
    $.__views.columnPickerNoticias = Ti.UI.createPickerColumn({
        backgroudImage: "/images/catBtn.png",
        backgroundColor: "#575757",
        id: "columnPickerNoticias"
    });
    __alloyId298.push($.__views.columnPickerNoticias);
    $.__views.__alloyId299 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Todos los Productos",
        id: "__alloyId299"
    });
    $.__views.columnPickerNoticias.addRow($.__views.__alloyId299);
    $.__views.__alloyId300 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Electronicos",
        id: "__alloyId300"
    });
    $.__views.columnPickerNoticias.addRow($.__views.__alloyId300);
    $.__views.__alloyId301 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Deportivos",
        id: "__alloyId301"
    });
    $.__views.columnPickerNoticias.addRow($.__views.__alloyId301);
    $.__views.__alloyId302 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Clases",
        id: "__alloyId302"
    });
    $.__views.columnPickerNoticias.addRow($.__views.__alloyId302);
    $.__views.pickerNoticias.add(__alloyId298);
    $.__views.filterBtn = Ti.UI.createImageView({
        width: "19",
        height: "19",
        right: 5,
        image: "/images/catBtn.png",
        id: "filterBtn"
    });
    $.__views.__alloyId297.add($.__views.filterBtn);
    $.__views.buttons = Ti.UI.createScrollView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "buttons",
        showVerticalScrollIndicator: "true",
        scrollType: "vertical"
    });
    $.__views.main.add($.__views.buttons);
    $.__views.__alloyId303 = Ti.UI.createView({
        width: "110",
        height: "105",
        top: "5",
        left: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId303"
    });
    $.__views.buttons.add($.__views.__alloyId303);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Platano"
    });
    $.__views.__alloyId303.add($.__views.nameProduct);
    $.__views.__alloyId304 = Ti.UI.createImageView({
        image: "/images/libro.jpg",
        id: "__alloyId304"
    });
    $.__views.__alloyId303.add($.__views.__alloyId304);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 100"
    });
    $.__views.__alloyId303.add($.__views.priceProduct);
    $.__views.__alloyId305 = Ti.UI.createView({
        width: "110",
        height: "105",
        top: "5",
        left: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId305"
    });
    $.__views.buttons.add($.__views.__alloyId305);
    showVidaProducto ? $.__views.__alloyId305.addEventListener("click", showVidaProducto) : __defers["$.__views.__alloyId305!click!showVidaProducto"] = true;
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Manzana Roja"
    });
    $.__views.__alloyId305.add($.__views.nameProduct);
    $.__views.__alloyId306 = Ti.UI.createImageView({
        image: "/images/playera.jpg",
        id: "__alloyId306"
    });
    $.__views.__alloyId305.add($.__views.__alloyId306);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId305.add($.__views.priceProduct);
    $.__views.__alloyId307 = Ti.UI.createView({
        width: "110",
        height: "105",
        top: "5",
        left: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId307"
    });
    $.__views.buttons.add($.__views.__alloyId307);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Naranja"
    });
    $.__views.__alloyId307.add($.__views.nameProduct);
    $.__views.__alloyId308 = Ti.UI.createImageView({
        image: "/images/motorola.jpg",
        id: "__alloyId308"
    });
    $.__views.__alloyId307.add($.__views.__alloyId308);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId307.add($.__views.priceProduct);
    $.__views.__alloyId309 = Ti.UI.createView({
        width: "165",
        height: "105",
        top: "5",
        left: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId309"
    });
    $.__views.buttons.add($.__views.__alloyId309);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Te Verde"
    });
    $.__views.__alloyId309.add($.__views.nameProduct);
    $.__views.__alloyId310 = Ti.UI.createImageView({
        image: "/images/iphone.jpg",
        id: "__alloyId310"
    });
    $.__views.__alloyId309.add($.__views.__alloyId310);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 400"
    });
    $.__views.__alloyId309.add($.__views.priceProduct);
    $.__views.__alloyId311 = Ti.UI.createView({
        width: "165",
        height: "105",
        top: "5",
        left: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId311"
    });
    $.__views.buttons.add($.__views.__alloyId311);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Platano"
    });
    $.__views.__alloyId311.add($.__views.nameProduct);
    $.__views.__alloyId312 = Ti.UI.createImageView({
        image: "/images/audifonos.jpg",
        id: "__alloyId312"
    });
    $.__views.__alloyId311.add($.__views.__alloyId312);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 100"
    });
    $.__views.__alloyId311.add($.__views.priceProduct);
    $.__views.__alloyId313 = Ti.UI.createView({
        width: "340",
        height: "105",
        top: "5",
        left: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId313"
    });
    $.__views.buttons.add($.__views.__alloyId313);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Pera"
    });
    $.__views.__alloyId313.add($.__views.nameProduct);
    $.__views.__alloyId314 = Ti.UI.createImageView({
        image: "/images/restirador.jpg",
        id: "__alloyId314"
    });
    $.__views.__alloyId313.add($.__views.__alloyId314);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 300"
    });
    $.__views.__alloyId313.add($.__views.priceProduct);
    $.__views.__alloyId315 = Ti.UI.createView({
        width: "110",
        height: "105",
        top: "5",
        left: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId315"
    });
    $.__views.buttons.add($.__views.__alloyId315);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Platano"
    });
    $.__views.__alloyId315.add($.__views.nameProduct);
    $.__views.__alloyId316 = Ti.UI.createImageView({
        image: "/images/libro.jpg",
        id: "__alloyId316"
    });
    $.__views.__alloyId315.add($.__views.__alloyId316);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 100"
    });
    $.__views.__alloyId315.add($.__views.priceProduct);
    $.__views.__alloyId317 = Ti.UI.createView({
        width: "110",
        height: "105",
        top: "5",
        left: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId317"
    });
    $.__views.buttons.add($.__views.__alloyId317);
    showVidaProducto ? $.__views.__alloyId317.addEventListener("click", showVidaProducto) : __defers["$.__views.__alloyId317!click!showVidaProducto"] = true;
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Manzana Roja"
    });
    $.__views.__alloyId317.add($.__views.nameProduct);
    $.__views.__alloyId318 = Ti.UI.createImageView({
        image: "/images/playera.jpg",
        id: "__alloyId318"
    });
    $.__views.__alloyId317.add($.__views.__alloyId318);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId317.add($.__views.priceProduct);
    $.__views.__alloyId319 = Ti.UI.createView({
        width: "110",
        height: "105",
        top: "5",
        left: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId319"
    });
    $.__views.buttons.add($.__views.__alloyId319);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Naranja"
    });
    $.__views.__alloyId319.add($.__views.nameProduct);
    $.__views.__alloyId320 = Ti.UI.createImageView({
        image: "/images/motorola.jpg",
        id: "__alloyId320"
    });
    $.__views.__alloyId319.add($.__views.__alloyId320);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId319.add($.__views.priceProduct);
    $.__views.__alloyId321 = Ti.UI.createView({
        width: "165",
        height: "105",
        top: "5",
        left: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId321"
    });
    $.__views.buttons.add($.__views.__alloyId321);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Te Verde"
    });
    $.__views.__alloyId321.add($.__views.nameProduct);
    $.__views.__alloyId322 = Ti.UI.createImageView({
        image: "/images/iphone.jpg",
        id: "__alloyId322"
    });
    $.__views.__alloyId321.add($.__views.__alloyId322);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 400"
    });
    $.__views.__alloyId321.add($.__views.priceProduct);
    $.__views.__alloyId323 = Ti.UI.createView({
        width: "165",
        height: "105",
        top: "5",
        left: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId323"
    });
    $.__views.buttons.add($.__views.__alloyId323);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Platano"
    });
    $.__views.__alloyId323.add($.__views.nameProduct);
    $.__views.__alloyId324 = Ti.UI.createImageView({
        image: "/images/audifonos.jpg",
        id: "__alloyId324"
    });
    $.__views.__alloyId323.add($.__views.__alloyId324);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 100"
    });
    $.__views.__alloyId323.add($.__views.priceProduct);
    $.__views.__alloyId325 = Ti.UI.createView({
        width: "340",
        height: "105",
        top: "5",
        left: "5",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId325"
    });
    $.__views.buttons.add($.__views.__alloyId325);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Pera"
    });
    $.__views.__alloyId325.add($.__views.nameProduct);
    $.__views.__alloyId326 = Ti.UI.createImageView({
        image: "/images/restirador.jpg",
        id: "__alloyId326"
    });
    $.__views.__alloyId325.add($.__views.__alloyId326);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 300"
    });
    $.__views.__alloyId325.add($.__views.priceProduct);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId289!click!showAgenda"] && $.__views.__alloyId289.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId293!click!showNews"] && $.__views.__alloyId293.addEventListener("click", showNews);
    __defers["$.__views.__alloyId295!click!showVida"] && $.__views.__alloyId295.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.__alloyId305!click!showVidaProducto"] && $.__views.__alloyId305.addEventListener("click", showVidaProducto);
    __defers["$.__views.__alloyId317!click!showVidaProducto"] && $.__views.__alloyId317.addEventListener("click", showVidaProducto);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;