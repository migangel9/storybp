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
        var win = Alloy.createController("vidaTiendaProducto").getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "vidaTienda";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.vidaTienda = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "vidaTienda"
    });
    $.__views.vidaTienda && $.addTopLevelView($.__views.vidaTienda);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.vidaTienda.add($.__views.menu);
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
    $.__views.__alloyId511 = Ti.UI.createView({
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
        id: "__alloyId511"
    });
    $.__views.options.add($.__views.__alloyId511);
    $.__views.__alloyId512 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId512"
    });
    $.__views.__alloyId511.add($.__views.__alloyId512);
    $.__views.__alloyId513 = Ti.UI.createView({
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
        id: "__alloyId513"
    });
    $.__views.options.add($.__views.__alloyId513);
    showAgenda ? $.__views.__alloyId513.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId513!click!showAgenda"] = true;
    $.__views.__alloyId514 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId514"
    });
    $.__views.__alloyId513.add($.__views.__alloyId514);
    $.__views.__alloyId515 = Ti.UI.createView({
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
        id: "__alloyId515"
    });
    $.__views.options.add($.__views.__alloyId515);
    $.__views.__alloyId516 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId516"
    });
    $.__views.__alloyId515.add($.__views.__alloyId516);
    $.__views.__alloyId517 = Ti.UI.createView({
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
        id: "__alloyId517"
    });
    $.__views.options.add($.__views.__alloyId517);
    showNews ? $.__views.__alloyId517.addEventListener("click", showNews) : __defers["$.__views.__alloyId517!click!showNews"] = true;
    $.__views.__alloyId518 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId518"
    });
    $.__views.__alloyId517.add($.__views.__alloyId518);
    $.__views.__alloyId519 = Ti.UI.createView({
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
        id: "__alloyId519"
    });
    $.__views.options.add($.__views.__alloyId519);
    showVida ? $.__views.__alloyId519.addEventListener("click", showVida) : __defers["$.__views.__alloyId519!click!showVida"] = true;
    $.__views.__alloyId520 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId520"
    });
    $.__views.__alloyId519.add($.__views.__alloyId520);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#EEF0F2",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.vidaTienda.add($.__views.main);
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
        backgroundColor: "#41AAFF",
        borderRadius: 5,
        borderWidht: 1,
        left: "5",
        right: "5",
        top: "5",
        width: Ti.UI.FILL,
        height: "45",
        id: "menuBar"
    });
    $.__views.main.add($.__views.menuBar);
    $.__views.cashN = Ti.UI.createLabel({
        right: 55,
        color: "#fff",
        font: {
            fontSize: "28",
            fontWeight: "bold"
        },
        id: "cashN",
        text: " $ 0000002930"
    });
    $.__views.menuBar.add($.__views.cashN);
    $.__views.cashBtn = Ti.UI.createImageView({
        right: 8,
        width: 45,
        height: 45,
        image: "/images/cashBtn.png",
        id: "cashBtn"
    });
    $.__views.menuBar.add($.__views.cashBtn);
    $.__views.buttons = Ti.UI.createScrollView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "buttons",
        showVerticalScrollIndicator: "true",
        scrollType: "vertical"
    });
    $.__views.main.add($.__views.buttons);
    $.__views.__alloyId521 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId521"
    });
    $.__views.buttons.add($.__views.__alloyId521);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Platano"
    });
    $.__views.__alloyId521.add($.__views.nameProduct);
    $.__views.__alloyId522 = Ti.UI.createImageView({
        image: "/images/bananaBtn.png",
        id: "__alloyId522"
    });
    $.__views.__alloyId521.add($.__views.__alloyId522);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 100"
    });
    $.__views.__alloyId521.add($.__views.priceProduct);
    $.__views.__alloyId523 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId523"
    });
    $.__views.buttons.add($.__views.__alloyId523);
    showVidaProducto ? $.__views.__alloyId523.addEventListener("click", showVidaProducto) : __defers["$.__views.__alloyId523!click!showVidaProducto"] = true;
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Manzana Roja"
    });
    $.__views.__alloyId523.add($.__views.nameProduct);
    $.__views.__alloyId524 = Ti.UI.createImageView({
        image: "/images/appleBtn.png",
        id: "__alloyId524"
    });
    $.__views.__alloyId523.add($.__views.__alloyId524);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId523.add($.__views.priceProduct);
    $.__views.__alloyId525 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId525"
    });
    $.__views.buttons.add($.__views.__alloyId525);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Naranja"
    });
    $.__views.__alloyId525.add($.__views.nameProduct);
    $.__views.__alloyId526 = Ti.UI.createImageView({
        image: "/images/orangeBtn.png",
        id: "__alloyId526"
    });
    $.__views.__alloyId525.add($.__views.__alloyId526);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId525.add($.__views.priceProduct);
    $.__views.__alloyId527 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId527"
    });
    $.__views.buttons.add($.__views.__alloyId527);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Pera"
    });
    $.__views.__alloyId527.add($.__views.nameProduct);
    $.__views.__alloyId528 = Ti.UI.createImageView({
        image: "/images/pearBtn.png",
        id: "__alloyId528"
    });
    $.__views.__alloyId527.add($.__views.__alloyId528);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 300"
    });
    $.__views.__alloyId527.add($.__views.priceProduct);
    $.__views.__alloyId529 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId529"
    });
    $.__views.buttons.add($.__views.__alloyId529);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Te Verde"
    });
    $.__views.__alloyId529.add($.__views.nameProduct);
    $.__views.__alloyId530 = Ti.UI.createImageView({
        image: "/images/coffeBtn.png",
        id: "__alloyId530"
    });
    $.__views.__alloyId529.add($.__views.__alloyId530);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 400"
    });
    $.__views.__alloyId529.add($.__views.priceProduct);
    $.__views.__alloyId531 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId531"
    });
    $.__views.buttons.add($.__views.__alloyId531);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Platano"
    });
    $.__views.__alloyId531.add($.__views.nameProduct);
    $.__views.__alloyId532 = Ti.UI.createImageView({
        image: "/images/bananaBtn.png",
        id: "__alloyId532"
    });
    $.__views.__alloyId531.add($.__views.__alloyId532);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 100"
    });
    $.__views.__alloyId531.add($.__views.priceProduct);
    $.__views.__alloyId533 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId533"
    });
    $.__views.buttons.add($.__views.__alloyId533);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Manzana Roja"
    });
    $.__views.__alloyId533.add($.__views.nameProduct);
    $.__views.__alloyId534 = Ti.UI.createImageView({
        image: "/images/appleBtn.png",
        id: "__alloyId534"
    });
    $.__views.__alloyId533.add($.__views.__alloyId534);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId533.add($.__views.priceProduct);
    $.__views.__alloyId535 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId535"
    });
    $.__views.buttons.add($.__views.__alloyId535);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Naranja"
    });
    $.__views.__alloyId535.add($.__views.nameProduct);
    $.__views.__alloyId536 = Ti.UI.createImageView({
        image: "/images/orangeBtn.png",
        id: "__alloyId536"
    });
    $.__views.__alloyId535.add($.__views.__alloyId536);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId535.add($.__views.priceProduct);
    $.__views.__alloyId537 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId537"
    });
    $.__views.buttons.add($.__views.__alloyId537);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Pera"
    });
    $.__views.__alloyId537.add($.__views.nameProduct);
    $.__views.__alloyId538 = Ti.UI.createImageView({
        image: "/images/pearBtn.png",
        id: "__alloyId538"
    });
    $.__views.__alloyId537.add($.__views.__alloyId538);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 300"
    });
    $.__views.__alloyId537.add($.__views.priceProduct);
    $.__views.__alloyId539 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId539"
    });
    $.__views.buttons.add($.__views.__alloyId539);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Te Verde"
    });
    $.__views.__alloyId539.add($.__views.nameProduct);
    $.__views.__alloyId540 = Ti.UI.createImageView({
        image: "/images/coffeBtn.png",
        id: "__alloyId540"
    });
    $.__views.__alloyId539.add($.__views.__alloyId540);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 400"
    });
    $.__views.__alloyId539.add($.__views.priceProduct);
    $.__views.__alloyId541 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId541"
    });
    $.__views.buttons.add($.__views.__alloyId541);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Platano"
    });
    $.__views.__alloyId541.add($.__views.nameProduct);
    $.__views.__alloyId542 = Ti.UI.createImageView({
        image: "/images/bananaBtn.png",
        id: "__alloyId542"
    });
    $.__views.__alloyId541.add($.__views.__alloyId542);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 100"
    });
    $.__views.__alloyId541.add($.__views.priceProduct);
    $.__views.__alloyId543 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId543"
    });
    $.__views.buttons.add($.__views.__alloyId543);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Manzana Roja"
    });
    $.__views.__alloyId543.add($.__views.nameProduct);
    $.__views.__alloyId544 = Ti.UI.createImageView({
        image: "/images/appleBtn.png",
        id: "__alloyId544"
    });
    $.__views.__alloyId543.add($.__views.__alloyId544);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId543.add($.__views.priceProduct);
    $.__views.__alloyId545 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId545"
    });
    $.__views.buttons.add($.__views.__alloyId545);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Naranja"
    });
    $.__views.__alloyId545.add($.__views.nameProduct);
    $.__views.__alloyId546 = Ti.UI.createImageView({
        image: "/images/orangeBtn.png",
        id: "__alloyId546"
    });
    $.__views.__alloyId545.add($.__views.__alloyId546);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId545.add($.__views.priceProduct);
    $.__views.__alloyId547 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId547"
    });
    $.__views.buttons.add($.__views.__alloyId547);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Pera"
    });
    $.__views.__alloyId547.add($.__views.nameProduct);
    $.__views.__alloyId548 = Ti.UI.createImageView({
        image: "/images/pearBtn.png",
        id: "__alloyId548"
    });
    $.__views.__alloyId547.add($.__views.__alloyId548);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 300"
    });
    $.__views.__alloyId547.add($.__views.priceProduct);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId513!click!showAgenda"] && $.__views.__alloyId513.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId517!click!showNews"] && $.__views.__alloyId517.addEventListener("click", showNews);
    __defers["$.__views.__alloyId519!click!showVida"] && $.__views.__alloyId519.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.__alloyId523!click!showVidaProducto"] && $.__views.__alloyId523.addEventListener("click", showVidaProducto);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;