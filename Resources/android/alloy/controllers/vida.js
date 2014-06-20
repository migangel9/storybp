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
    function showJuegos() {
        var win = Alloy.createController("vidaJuegos").getView();
        win.open();
    }
    function showVidaBlog() {
        var win = Alloy.createController("vidaBlogSecciones").getView();
        win.open();
    }
    function showVidaDieta() {
        var win = Alloy.createController("tabComidaSe").getView();
        win.open();
    }
    function showVidaTienda() {
        var win = Alloy.createController("vidaTienda").getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "vida";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.vida = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "vida"
    });
    $.__views.vida && $.addTopLevelView($.__views.vida);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.vida.add($.__views.menu);
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
    $.__views.__alloyId437 = Ti.UI.createView({
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
        id: "__alloyId437"
    });
    $.__views.options.add($.__views.__alloyId437);
    $.__views.__alloyId438 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId438"
    });
    $.__views.__alloyId437.add($.__views.__alloyId438);
    $.__views.__alloyId439 = Ti.UI.createView({
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
        id: "__alloyId439"
    });
    $.__views.options.add($.__views.__alloyId439);
    showAgenda ? $.__views.__alloyId439.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId439!click!showAgenda"] = true;
    $.__views.__alloyId440 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId440"
    });
    $.__views.__alloyId439.add($.__views.__alloyId440);
    $.__views.__alloyId441 = Ti.UI.createView({
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
        id: "__alloyId441"
    });
    $.__views.options.add($.__views.__alloyId441);
    $.__views.__alloyId442 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId442"
    });
    $.__views.__alloyId441.add($.__views.__alloyId442);
    $.__views.__alloyId443 = Ti.UI.createView({
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
        id: "__alloyId443"
    });
    $.__views.options.add($.__views.__alloyId443);
    showNews ? $.__views.__alloyId443.addEventListener("click", showNews) : __defers["$.__views.__alloyId443!click!showNews"] = true;
    $.__views.__alloyId444 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId444"
    });
    $.__views.__alloyId443.add($.__views.__alloyId444);
    $.__views.__alloyId445 = Ti.UI.createView({
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
        id: "__alloyId445"
    });
    $.__views.options.add($.__views.__alloyId445);
    showVida ? $.__views.__alloyId445.addEventListener("click", showVida) : __defers["$.__views.__alloyId445!click!showVida"] = true;
    $.__views.__alloyId446 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId446"
    });
    $.__views.__alloyId445.add($.__views.__alloyId446);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.vida.add($.__views.main);
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
        text: "VIDA SANA",
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
    $.__views.__alloyId447 = Ti.UI.createView({
        width: "40%",
        height: Ti.UI.SIZE,
        top: 25,
        left: 15,
        layout: "vertical",
        id: "__alloyId447"
    });
    $.__views.buttons.add($.__views.__alloyId447);
    $.__views.gamesBtn = Ti.UI.createImageView({
        width: "120",
        height: "105",
        image: "/images/gamesBtn.png",
        id: "gamesBtn"
    });
    $.__views.__alloyId447.add($.__views.gamesBtn);
    showJuegos ? $.__views.gamesBtn.addEventListener("click", showJuegos) : __defers["$.__views.gamesBtn!click!showJuegos"] = true;
    $.__views.__alloyId448 = Ti.UI.createLabel({
        text: "Juegos",
        id: "__alloyId448"
    });
    $.__views.__alloyId447.add($.__views.__alloyId448);
    $.__views.__alloyId449 = Ti.UI.createView({
        width: "40%",
        height: Ti.UI.SIZE,
        top: 25,
        left: 15,
        layout: "vertical",
        id: "__alloyId449"
    });
    $.__views.buttons.add($.__views.__alloyId449);
    $.__views.storeBtn = Ti.UI.createImageView({
        width: "120",
        height: "105",
        image: "/images/storeBtn.png",
        id: "storeBtn"
    });
    $.__views.__alloyId449.add($.__views.storeBtn);
    showVidaTienda ? $.__views.storeBtn.addEventListener("click", showVidaTienda) : __defers["$.__views.storeBtn!click!showVidaTienda"] = true;
    $.__views.__alloyId450 = Ti.UI.createLabel({
        text: "Tienda",
        id: "__alloyId450"
    });
    $.__views.__alloyId449.add($.__views.__alloyId450);
    $.__views.__alloyId451 = Ti.UI.createView({
        width: "40%",
        height: Ti.UI.SIZE,
        top: 25,
        left: 15,
        layout: "vertical",
        id: "__alloyId451"
    });
    $.__views.buttons.add($.__views.__alloyId451);
    $.__views.dietBtn = Ti.UI.createImageView({
        width: "120",
        height: "105",
        image: "/images/dietBtn_.png",
        id: "dietBtn"
    });
    $.__views.__alloyId451.add($.__views.dietBtn);
    showVidaDieta ? $.__views.dietBtn.addEventListener("click", showVidaDieta) : __defers["$.__views.dietBtn!click!showVidaDieta"] = true;
    $.__views.__alloyId452 = Ti.UI.createLabel({
        text: "Come Sano",
        id: "__alloyId452"
    });
    $.__views.__alloyId451.add($.__views.__alloyId452);
    $.__views.__alloyId453 = Ti.UI.createView({
        width: "40%",
        height: Ti.UI.SIZE,
        top: 25,
        left: 15,
        layout: "vertical",
        id: "__alloyId453"
    });
    $.__views.buttons.add($.__views.__alloyId453);
    $.__views.blogBtn = Ti.UI.createImageView({
        width: "120",
        height: "105",
        image: "/images/blogBtn_.png",
        id: "blogBtn"
    });
    $.__views.__alloyId453.add($.__views.blogBtn);
    showVidaBlog ? $.__views.blogBtn.addEventListener("click", showVidaBlog) : __defers["$.__views.blogBtn!click!showVidaBlog"] = true;
    $.__views.__alloyId454 = Ti.UI.createLabel({
        text: "Vida Blog",
        id: "__alloyId454"
    });
    $.__views.__alloyId453.add($.__views.__alloyId454);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId439!click!showAgenda"] && $.__views.__alloyId439.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId443!click!showNews"] && $.__views.__alloyId443.addEventListener("click", showNews);
    __defers["$.__views.__alloyId445!click!showVida"] && $.__views.__alloyId445.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.gamesBtn!click!showJuegos"] && $.__views.gamesBtn.addEventListener("click", showJuegos);
    __defers["$.__views.storeBtn!click!showVidaTienda"] && $.__views.storeBtn.addEventListener("click", showVidaTienda);
    __defers["$.__views.dietBtn!click!showVidaDieta"] && $.__views.dietBtn.addEventListener("click", showVidaDieta);
    __defers["$.__views.blogBtn!click!showVidaBlog"] && $.__views.blogBtn.addEventListener("click", showVidaBlog);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;