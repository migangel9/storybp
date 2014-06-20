function Controller() {
    function hideMenu() {
        $.main.width = Ti.Platform.displayCaps.platformWidth;
        $.main.animate({
            left: 0,
            duration: 100
        });
    }
    function closeNota(e) {
        var win = Alloy.createController("vidaBlog").getView();
        "right" == e.direction && win.open();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "notaBlog";
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
    closeNota ? $.__views.backBtn.addEventListener("click", closeNota) : __defers["$.__views.backBtn!click!closeNota"] = true;
    $.__views.backLbl = Ti.UI.createLabel({
        left: 55,
        color: "#fff",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        text: "Vida Blog",
        id: "backLbl"
    });
    $.__views.iconBar.add($.__views.backLbl);
    closeNota ? $.__views.backLbl.addEventListener("click", closeNota) : __defers["$.__views.backLbl!click!closeNota"] = true;
    $.__views.searchBtn = Ti.UI.createImageView({
        right: 5,
        width: "35",
        height: "34",
        image: "/images/searchBtn.png",
        id: "searchBtn"
    });
    $.__views.iconBar.add($.__views.searchBtn);
    $.__views.rowContainer = Ti.UI.createView({
        borderColor: "#cacdd8",
        borderRadius: 5,
        borderWidht: 1,
        left: "5",
        right: "5",
        bottom: "5",
        top: "5",
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        id: "rowContainer"
    });
    $.__views.main.add($.__views.rowContainer);
    closeNota ? $.__views.rowContainer.addEventListener("swipe", closeNota) : __defers["$.__views.rowContainer!swipe!closeNota"] = true;
    $.__views.notaTitle = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#670000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Titulo Nota",
        id: "notaTitle"
    });
    $.__views.rowContainer.add($.__views.notaTitle);
    $.__views.notaText = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 5,
        rigth: 5,
        font: {
            fontSize: "16"
        },
        text: "Nota COMPLETA \n						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget leo et augue vestibulum hendrerit vel a purus. Maecenas malesuada erat hendrerit arcu viverra, non interdum lorem lacinia. Aliquam condimentum leo augue, a auctor sapien ultrices eget. Suspendisse condimentum lacinia semper. Donec iaculis consequat congue. Maecenas placerat nunc varius nibh ultricies imperdiet. Sed facilisis faucibus augue, quis aliquam nibh. Suspendisse nibh sem, ornare ut sem vitae, pharetra posuere metus. Mauris viverra, purus eget iaculis egestas, lacus mi placerat turpis, vel feugiat tellus mauris sit amet turpis. Donec condimentum molestie felis nec congue. Aliquam vel lacus a turpis mattis porta. Nunc auctor feugiat ipsum.",
        id: "notaText"
    });
    $.__views.rowContainer.add($.__views.notaText);
    $.__views.notaPic = Ti.UI.createImageView({
        width: "256",
        height: "256",
        image: "/images/blog.jpg",
        top: "5",
        right: "5",
        layout: "vertical",
        id: "notaPic"
    });
    $.__views.rowContainer.add($.__views.notaPic);
    $.__views.bottomActions = Ti.UI.createView({
        bottom: 0,
        height: "30",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        layout: "horizontal",
        id: "bottomActions"
    });
    $.__views.rowContainer.add($.__views.bottomActions);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!click!hideMenu"] && $.__views.menu.addEventListener("click", hideMenu);
    __defers["$.__views.backBtn!click!closeNota"] && $.__views.backBtn.addEventListener("click", closeNota);
    __defers["$.__views.backLbl!click!closeNota"] && $.__views.backLbl.addEventListener("click", closeNota);
    __defers["$.__views.rowContainer!swipe!closeNota"] && $.__views.rowContainer.addEventListener("swipe", closeNota);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;