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
    function showNota() {
        var win = Alloy.createController("notaBlog").getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "vidaBlog";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.vidaBlog = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "vidaBlog"
    });
    $.__views.vidaBlog && $.addTopLevelView($.__views.vidaBlog);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.vidaBlog.add($.__views.menu);
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
    $.__views.__alloyId455 = Ti.UI.createView({
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
        id: "__alloyId455"
    });
    $.__views.options.add($.__views.__alloyId455);
    $.__views.__alloyId456 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId456"
    });
    $.__views.__alloyId455.add($.__views.__alloyId456);
    $.__views.__alloyId457 = Ti.UI.createView({
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
        id: "__alloyId457"
    });
    $.__views.options.add($.__views.__alloyId457);
    showAgenda ? $.__views.__alloyId457.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId457!click!showAgenda"] = true;
    $.__views.__alloyId458 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId458"
    });
    $.__views.__alloyId457.add($.__views.__alloyId458);
    $.__views.__alloyId459 = Ti.UI.createView({
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
        id: "__alloyId459"
    });
    $.__views.options.add($.__views.__alloyId459);
    $.__views.__alloyId460 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId460"
    });
    $.__views.__alloyId459.add($.__views.__alloyId460);
    $.__views.__alloyId461 = Ti.UI.createView({
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
        id: "__alloyId461"
    });
    $.__views.options.add($.__views.__alloyId461);
    showNews ? $.__views.__alloyId461.addEventListener("click", showNews) : __defers["$.__views.__alloyId461!click!showNews"] = true;
    $.__views.__alloyId462 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId462"
    });
    $.__views.__alloyId461.add($.__views.__alloyId462);
    $.__views.__alloyId463 = Ti.UI.createView({
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
        id: "__alloyId463"
    });
    $.__views.options.add($.__views.__alloyId463);
    showVida ? $.__views.__alloyId463.addEventListener("click", showVida) : __defers["$.__views.__alloyId463!click!showVida"] = true;
    $.__views.__alloyId464 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId464"
    });
    $.__views.__alloyId463.add($.__views.__alloyId464);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#D2D2D2",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.vidaBlog.add($.__views.main);
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
    $.__views.__alloyId465 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "45",
        id: "__alloyId465"
    });
    $.__views.menuBar.add($.__views.__alloyId465);
    $.__views.categoriaLbl = Ti.UI.createLabel({
        left: 5,
        color: "#fff",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        text: "VIDA BLOG",
        id: "categoriaLbl"
    });
    $.__views.__alloyId465.add($.__views.categoriaLbl);
    var __alloyId466 = [];
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId466.push($.__views.listRow);
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
    showNota ? $.__views.rowContainer.addEventListener("click", showNota) : __defers["$.__views.rowContainer!click!showNota"] = true;
    $.__views.notaTitle = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#670000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Titulo de la nota",
        id: "notaTitle"
    });
    $.__views.rowContainer.add($.__views.notaTitle);
    $.__views.notaPic = Ti.UI.createImageView({
        width: "66",
        height: "66",
        image: "/images/blog.jpg",
        top: "25",
        left: "5",
        id: "notaPic"
    });
    $.__views.rowContainer.add($.__views.notaPic);
    $.__views.notaText = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 70,
        rigth: 5,
        font: {
            fontSize: "16"
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget leo et augue vestibulum hendrerit vel a purus. Maecenas malesuada erat hendrerit arcu viverra, non interdum lorem lacinia.",
        id: "notaText"
    });
    $.__views.rowContainer.add($.__views.notaText);
    $.__views.bottomActions = Ti.UI.createView({
        bottom: 0,
        height: "2",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        layout: "horizontal",
        id: "bottomActions"
    });
    $.__views.rowContainer.add($.__views.bottomActions);
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId466.push($.__views.listRow);
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
    showNota ? $.__views.rowContainer.addEventListener("click", showNota) : __defers["$.__views.rowContainer!click!showNota"] = true;
    $.__views.notaTitle = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#670000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Titulo de la nota",
        id: "notaTitle"
    });
    $.__views.rowContainer.add($.__views.notaTitle);
    $.__views.notaPic = Ti.UI.createImageView({
        width: "66",
        height: "66",
        image: "/images/blog.jpg",
        top: "25",
        left: "5",
        id: "notaPic"
    });
    $.__views.rowContainer.add($.__views.notaPic);
    $.__views.notaText = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 70,
        rigth: 5,
        font: {
            fontSize: "16"
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget leo et augue vestibulum hendrerit vel a purus. Maecenas malesuada erat hendrerit arcu viverra, non interdum lorem lacinia.",
        id: "notaText"
    });
    $.__views.rowContainer.add($.__views.notaText);
    $.__views.bottomActions = Ti.UI.createView({
        bottom: 0,
        height: "2",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        layout: "horizontal",
        id: "bottomActions"
    });
    $.__views.rowContainer.add($.__views.bottomActions);
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId466.push($.__views.listRow);
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
    showNota ? $.__views.rowContainer.addEventListener("click", showNota) : __defers["$.__views.rowContainer!click!showNota"] = true;
    $.__views.notaTitle = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#670000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Titulo de la nota",
        id: "notaTitle"
    });
    $.__views.rowContainer.add($.__views.notaTitle);
    $.__views.notaPic = Ti.UI.createImageView({
        width: "66",
        height: "66",
        image: "/images/blog.jpg",
        top: "25",
        left: "5",
        id: "notaPic"
    });
    $.__views.rowContainer.add($.__views.notaPic);
    $.__views.notaText = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 70,
        rigth: 5,
        font: {
            fontSize: "16"
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget leo et augue vestibulum hendrerit vel a purus. Maecenas malesuada erat hendrerit arcu viverra, non interdum lorem lacinia.",
        id: "notaText"
    });
    $.__views.rowContainer.add($.__views.notaText);
    $.__views.bottomActions = Ti.UI.createView({
        bottom: 0,
        height: "2",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        layout: "horizontal",
        id: "bottomActions"
    });
    $.__views.rowContainer.add($.__views.bottomActions);
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId466.push($.__views.listRow);
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
    showNota ? $.__views.rowContainer.addEventListener("click", showNota) : __defers["$.__views.rowContainer!click!showNota"] = true;
    $.__views.notaTitle = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#670000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Titulo de la nota",
        id: "notaTitle"
    });
    $.__views.rowContainer.add($.__views.notaTitle);
    $.__views.notaPic = Ti.UI.createImageView({
        width: "66",
        height: "66",
        image: "/images/blog.jpg",
        top: "25",
        left: "5",
        id: "notaPic"
    });
    $.__views.rowContainer.add($.__views.notaPic);
    $.__views.notaText = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: 70,
        rigth: 5,
        font: {
            fontSize: "16"
        },
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget leo et augue vestibulum hendrerit vel a purus. Maecenas malesuada erat hendrerit arcu viverra, non interdum lorem lacinia.",
        id: "notaText"
    });
    $.__views.rowContainer.add($.__views.notaText);
    $.__views.bottomActions = Ti.UI.createView({
        bottom: 0,
        height: "2",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        layout: "horizontal",
        id: "bottomActions"
    });
    $.__views.rowContainer.add($.__views.bottomActions);
    $.__views.mainList = Ti.UI.createTableView({
        backgroundColor: "#D4D6DA",
        separatorStyle: "NONE",
        data: __alloyId466,
        id: "mainList"
    });
    $.__views.main.add($.__views.mainList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId457!click!showAgenda"] && $.__views.__alloyId457.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId461!click!showNews"] && $.__views.__alloyId461.addEventListener("click", showNews);
    __defers["$.__views.__alloyId463!click!showVida"] && $.__views.__alloyId463.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.rowContainer!click!showNota"] && $.__views.rowContainer.addEventListener("click", showNota);
    __defers["$.__views.rowContainer!click!showNota"] && $.__views.rowContainer.addEventListener("click", showNota);
    __defers["$.__views.rowContainer!click!showNota"] && $.__views.rowContainer.addEventListener("click", showNota);
    __defers["$.__views.rowContainer!click!showNota"] && $.__views.rowContainer.addEventListener("click", showNota);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;