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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        exitOnClose: true,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.index.add($.__views.menu);
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
    $.__views.__alloyId13 = Ti.UI.createView({
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
        id: "__alloyId13"
    });
    $.__views.options.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
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
        id: "__alloyId15"
    });
    $.__views.options.add($.__views.__alloyId15);
    showAgenda ? $.__views.__alloyId15.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId15!click!showAgenda"] = true;
    $.__views.__alloyId16 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
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
        id: "__alloyId17"
    });
    $.__views.options.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createView({
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
        id: "__alloyId19"
    });
    $.__views.options.add($.__views.__alloyId19);
    showVida ? $.__views.__alloyId19.addEventListener("click", showVida) : __defers["$.__views.__alloyId19!click!showVida"] = true;
    $.__views.__alloyId20 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#D2D2D2",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.index.add($.__views.main);
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
        backgroundColor: "#f5f6f9",
        width: Ti.UI.FILL,
        height: "45",
        layout: "horizontal",
        id: "menuBar"
    });
    $.__views.main.add($.__views.menuBar);
    $.__views.__alloyId21 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "45",
        id: "__alloyId21"
    });
    $.__views.menuBar.add($.__views.__alloyId21);
    $.__views.tituloLbl = Ti.UI.createLabel({
        left: 5,
        color: "#2B2D2B",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        text: "NOTICIAS BUAP",
        id: "tituloLbl"
    });
    $.__views.__alloyId21.add($.__views.tituloLbl);
    $.__views.filterBtn = Ti.UI.createImageView({
        width: "19",
        height: "19",
        right: 85,
        image: "/images/catBtn.png",
        id: "filterBtn"
    });
    $.__views.__alloyId21.add($.__views.filterBtn);
    $.__views.categoriaLbl = Ti.UI.createLabel({
        right: 5,
        color: "#2B2D2B",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Categorías",
        id: "categoriaLbl"
    });
    $.__views.__alloyId21.add($.__views.categoriaLbl);
    var __alloyId22 = [];
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId22.push($.__views.listRow);
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
    $.__views.listRow.add($.__views.rowContainer);
    showNews ? $.__views.rowContainer.addEventListener("click", showNews) : __defers["$.__views.rowContainer!click!showNews"] = true;
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#096917",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Rectoria",
        id: "profileName"
    });
    $.__views.rowContainer.add($.__views.profileName);
    $.__views.date = Ti.UI.createLabel({
        top: "25",
        left: "5",
        color: "#33743C",
        font: {
            fontSize: "14"
        },
        text: "21.05.2014",
        id: "date"
    });
    $.__views.rowContainer.add($.__views.date);
    $.__views.profilePic = Ti.UI.createImageView({
        width: "46",
        height: "46",
        image: "/images/profilepic.png",
        top: "5",
        right: "5",
        id: "profilePic"
    });
    $.__views.rowContainer.add($.__views.profilePic);
    $.__views.status = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 5,
        rigth: 5,
        font: {
            fontSize: "16"
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, mi sed molestie interdum, sem libero egestas leo, at elementum mauris massa sed dui. Ut id porta arcu, at scelerisque dui...",
        id: "status"
    });
    $.__views.rowContainer.add($.__views.status);
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
        right: 0,
        image: "/images/starBtn.png",
        id: "starBtn"
    });
    $.__views.bottomActions.add($.__views.starBtn);
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId22.push($.__views.listRow);
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
    $.__views.listRow.add($.__views.rowContainer);
    showNews ? $.__views.rowContainer.addEventListener("click", showNews) : __defers["$.__views.rowContainer!click!showNews"] = true;
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#096917",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Evento",
        id: "profileName"
    });
    $.__views.rowContainer.add($.__views.profileName);
    $.__views.date = Ti.UI.createLabel({
        top: "25",
        left: "5",
        color: "#33743C",
        font: {
            fontSize: "14"
        },
        text: "21.05.2014",
        id: "date"
    });
    $.__views.rowContainer.add($.__views.date);
    $.__views.profilePic = Ti.UI.createImageView({
        width: "46",
        height: "46",
        image: "/images/profilepic.png",
        top: "5",
        right: "5",
        id: "profilePic"
    });
    $.__views.rowContainer.add($.__views.profilePic);
    $.__views.status = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 5,
        rigth: 5,
        font: {
            fontSize: "16"
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, mi sed molestie interdum, sem libero egestas leo, at elementum mauris massa sed dui. Ut id porta arcu, at scelerisque dui...",
        id: "status"
    });
    $.__views.rowContainer.add($.__views.status);
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
        right: 0,
        image: "/images/starBtn.png",
        id: "starBtn"
    });
    $.__views.bottomActions.add($.__views.starBtn);
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId22.push($.__views.listRow);
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
    $.__views.listRow.add($.__views.rowContainer);
    showNews ? $.__views.rowContainer.addEventListener("click", showNews) : __defers["$.__views.rowContainer!click!showNews"] = true;
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#096917",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Social",
        id: "profileName"
    });
    $.__views.rowContainer.add($.__views.profileName);
    $.__views.date = Ti.UI.createLabel({
        top: "25",
        left: "5",
        color: "#33743C",
        font: {
            fontSize: "14"
        },
        text: "21.05.2014",
        id: "date"
    });
    $.__views.rowContainer.add($.__views.date);
    $.__views.profilePic = Ti.UI.createImageView({
        width: "46",
        height: "46",
        image: "/images/profilepic.png",
        top: "5",
        right: "5",
        id: "profilePic"
    });
    $.__views.rowContainer.add($.__views.profilePic);
    $.__views.status = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 5,
        rigth: 5,
        font: {
            fontSize: "16"
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, mi sed molestie interdum, sem libero egestas leo, at elementum mauris massa sed dui. Ut id porta arcu, at scelerisque dui...",
        id: "status"
    });
    $.__views.rowContainer.add($.__views.status);
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
        right: 0,
        image: "/images/starBtn.png",
        id: "starBtn"
    });
    $.__views.bottomActions.add($.__views.starBtn);
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId22.push($.__views.listRow);
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
    $.__views.listRow.add($.__views.rowContainer);
    showNews ? $.__views.rowContainer.addEventListener("click", showNews) : __defers["$.__views.rowContainer!click!showNews"] = true;
    $.__views.profileName = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#096917",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Rectoria",
        id: "profileName"
    });
    $.__views.rowContainer.add($.__views.profileName);
    $.__views.date = Ti.UI.createLabel({
        top: "25",
        left: "5",
        color: "#33743C",
        font: {
            fontSize: "14"
        },
        text: "21.05.2014",
        id: "date"
    });
    $.__views.rowContainer.add($.__views.date);
    $.__views.profilePic = Ti.UI.createImageView({
        width: "46",
        height: "46",
        image: "/images/profilepic.png",
        top: "5",
        right: "5",
        id: "profilePic"
    });
    $.__views.rowContainer.add($.__views.profilePic);
    $.__views.status = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 5,
        rigth: 5,
        font: {
            fontSize: "16"
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, mi sed molestie interdum, sem libero egestas leo, at elementum mauris massa sed dui. Ut id porta arcu, at scelerisque dui...",
        id: "status"
    });
    $.__views.rowContainer.add($.__views.status);
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
        right: 0,
        image: "/images/starBtn.png",
        id: "starBtn"
    });
    $.__views.bottomActions.add($.__views.starBtn);
    $.__views.mainList = Ti.UI.createTableView({
        backgroundColor: "#D4D6DA",
        separatorStyle: "NONE",
        data: __alloyId22,
        id: "mainList"
    });
    $.__views.main.add($.__views.mainList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId15!click!showAgenda"] && $.__views.__alloyId15.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId19!click!showVida"] && $.__views.__alloyId19.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.rowContainer!click!showNews"] && $.__views.rowContainer.addEventListener("click", showNews);
    __defers["$.__views.rowContainer!click!showNews"] && $.__views.rowContainer.addEventListener("click", showNews);
    __defers["$.__views.rowContainer!click!showNews"] && $.__views.rowContainer.addEventListener("click", showNews);
    __defers["$.__views.rowContainer!click!showNews"] && $.__views.rowContainer.addEventListener("click", showNews);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;