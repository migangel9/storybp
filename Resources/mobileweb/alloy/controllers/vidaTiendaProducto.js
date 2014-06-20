function Controller() {
    function hideMenu() {
        $.main.width = Ti.Platform.displayCaps.platformWidth;
        $.main.animate({
            left: 0,
            duration: 100
        });
    }
    function closeProducto(e) {
        var win = Alloy.createController("vidaTienda").getView();
        "right" == e.direction && win.open();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "vidaTiendaProducto";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.container.add($.__views.menu);
    hideMenu ? $.__views.menu.addEventListener("click", hideMenu) : __defers["$.__views.menu!click!hideMenu"] = true;
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#D2D2D2",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.container.add($.__views.main);
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
    $.__views.backBtn = Ti.UI.createImageView({
        width: "45",
        height: "45",
        left: 5,
        image: "/images/ic_action_back.png",
        id: "backBtn"
    });
    $.__views.iconBar.add($.__views.backBtn);
    closeProducto ? $.__views.backBtn.addEventListener("click", closeProducto) : __defers["$.__views.backBtn!click!closeProducto"] = true;
    $.__views.backLbl = Ti.UI.createLabel({
        left: 55,
        color: "#fff",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        text: "Vida Tienda",
        id: "backLbl"
    });
    $.__views.iconBar.add($.__views.backLbl);
    closeProducto ? $.__views.backLbl.addEventListener("click", closeProducto) : __defers["$.__views.backLbl!click!closeProducto"] = true;
    $.__views.searchBtn = Ti.UI.createImageView({
        right: 5,
        width: "35",
        height: "34",
        image: "/images/searchBtn.png",
        id: "searchBtn"
    });
    $.__views.iconBar.add($.__views.searchBtn);
    $.__views.rowContainer = Ti.UI.createScrollView({
        borderColor: "#cacdd8",
        borderRadius: 5,
        borderWidht: 1,
        left: "5",
        right: "5",
        bottom: "5",
        top: "5",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        layout: "vertical",
        id: "rowContainer",
        showVerticalScrollIndicator: "true",
        scrollType: "vertical"
    });
    $.__views.main.add($.__views.rowContainer);
    $.__views.notaTitle = Ti.UI.createLabel({
        top: "5",
        left: "5",
        width: Ti.UI.FILL,
        color: "#670000",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        id: "notaTitle",
        text: "Manzana"
    });
    $.__views.rowContainer.add($.__views.notaTitle);
    $.__views.infoNutrimental = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "150",
        layout: "horizontal",
        id: "infoNutrimental"
    });
    $.__views.rowContainer.add($.__views.infoNutrimental);
    $.__views.imageProduct = Ti.UI.createImageView({
        width: "110",
        height: "110",
        top: "5",
        right: "5",
        id: "imageProduct",
        image: "/images/appleBtn.png"
    });
    $.__views.infoNutrimental.add($.__views.imageProduct);
    $.__views.infoNutri = Ti.UI.createLabel({
        top: "5",
        left: "5",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        color: "#000",
        text: "Valor nutricional por cada 100 g c/ piel.\n							Energía 50 kcal 220 kJ\n							Carbohidratos 	13.81 g\n							Azúcares 	10.39 g\n							Grasas 	0.17 g\n							Proteínas 	0.26 g\n							Agua 	85.56 g",
        id: "infoNutri"
    });
    $.__views.infoNutrimental.add($.__views.infoNutri);
    $.__views.notaText = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        left: 5,
        right: 5,
        color: "#000",
        font: {
            fontSize: "16"
        },
        id: "notaText",
        text: "¡Media manzana te provee de 5 gramos más de fibra que la mayoría de los cereales! Las manzanas son de las frutas que más contienen pectina, una fibra soluble que reduce el colesterol. La pectina evita que el colesterol se acumule en el recubrimiento de las paredes de los vasos sanguíneos, reduciendo por lo tanto el riesgo de ateroesclerosis y otras enfermedades del corazón."
    });
    $.__views.rowContainer.add($.__views.notaText);
    $.__views.bottomActions = Ti.UI.createView({
        top: 10,
        height: "50",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        id: "bottomActions"
    });
    $.__views.rowContainer.add($.__views.bottomActions);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Obtener Codigo"
    });
    $.__views.bottomActions.add($.__views.button);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!click!hideMenu"] && $.__views.menu.addEventListener("click", hideMenu);
    __defers["$.__views.backBtn!click!closeProducto"] && $.__views.backBtn.addEventListener("click", closeProducto);
    __defers["$.__views.backLbl!click!closeProducto"] && $.__views.backLbl.addEventListener("click", closeProducto);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;