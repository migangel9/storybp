function Controller() {
    function showMenu() {
        $.main.width = Ti.Platform.displayCaps.platformWidth;
        $.main.animate({
            left: 300,
            duration: 100
        });
    }
    function showNewsAll() {
        var win = Alloy.createController("index").getView();
        win.open();
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "agendaClases";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.agendaClases = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "agendaClases"
    });
    $.__views.agendaClases && $.addTopLevelView($.__views.agendaClases);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.agendaClases.add($.__views.menu);
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
    $.__views.__alloyId30 = Ti.UI.createView({
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
        id: "__alloyId30"
    });
    $.__views.options.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
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
        id: "__alloyId32"
    });
    $.__views.options.add($.__views.__alloyId32);
    showAgenda ? $.__views.__alloyId32.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId32!click!showAgenda"] = true;
    $.__views.__alloyId33 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
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
        id: "__alloyId34"
    });
    $.__views.options.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
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
        id: "__alloyId36"
    });
    $.__views.options.add($.__views.__alloyId36);
    showNewsAll ? $.__views.__alloyId36.addEventListener("click", showNewsAll) : __defers["$.__views.__alloyId36!click!showNewsAll"] = true;
    $.__views.__alloyId37 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
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
        id: "__alloyId38"
    });
    $.__views.options.add($.__views.__alloyId38);
    showVida ? $.__views.__alloyId38.addEventListener("click", showVida) : __defers["$.__views.__alloyId38!click!showVida"] = true;
    $.__views.__alloyId39 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "white",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.agendaClases.add($.__views.main);
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
    $.__views.__alloyId40 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "30",
        id: "__alloyId40"
    });
    $.__views.menuBar.add($.__views.__alloyId40);
    $.__views.tituloLbl = Ti.UI.createLabel({
        left: 5,
        color: "#fff",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        text: "Horario de clases",
        id: "tituloLbl"
    });
    $.__views.__alloyId40.add($.__views.tituloLbl);
    $.__views.clases = Ti.UI.createScrollView({
        layout: "horizontal",
        color: "#000",
        id: "clases",
        showVerticalScrollIndicator: "true",
        scrollType: "VERTICAL"
    });
    $.__views.main.add($.__views.clases);
    $.__views.__alloyId41 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId41"
    });
    $.__views.clases.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId42"
    });
    $.__views.clases.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        text: "L",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId44"
    });
    $.__views.clases.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        text: "Ma",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId46"
    });
    $.__views.clases.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        text: "Mi",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId48"
    });
    $.__views.clases.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        text: "J",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId50"
    });
    $.__views.clases.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        text: "V",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId52"
    });
    $.__views.clases.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createLabel({
        text: "S",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId54"
    });
    $.__views.clases.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        text: "7:00",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId56"
    });
    $.__views.clases.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId57"
    });
    $.__views.__alloyId56.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#3793F5",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId58"
    });
    $.__views.clases.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#3793F5",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId60"
    });
    $.__views.clases.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#3793F5",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId62"
    });
    $.__views.clases.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId64"
    });
    $.__views.clases.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId65"
    });
    $.__views.__alloyId64.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId66"
    });
    $.__views.clases.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId68"
    });
    $.__views.clases.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createLabel({
        text: "8:00",
        id: "__alloyId69"
    });
    $.__views.__alloyId68.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#3793F5",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId70"
    });
    $.__views.clases.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#3793F5",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId72"
    });
    $.__views.clases.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId73"
    });
    $.__views.__alloyId72.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId74"
    });
    $.__views.clases.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#3793F5",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId76"
    });
    $.__views.clases.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId77"
    });
    $.__views.__alloyId76.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId78"
    });
    $.__views.clases.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId80"
    });
    $.__views.clases.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId81"
    });
    $.__views.__alloyId80.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId82"
    });
    $.__views.clases.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        text: "9:00",
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#3793F5",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId84"
    });
    $.__views.clases.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId85"
    });
    $.__views.__alloyId84.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId86"
    });
    $.__views.clases.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#3793F5",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId88"
    });
    $.__views.clases.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId90"
    });
    $.__views.clases.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId92"
    });
    $.__views.clases.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId94"
    });
    $.__views.clases.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId96"
    });
    $.__views.clases.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createLabel({
        text: "10:00",
        id: "__alloyId97"
    });
    $.__views.__alloyId96.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#3793F5",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId98"
    });
    $.__views.clases.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId100"
    });
    $.__views.clases.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId101"
    });
    $.__views.__alloyId100.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#3793F5",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId102"
    });
    $.__views.clases.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId103"
    });
    $.__views.__alloyId102.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId104"
    });
    $.__views.clases.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId106"
    });
    $.__views.clases.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId108"
    });
    $.__views.clases.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId109"
    });
    $.__views.__alloyId108.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId110"
    });
    $.__views.clases.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createLabel({
        text: "11:00",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId112"
    });
    $.__views.clases.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId113"
    });
    $.__views.__alloyId112.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId114"
    });
    $.__views.clases.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId116"
    });
    $.__views.clases.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId118"
    });
    $.__views.clases.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId120"
    });
    $.__views.clases.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId122"
    });
    $.__views.clases.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId124"
    });
    $.__views.clases.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
        text: "12:00",
        id: "__alloyId125"
    });
    $.__views.__alloyId124.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId126"
    });
    $.__views.clases.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId127"
    });
    $.__views.__alloyId126.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId128"
    });
    $.__views.clases.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId130"
    });
    $.__views.clases.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId132"
    });
    $.__views.clases.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId133"
    });
    $.__views.__alloyId132.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId134"
    });
    $.__views.clases.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId135"
    });
    $.__views.__alloyId134.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId136"
    });
    $.__views.clases.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId137"
    });
    $.__views.__alloyId136.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId138"
    });
    $.__views.clases.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createLabel({
        text: "13:00",
        id: "__alloyId139"
    });
    $.__views.__alloyId138.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId140"
    });
    $.__views.clases.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId141"
    });
    $.__views.__alloyId140.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId142"
    });
    $.__views.clases.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId144"
    });
    $.__views.clases.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId145"
    });
    $.__views.__alloyId144.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId146"
    });
    $.__views.clases.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId148"
    });
    $.__views.clases.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId149"
    });
    $.__views.__alloyId148.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId150"
    });
    $.__views.clases.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId151"
    });
    $.__views.__alloyId150.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId152"
    });
    $.__views.clases.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createLabel({
        text: "14:00",
        id: "__alloyId153"
    });
    $.__views.__alloyId152.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId154"
    });
    $.__views.clases.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId155"
    });
    $.__views.__alloyId154.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId156"
    });
    $.__views.clases.add($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId157"
    });
    $.__views.__alloyId156.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId158"
    });
    $.__views.clases.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId159"
    });
    $.__views.__alloyId158.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId160"
    });
    $.__views.clases.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId161"
    });
    $.__views.__alloyId160.add($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId162"
    });
    $.__views.clases.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId163"
    });
    $.__views.__alloyId162.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId164"
    });
    $.__views.clases.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId165"
    });
    $.__views.__alloyId164.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId166"
    });
    $.__views.clases.add($.__views.__alloyId166);
    $.__views.__alloyId167 = Ti.UI.createLabel({
        text: "15:00",
        id: "__alloyId167"
    });
    $.__views.__alloyId166.add($.__views.__alloyId167);
    $.__views.__alloyId168 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId168"
    });
    $.__views.clases.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId169"
    });
    $.__views.__alloyId168.add($.__views.__alloyId169);
    $.__views.__alloyId170 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId170"
    });
    $.__views.clases.add($.__views.__alloyId170);
    $.__views.__alloyId171 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId171"
    });
    $.__views.__alloyId170.add($.__views.__alloyId171);
    $.__views.__alloyId172 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId172"
    });
    $.__views.clases.add($.__views.__alloyId172);
    $.__views.__alloyId173 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId173"
    });
    $.__views.__alloyId172.add($.__views.__alloyId173);
    $.__views.__alloyId174 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId174"
    });
    $.__views.clases.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId175"
    });
    $.__views.__alloyId174.add($.__views.__alloyId175);
    $.__views.__alloyId176 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId176"
    });
    $.__views.clases.add($.__views.__alloyId176);
    $.__views.__alloyId177 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId177"
    });
    $.__views.__alloyId176.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId178"
    });
    $.__views.clases.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId179"
    });
    $.__views.__alloyId178.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId180"
    });
    $.__views.clases.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createLabel({
        text: "16:00",
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId182"
    });
    $.__views.clases.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId183"
    });
    $.__views.__alloyId182.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId184"
    });
    $.__views.clases.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId185"
    });
    $.__views.__alloyId184.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId186"
    });
    $.__views.clases.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId187"
    });
    $.__views.__alloyId186.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId188"
    });
    $.__views.clases.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId189"
    });
    $.__views.__alloyId188.add($.__views.__alloyId189);
    $.__views.__alloyId190 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId190"
    });
    $.__views.clases.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.__alloyId192 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId192"
    });
    $.__views.clases.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId193"
    });
    $.__views.__alloyId192.add($.__views.__alloyId193);
    $.__views.__alloyId194 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId194"
    });
    $.__views.clases.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
        text: "17:00",
        id: "__alloyId195"
    });
    $.__views.__alloyId194.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId196"
    });
    $.__views.clases.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
    $.__views.__alloyId198 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId198"
    });
    $.__views.clases.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId199"
    });
    $.__views.__alloyId198.add($.__views.__alloyId199);
    $.__views.__alloyId200 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId200"
    });
    $.__views.clases.add($.__views.__alloyId200);
    $.__views.__alloyId201 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId201"
    });
    $.__views.__alloyId200.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId202"
    });
    $.__views.clases.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId203"
    });
    $.__views.__alloyId202.add($.__views.__alloyId203);
    $.__views.__alloyId204 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId204"
    });
    $.__views.clases.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId205"
    });
    $.__views.__alloyId204.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId206"
    });
    $.__views.clases.add($.__views.__alloyId206);
    $.__views.__alloyId207 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId207"
    });
    $.__views.__alloyId206.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId208"
    });
    $.__views.clases.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createLabel({
        text: "18:00",
        id: "__alloyId209"
    });
    $.__views.__alloyId208.add($.__views.__alloyId209);
    $.__views.__alloyId210 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId210"
    });
    $.__views.clases.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId211"
    });
    $.__views.__alloyId210.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId212"
    });
    $.__views.clases.add($.__views.__alloyId212);
    $.__views.__alloyId213 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId213"
    });
    $.__views.__alloyId212.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId214"
    });
    $.__views.clases.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId215"
    });
    $.__views.__alloyId214.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId216"
    });
    $.__views.clases.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId217"
    });
    $.__views.__alloyId216.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId218"
    });
    $.__views.clases.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId219"
    });
    $.__views.__alloyId218.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId220"
    });
    $.__views.clases.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId221"
    });
    $.__views.__alloyId220.add($.__views.__alloyId221);
    $.__views.__alloyId222 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId222"
    });
    $.__views.clases.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createLabel({
        text: "19:00",
        id: "__alloyId223"
    });
    $.__views.__alloyId222.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId224"
    });
    $.__views.clases.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId225"
    });
    $.__views.__alloyId224.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId226"
    });
    $.__views.clases.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId227"
    });
    $.__views.__alloyId226.add($.__views.__alloyId227);
    $.__views.__alloyId228 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId228"
    });
    $.__views.clases.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId229"
    });
    $.__views.__alloyId228.add($.__views.__alloyId229);
    $.__views.__alloyId230 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId230"
    });
    $.__views.clases.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId231"
    });
    $.__views.__alloyId230.add($.__views.__alloyId231);
    $.__views.__alloyId232 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId232"
    });
    $.__views.clases.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId233"
    });
    $.__views.__alloyId232.add($.__views.__alloyId233);
    $.__views.__alloyId234 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId234"
    });
    $.__views.clases.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId235"
    });
    $.__views.__alloyId234.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId236"
    });
    $.__views.clases.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createLabel({
        text: "20:00",
        id: "__alloyId237"
    });
    $.__views.__alloyId236.add($.__views.__alloyId237);
    $.__views.__alloyId238 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId238"
    });
    $.__views.clases.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId239"
    });
    $.__views.__alloyId238.add($.__views.__alloyId239);
    $.__views.__alloyId240 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId240"
    });
    $.__views.clases.add($.__views.__alloyId240);
    $.__views.__alloyId241 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId241"
    });
    $.__views.__alloyId240.add($.__views.__alloyId241);
    $.__views.__alloyId242 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId242"
    });
    $.__views.clases.add($.__views.__alloyId242);
    $.__views.__alloyId243 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId243"
    });
    $.__views.__alloyId242.add($.__views.__alloyId243);
    $.__views.__alloyId244 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId244"
    });
    $.__views.clases.add($.__views.__alloyId244);
    $.__views.__alloyId245 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId245"
    });
    $.__views.__alloyId244.add($.__views.__alloyId245);
    $.__views.__alloyId246 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId246"
    });
    $.__views.clases.add($.__views.__alloyId246);
    $.__views.__alloyId247 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId247"
    });
    $.__views.__alloyId246.add($.__views.__alloyId247);
    $.__views.__alloyId248 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId248"
    });
    $.__views.clases.add($.__views.__alloyId248);
    $.__views.__alloyId249 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId249"
    });
    $.__views.__alloyId248.add($.__views.__alloyId249);
    $.__views.__alloyId250 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId250"
    });
    $.__views.clases.add($.__views.__alloyId250);
    $.__views.__alloyId251 = Ti.UI.createLabel({
        text: "21:00",
        id: "__alloyId251"
    });
    $.__views.__alloyId250.add($.__views.__alloyId251);
    $.__views.__alloyId252 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId252"
    });
    $.__views.clases.add($.__views.__alloyId252);
    $.__views.__alloyId253 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId253"
    });
    $.__views.__alloyId252.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId254"
    });
    $.__views.clases.add($.__views.__alloyId254);
    $.__views.__alloyId255 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId255"
    });
    $.__views.__alloyId254.add($.__views.__alloyId255);
    $.__views.__alloyId256 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId256"
    });
    $.__views.clases.add($.__views.__alloyId256);
    $.__views.__alloyId257 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId257"
    });
    $.__views.__alloyId256.add($.__views.__alloyId257);
    $.__views.__alloyId258 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId258"
    });
    $.__views.clases.add($.__views.__alloyId258);
    $.__views.__alloyId259 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId259"
    });
    $.__views.__alloyId258.add($.__views.__alloyId259);
    $.__views.__alloyId260 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId260"
    });
    $.__views.clases.add($.__views.__alloyId260);
    $.__views.__alloyId261 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId261"
    });
    $.__views.__alloyId260.add($.__views.__alloyId261);
    $.__views.__alloyId262 = Ti.UI.createView({
        width: "14%",
        height: "25dp",
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        color: "#000",
        id: "__alloyId262"
    });
    $.__views.clases.add($.__views.__alloyId262);
    $.__views.__alloyId263 = Ti.UI.createLabel({
        text: "",
        id: "__alloyId263"
    });
    $.__views.__alloyId262.add($.__views.__alloyId263);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId32!click!showAgenda"] && $.__views.__alloyId32.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId36!click!showNewsAll"] && $.__views.__alloyId36.addEventListener("click", showNewsAll);
    __defers["$.__views.__alloyId38!click!showVida"] && $.__views.__alloyId38.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;