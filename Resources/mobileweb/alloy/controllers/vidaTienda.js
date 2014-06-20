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
    $.__views.__alloyId129 = Ti.UI.createView({
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
        id: "__alloyId129"
    });
    $.__views.options.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId130"
    });
    $.__views.__alloyId129.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
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
        id: "__alloyId131"
    });
    $.__views.options.add($.__views.__alloyId131);
    showAgenda ? $.__views.__alloyId131.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId131!click!showAgenda"] = true;
    $.__views.__alloyId132 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createView({
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
        id: "__alloyId133"
    });
    $.__views.options.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createView({
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
        id: "__alloyId135"
    });
    $.__views.options.add($.__views.__alloyId135);
    showNews ? $.__views.__alloyId135.addEventListener("click", showNews) : __defers["$.__views.__alloyId135!click!showNews"] = true;
    $.__views.__alloyId136 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId136"
    });
    $.__views.__alloyId135.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createView({
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
        id: "__alloyId137"
    });
    $.__views.options.add($.__views.__alloyId137);
    showVida ? $.__views.__alloyId137.addEventListener("click", showVida) : __defers["$.__views.__alloyId137!click!showVida"] = true;
    $.__views.__alloyId138 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId138"
    });
    $.__views.__alloyId137.add($.__views.__alloyId138);
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
    $.__views.__alloyId139 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId139"
    });
    $.__views.buttons.add($.__views.__alloyId139);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Platano"
    });
    $.__views.__alloyId139.add($.__views.nameProduct);
    $.__views.__alloyId140 = Ti.UI.createImageView({
        image: "/images/bananaBtn.png",
        id: "__alloyId140"
    });
    $.__views.__alloyId139.add($.__views.__alloyId140);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 100"
    });
    $.__views.__alloyId139.add($.__views.priceProduct);
    $.__views.__alloyId141 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId141"
    });
    $.__views.buttons.add($.__views.__alloyId141);
    showVidaProducto ? $.__views.__alloyId141.addEventListener("click", showVidaProducto) : __defers["$.__views.__alloyId141!click!showVidaProducto"] = true;
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Manzana Roja"
    });
    $.__views.__alloyId141.add($.__views.nameProduct);
    $.__views.__alloyId142 = Ti.UI.createImageView({
        image: "/images/appleBtn.png",
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId141.add($.__views.priceProduct);
    $.__views.__alloyId143 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId143"
    });
    $.__views.buttons.add($.__views.__alloyId143);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Naranja"
    });
    $.__views.__alloyId143.add($.__views.nameProduct);
    $.__views.__alloyId144 = Ti.UI.createImageView({
        image: "/images/orangeBtn.png",
        id: "__alloyId144"
    });
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId143.add($.__views.priceProduct);
    $.__views.__alloyId145 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId145"
    });
    $.__views.buttons.add($.__views.__alloyId145);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Pera"
    });
    $.__views.__alloyId145.add($.__views.nameProduct);
    $.__views.__alloyId146 = Ti.UI.createImageView({
        image: "/images/pearBtn.png",
        id: "__alloyId146"
    });
    $.__views.__alloyId145.add($.__views.__alloyId146);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 300"
    });
    $.__views.__alloyId145.add($.__views.priceProduct);
    $.__views.__alloyId147 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId147"
    });
    $.__views.buttons.add($.__views.__alloyId147);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Te Verde"
    });
    $.__views.__alloyId147.add($.__views.nameProduct);
    $.__views.__alloyId148 = Ti.UI.createImageView({
        image: "/images/coffeBtn.png",
        id: "__alloyId148"
    });
    $.__views.__alloyId147.add($.__views.__alloyId148);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 400"
    });
    $.__views.__alloyId147.add($.__views.priceProduct);
    $.__views.__alloyId149 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId149"
    });
    $.__views.buttons.add($.__views.__alloyId149);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Platano"
    });
    $.__views.__alloyId149.add($.__views.nameProduct);
    $.__views.__alloyId150 = Ti.UI.createImageView({
        image: "/images/bananaBtn.png",
        id: "__alloyId150"
    });
    $.__views.__alloyId149.add($.__views.__alloyId150);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 100"
    });
    $.__views.__alloyId149.add($.__views.priceProduct);
    $.__views.__alloyId151 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId151"
    });
    $.__views.buttons.add($.__views.__alloyId151);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Manzana Roja"
    });
    $.__views.__alloyId151.add($.__views.nameProduct);
    $.__views.__alloyId152 = Ti.UI.createImageView({
        image: "/images/appleBtn.png",
        id: "__alloyId152"
    });
    $.__views.__alloyId151.add($.__views.__alloyId152);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId151.add($.__views.priceProduct);
    $.__views.__alloyId153 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId153"
    });
    $.__views.buttons.add($.__views.__alloyId153);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Naranja"
    });
    $.__views.__alloyId153.add($.__views.nameProduct);
    $.__views.__alloyId154 = Ti.UI.createImageView({
        image: "/images/orangeBtn.png",
        id: "__alloyId154"
    });
    $.__views.__alloyId153.add($.__views.__alloyId154);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId153.add($.__views.priceProduct);
    $.__views.__alloyId155 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId155"
    });
    $.__views.buttons.add($.__views.__alloyId155);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Pera"
    });
    $.__views.__alloyId155.add($.__views.nameProduct);
    $.__views.__alloyId156 = Ti.UI.createImageView({
        image: "/images/pearBtn.png",
        id: "__alloyId156"
    });
    $.__views.__alloyId155.add($.__views.__alloyId156);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 300"
    });
    $.__views.__alloyId155.add($.__views.priceProduct);
    $.__views.__alloyId157 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId157"
    });
    $.__views.buttons.add($.__views.__alloyId157);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Te Verde"
    });
    $.__views.__alloyId157.add($.__views.nameProduct);
    $.__views.__alloyId158 = Ti.UI.createImageView({
        image: "/images/coffeBtn.png",
        id: "__alloyId158"
    });
    $.__views.__alloyId157.add($.__views.__alloyId158);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 400"
    });
    $.__views.__alloyId157.add($.__views.priceProduct);
    $.__views.__alloyId159 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId159"
    });
    $.__views.buttons.add($.__views.__alloyId159);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Platano"
    });
    $.__views.__alloyId159.add($.__views.nameProduct);
    $.__views.__alloyId160 = Ti.UI.createImageView({
        image: "/images/bananaBtn.png",
        id: "__alloyId160"
    });
    $.__views.__alloyId159.add($.__views.__alloyId160);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 100"
    });
    $.__views.__alloyId159.add($.__views.priceProduct);
    $.__views.__alloyId161 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId161"
    });
    $.__views.buttons.add($.__views.__alloyId161);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Manzana Roja"
    });
    $.__views.__alloyId161.add($.__views.nameProduct);
    $.__views.__alloyId162 = Ti.UI.createImageView({
        image: "/images/appleBtn.png",
        id: "__alloyId162"
    });
    $.__views.__alloyId161.add($.__views.__alloyId162);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId161.add($.__views.priceProduct);
    $.__views.__alloyId163 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId163"
    });
    $.__views.buttons.add($.__views.__alloyId163);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Naranja"
    });
    $.__views.__alloyId163.add($.__views.nameProduct);
    $.__views.__alloyId164 = Ti.UI.createImageView({
        image: "/images/orangeBtn.png",
        id: "__alloyId164"
    });
    $.__views.__alloyId163.add($.__views.__alloyId164);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 200"
    });
    $.__views.__alloyId163.add($.__views.priceProduct);
    $.__views.__alloyId165 = Ti.UI.createView({
        width: "100",
        height: "105",
        top: "10",
        left: "10",
        backgroundColor: "#fff",
        layout: "vertical",
        id: "__alloyId165"
    });
    $.__views.buttons.add($.__views.__alloyId165);
    $.__views.nameProduct = Ti.UI.createLabel({
        id: "nameProduct",
        text: "Pera"
    });
    $.__views.__alloyId165.add($.__views.nameProduct);
    $.__views.__alloyId166 = Ti.UI.createImageView({
        image: "/images/pearBtn.png",
        id: "__alloyId166"
    });
    $.__views.__alloyId165.add($.__views.__alloyId166);
    $.__views.priceProduct = Ti.UI.createLabel({
        id: "priceProduct",
        text: "$ 300"
    });
    $.__views.__alloyId165.add($.__views.priceProduct);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId131!click!showAgenda"] && $.__views.__alloyId131.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId135!click!showNews"] && $.__views.__alloyId135.addEventListener("click", showNews);
    __defers["$.__views.__alloyId137!click!showVida"] && $.__views.__alloyId137.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.__alloyId141!click!showVidaProducto"] && $.__views.__alloyId141.addEventListener("click", showVidaProducto);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;