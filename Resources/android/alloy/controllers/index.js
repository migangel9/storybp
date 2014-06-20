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
    function showNewsAll() {
        var win = Alloy.createController("index").getView();
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
    function showMercado() {
        var win = Alloy.createController("loboMercado").getView();
        win.open();
    }
    function showAlerta() {
        $.dialog.show();
    }
    function doClick(e) {
        Ti.API.info("e.text: " + e.text);
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
    $.__views.__alloyId264 = Ti.UI.createView({
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
        id: "__alloyId264"
    });
    $.__views.options.add($.__views.__alloyId264);
    $.__views.__alloyId265 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId265"
    });
    $.__views.__alloyId264.add($.__views.__alloyId265);
    $.__views.__alloyId266 = Ti.UI.createView({
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
        id: "__alloyId266"
    });
    $.__views.options.add($.__views.__alloyId266);
    showAgenda ? $.__views.__alloyId266.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId266!click!showAgenda"] = true;
    $.__views.__alloyId267 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId267"
    });
    $.__views.__alloyId266.add($.__views.__alloyId267);
    $.__views.__alloyId268 = Ti.UI.createView({
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
        id: "__alloyId268"
    });
    $.__views.options.add($.__views.__alloyId268);
    $.__views.__alloyId269 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId269"
    });
    $.__views.__alloyId268.add($.__views.__alloyId269);
    $.__views.__alloyId270 = Ti.UI.createView({
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
        id: "__alloyId270"
    });
    $.__views.options.add($.__views.__alloyId270);
    showNewsAll ? $.__views.__alloyId270.addEventListener("click", showNewsAll) : __defers["$.__views.__alloyId270!click!showNewsAll"] = true;
    $.__views.__alloyId271 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId271"
    });
    $.__views.__alloyId270.add($.__views.__alloyId271);
    $.__views.__alloyId272 = Ti.UI.createView({
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
        id: "__alloyId272"
    });
    $.__views.options.add($.__views.__alloyId272);
    showVida ? $.__views.__alloyId272.addEventListener("click", showVida) : __defers["$.__views.__alloyId272!click!showVida"] = true;
    $.__views.__alloyId273 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId273"
    });
    $.__views.__alloyId272.add($.__views.__alloyId273);
    $.__views.__alloyId274 = Ti.UI.createView({
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
        id: "__alloyId274"
    });
    $.__views.options.add($.__views.__alloyId274);
    showMercado ? $.__views.__alloyId274.addEventListener("click", showMercado) : __defers["$.__views.__alloyId274!click!showMercado"] = true;
    $.__views.__alloyId275 = Ti.UI.createLabel({
        text: "Lobo Mercado",
        id: "__alloyId275"
    });
    $.__views.__alloyId274.add($.__views.__alloyId275);
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
        backgroundColor: "#575757",
        width: Ti.UI.FILL,
        height: "30",
        id: "menuBar"
    });
    $.__views.main.add($.__views.menuBar);
    $.__views.__alloyId276 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "30",
        id: "__alloyId276"
    });
    $.__views.menuBar.add($.__views.__alloyId276);
    $.__views.tituloLbl = Ti.UI.createLabel({
        left: 5,
        color: "#fff",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        text: "Noticias",
        id: "tituloLbl"
    });
    $.__views.__alloyId276.add($.__views.tituloLbl);
    $.__views.pickerNoticias = Ti.UI.createPicker({
        right: 25,
        height: 30,
        id: "pickerNoticias",
        selectionIndicator: "true"
    });
    $.__views.__alloyId276.add($.__views.pickerNoticias);
    var __alloyId277 = [];
    $.__views.columnPickerNoticias = Ti.UI.createPickerColumn({
        backgroudImage: "/images/catBtn.png",
        backgroundColor: "#575757",
        id: "columnPickerNoticias"
    });
    __alloyId277.push($.__views.columnPickerNoticias);
    $.__views.__alloyId278 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Todas",
        id: "__alloyId278"
    });
    $.__views.columnPickerNoticias.addRow($.__views.__alloyId278);
    $.__views.__alloyId279 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Eventos Academicos",
        id: "__alloyId279"
    });
    $.__views.columnPickerNoticias.addRow($.__views.__alloyId279);
    $.__views.__alloyId280 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Eventos Deportivos",
        id: "__alloyId280"
    });
    $.__views.columnPickerNoticias.addRow($.__views.__alloyId280);
    $.__views.__alloyId281 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Rectoria",
        id: "__alloyId281"
    });
    $.__views.columnPickerNoticias.addRow($.__views.__alloyId281);
    $.__views.pickerNoticias.add(__alloyId277);
    $.__views.filterBtn = Ti.UI.createImageView({
        width: "19",
        height: "19",
        right: 5,
        image: "/images/catBtn.png",
        id: "filterBtn"
    });
    $.__views.__alloyId276.add($.__views.filterBtn);
    var __alloyId282 = [];
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId282.push($.__views.listRow);
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
        width: "26",
        height: "26",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, mi sed molestie interdum, sem libero egestas leo, at elementum mauris massa sed dui. Ut id porta arcu, at scelerisque dui...",
        id: "news"
    });
    $.__views.rowContainer.add($.__views.news);
    $.__views.bottomActions = Ti.UI.createView({
        borderColor: "#cacdd8",
        borderRadius: 5,
        borderWidht: 1,
        bottom: 0,
        left: "5",
        right: "5",
        height: "30",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        id: "bottomActions"
    });
    $.__views.listRow.add($.__views.bottomActions);
    $.__views.starBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: 0,
        image: "/images/starBtn_a.png",
        id: "starBtn"
    });
    $.__views.bottomActions.add($.__views.starBtn);
    showAlerta ? $.__views.starBtn.addEventListener("click", showAlerta) : __defers["$.__views.starBtn!click!showAlerta"] = true;
    $.__views.confirmBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: 30,
        image: "/images/confirmBtn.png",
        id: "confirmBtn"
    });
    $.__views.bottomActions.add($.__views.confirmBtn);
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId282.push($.__views.listRow);
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
    $.__views.nameDependency = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#003b5d",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Deportes",
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
        width: "26",
        height: "26",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, mi sed molestie interdum, sem libero egestas leo, at elementum mauris massa sed dui. Ut id porta arcu, at scelerisque dui...",
        id: "news"
    });
    $.__views.rowContainer.add($.__views.news);
    $.__views.bottomActions = Ti.UI.createView({
        borderColor: "#cacdd8",
        borderRadius: 5,
        borderWidht: 1,
        bottom: 0,
        left: "5",
        right: "5",
        height: "30",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        id: "bottomActions"
    });
    $.__views.listRow.add($.__views.bottomActions);
    $.__views.starBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: 0,
        image: "/images/starBtn_a.png",
        id: "starBtn"
    });
    $.__views.bottomActions.add($.__views.starBtn);
    showAlerta ? $.__views.starBtn.addEventListener("click", showAlerta) : __defers["$.__views.starBtn!click!showAlerta"] = true;
    $.__views.confirmBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: 30,
        image: "/images/confirmBtn.png",
        id: "confirmBtn"
    });
    $.__views.bottomActions.add($.__views.confirmBtn);
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId282.push($.__views.listRow);
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
    $.__views.nameDependency = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#003b5d",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Diplomado",
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
        width: "26",
        height: "26",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, mi sed molestie interdum, sem libero egestas leo, at elementum mauris massa sed dui. Ut id porta arcu, at scelerisque dui...",
        id: "news"
    });
    $.__views.rowContainer.add($.__views.news);
    $.__views.bottomActions = Ti.UI.createView({
        borderColor: "#cacdd8",
        borderRadius: 5,
        borderWidht: 1,
        bottom: 0,
        left: "5",
        right: "5",
        height: "30",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        id: "bottomActions"
    });
    $.__views.listRow.add($.__views.bottomActions);
    $.__views.starBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: 0,
        image: "/images/starBtn_a.png",
        id: "starBtn"
    });
    $.__views.bottomActions.add($.__views.starBtn);
    showAlerta ? $.__views.starBtn.addEventListener("click", showAlerta) : __defers["$.__views.starBtn!click!showAlerta"] = true;
    $.__views.confirmBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: 30,
        image: "/images/confirmBtn.png",
        id: "confirmBtn"
    });
    $.__views.bottomActions.add($.__views.confirmBtn);
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId282.push($.__views.listRow);
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
    $.__views.nameDependency = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#003b5d",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Eventos",
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
        width: "26",
        height: "26",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, mi sed molestie interdum, sem libero egestas leo, at elementum mauris massa sed dui. Ut id porta arcu, at scelerisque dui...",
        id: "news"
    });
    $.__views.rowContainer.add($.__views.news);
    $.__views.bottomActions = Ti.UI.createView({
        borderColor: "#cacdd8",
        borderRadius: 5,
        borderWidht: 1,
        bottom: 0,
        left: "5",
        right: "5",
        height: "30",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        id: "bottomActions"
    });
    $.__views.listRow.add($.__views.bottomActions);
    $.__views.starBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: 0,
        image: "/images/starBtn_a.png",
        id: "starBtn"
    });
    $.__views.bottomActions.add($.__views.starBtn);
    showAlerta ? $.__views.starBtn.addEventListener("click", showAlerta) : __defers["$.__views.starBtn!click!showAlerta"] = true;
    $.__views.confirmBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: 30,
        image: "/images/confirmBtn.png",
        id: "confirmBtn"
    });
    $.__views.bottomActions.add($.__views.confirmBtn);
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId282.push($.__views.listRow);
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
        width: "26",
        height: "26",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, mi sed molestie interdum, sem libero egestas leo, at elementum mauris massa sed dui. Ut id porta arcu, at scelerisque dui...",
        id: "news"
    });
    $.__views.rowContainer.add($.__views.news);
    $.__views.bottomActions = Ti.UI.createView({
        borderColor: "#cacdd8",
        borderRadius: 5,
        borderWidht: 1,
        bottom: 0,
        left: "5",
        right: "5",
        height: "30",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        id: "bottomActions"
    });
    $.__views.listRow.add($.__views.bottomActions);
    $.__views.starBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: 0,
        image: "/images/starBtn_a.png",
        id: "starBtn"
    });
    $.__views.bottomActions.add($.__views.starBtn);
    showAlerta ? $.__views.starBtn.addEventListener("click", showAlerta) : __defers["$.__views.starBtn!click!showAlerta"] = true;
    $.__views.confirmBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: 30,
        image: "/images/confirmBtn.png",
        id: "confirmBtn"
    });
    $.__views.bottomActions.add($.__views.confirmBtn);
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "200",
        selectionStyle: "NONE",
        id: "listRow"
    });
    __alloyId282.push($.__views.listRow);
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
    $.__views.nameDependency = Ti.UI.createLabel({
        top: "5",
        left: "5",
        color: "#003b5d",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "CCU",
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
        width: "26",
        height: "26",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida, mi sed molestie interdum, sem libero egestas leo, at elementum mauris massa sed dui. Ut id porta arcu, at scelerisque dui...",
        id: "news"
    });
    $.__views.rowContainer.add($.__views.news);
    $.__views.bottomActions = Ti.UI.createView({
        borderColor: "#cacdd8",
        borderRadius: 5,
        borderWidht: 1,
        bottom: 0,
        left: "5",
        right: "5",
        height: "30",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        id: "bottomActions"
    });
    $.__views.listRow.add($.__views.bottomActions);
    $.__views.starBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: 0,
        image: "/images/starBtn_a.png",
        id: "starBtn"
    });
    $.__views.bottomActions.add($.__views.starBtn);
    showAlerta ? $.__views.starBtn.addEventListener("click", showAlerta) : __defers["$.__views.starBtn!click!showAlerta"] = true;
    $.__views.confirmBtn = Ti.UI.createImageView({
        width: "25",
        heigth: "25",
        right: 30,
        image: "/images/confirmBtn.png",
        id: "confirmBtn"
    });
    $.__views.bottomActions.add($.__views.confirmBtn);
    $.__views.mainList = Ti.UI.createTableView({
        backgroundColor: "#D4D6DA",
        separatorStyle: "NONE",
        data: __alloyId282,
        id: "mainList"
    });
    $.__views.main.add($.__views.mainList);
    var __alloyId284 = [];
    __alloyId284.push("Aceptar");
    __alloyId284.push("Cancelar");
    $.__views.dialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId284,
        id: "dialog",
        title: "Agendando",
        message: "El evento se agregara a tu agenda.",
        cancel: "1"
    });
    doClick ? $.__views.dialog.addEventListener("click", doClick) : __defers["$.__views.dialog!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId266!click!showAgenda"] && $.__views.__alloyId266.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId270!click!showNewsAll"] && $.__views.__alloyId270.addEventListener("click", showNewsAll);
    __defers["$.__views.__alloyId272!click!showVida"] && $.__views.__alloyId272.addEventListener("click", showVida);
    __defers["$.__views.__alloyId274!click!showMercado"] && $.__views.__alloyId274.addEventListener("click", showMercado);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.rowContainer!click!showNews"] && $.__views.rowContainer.addEventListener("click", showNews);
    __defers["$.__views.starBtn!click!showAlerta"] && $.__views.starBtn.addEventListener("click", showAlerta);
    __defers["$.__views.rowContainer!click!showNews"] && $.__views.rowContainer.addEventListener("click", showNews);
    __defers["$.__views.starBtn!click!showAlerta"] && $.__views.starBtn.addEventListener("click", showAlerta);
    __defers["$.__views.rowContainer!click!showNews"] && $.__views.rowContainer.addEventListener("click", showNews);
    __defers["$.__views.starBtn!click!showAlerta"] && $.__views.starBtn.addEventListener("click", showAlerta);
    __defers["$.__views.rowContainer!click!showNews"] && $.__views.rowContainer.addEventListener("click", showNews);
    __defers["$.__views.starBtn!click!showAlerta"] && $.__views.starBtn.addEventListener("click", showAlerta);
    __defers["$.__views.rowContainer!click!showNews"] && $.__views.rowContainer.addEventListener("click", showNews);
    __defers["$.__views.starBtn!click!showAlerta"] && $.__views.starBtn.addEventListener("click", showAlerta);
    __defers["$.__views.rowContainer!click!showNews"] && $.__views.rowContainer.addEventListener("click", showNews);
    __defers["$.__views.starBtn!click!showAlerta"] && $.__views.starBtn.addEventListener("click", showAlerta);
    __defers["$.__views.dialog!click!doClick"] && $.__views.dialog.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;