function Controller() {
    function hideMenu() {
        $.main.width = Ti.Platform.displayCaps.platformWidth;
        $.main.animate({
            left: 0,
            duration: 100
        });
    }
    function closeNews() {
        var win = Alloy.createController("index").getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "noticia";
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
    $.__views.backBtn = Ti.UI.createImageView({
        width: "45",
        height: "45",
        left: 5,
        image: "/images/ic_action_back.png",
        id: "backBtn"
    });
    $.__views.iconBar.add($.__views.backBtn);
    closeNews ? $.__views.backBtn.addEventListener("click", closeNews) : __defers["$.__views.backBtn!click!closeNews"] = true;
    $.__views.backLbl = Ti.UI.createLabel({
        left: 55,
        color: "#fff",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        text: "Noticias",
        id: "backLbl"
    });
    $.__views.iconBar.add($.__views.backLbl);
    closeNews ? $.__views.backLbl.addEventListener("click", closeNews) : __defers["$.__views.backLbl!click!closeNews"] = true;
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
    $.__views.nameDependency = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#003b5d",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Rectoria",
        id: "nameDependency"
    });
    $.__views.rowContainer.add($.__views.nameDependency);
    $.__views.date = Ti.UI.createLabel({
        top: "25",
        left: "5",
        color: "#003b5d",
        font: {
            fontSize: "14"
        },
        text: "21.05.2014",
        id: "date"
    });
    $.__views.rowContainer.add($.__views.date);
    $.__views.profilePic = Ti.UI.createImageView({
        width: "56",
        height: "56",
        image: "/images/profilepic.png",
        top: "5",
        right: "5",
        id: "profilePic"
    });
    $.__views.rowContainer.add($.__views.profilePic);
    $.__views.news = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 5,
        rigth: 5,
        color: "#4E4E4E",
        font: {
            fontSize: "16"
        },
        text: "NOticia COMPLETA \n						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget leo et augue vestibulum hendrerit vel a purus. Maecenas malesuada erat hendrerit arcu viverra, non interdum lorem lacinia. Aliquam condimentum leo augue, a auctor sapien ultrices eget. Suspendisse condimentum lacinia semper. Donec iaculis consequat congue. Maecenas placerat nunc varius nibh ultricies imperdiet. Sed facilisis faucibus augue, quis aliquam nibh. Suspendisse nibh sem, ornare ut sem vitae, pharetra posuere metus. Mauris viverra, purus eget iaculis egestas, lacus mi placerat turpis, vel feugiat tellus mauris sit amet turpis. Donec condimentum molestie felis nec congue. Aliquam vel lacus a turpis mattis porta. Nunc auctor feugiat ipsum.",
        id: "news"
    });
    $.__views.rowContainer.add($.__views.news);
    $.__views.bottomActions = Ti.UI.createView({
        bottom: 0,
        height: "30",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        layout: "horizontal",
        id: "bottomActions"
    });
    $.__views.rowContainer.add($.__views.bottomActions);
    $.__views.starBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: "30",
        image: "/images/starBtn.png",
        id: "starBtn"
    });
    $.__views.bottomActions.add($.__views.starBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!click!hideMenu"] && $.__views.menu.addEventListener("click", hideMenu);
    __defers["$.__views.backBtn!click!closeNews"] && $.__views.backBtn.addEventListener("click", closeNews);
    __defers["$.__views.backLbl!click!closeNews"] && $.__views.backLbl.addEventListener("click", closeNews);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;