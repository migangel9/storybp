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
    function showAgendaClases(e) {
        Ti.API.info("Se selecciono: " + e.value);
        var win = Alloy.createController("agendaClases").getView();
        win.open();
    }
    function showAlertaPublico() {
        $.eventoPublico.show();
    }
    function showAlerta() {
        $.dialog.show();
    }
    function doClick(e) {
        Ti.API.info("e.text: " + e.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "agenda";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.agenda = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        fullscreen: false,
        navBarHidden: true,
        id: "agenda"
    });
    $.__views.agenda && $.addTopLevelView($.__views.agenda);
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.agenda.add($.__views.menu);
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
    $.__views.__alloyId0 = Ti.UI.createView({
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
        id: "__alloyId0"
    });
    $.__views.options.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
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
        id: "__alloyId2"
    });
    $.__views.options.add($.__views.__alloyId2);
    showAgenda ? $.__views.__alloyId2.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId2!click!showAgenda"] = true;
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
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
        id: "__alloyId4"
    });
    $.__views.options.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
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
        id: "__alloyId6"
    });
    $.__views.options.add($.__views.__alloyId6);
    showNewsAll ? $.__views.__alloyId6.addEventListener("click", showNewsAll) : __defers["$.__views.__alloyId6!click!showNewsAll"] = true;
    $.__views.__alloyId7 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
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
        id: "__alloyId8"
    });
    $.__views.options.add($.__views.__alloyId8);
    showVida ? $.__views.__alloyId8.addEventListener("click", showVida) : __defers["$.__views.__alloyId8!click!showVida"] = true;
    $.__views.__alloyId9 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.main = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#D2D2D2",
        left: 0,
        layout: "vertical",
        id: "main"
    });
    $.__views.agenda.add($.__views.main);
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
    $.__views.__alloyId10 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "30",
        id: "__alloyId10"
    });
    $.__views.menuBar.add($.__views.__alloyId10);
    $.__views.tituloLbl = Ti.UI.createLabel({
        left: 5,
        color: "#fff",
        font: {
            fontSize: "20",
            fontWeight: "bold"
        },
        text: "Agenda",
        id: "tituloLbl"
    });
    $.__views.__alloyId10.add($.__views.tituloLbl);
    $.__views.pickerAgenda = Ti.UI.createPicker({
        height: 30,
        id: "pickerAgenda",
        selectionIndicator: "true"
    });
    $.__views.__alloyId10.add($.__views.pickerAgenda);
    var __alloyId11 = [];
    $.__views.columnPickerAgenda = Ti.UI.createPickerColumn({
        backgroudImage: "/images/catBtn.png",
        backgroundColor: "#575757",
        id: "columnPickerAgenda"
    });
    __alloyId11.push($.__views.columnPickerAgenda);
    $.__views.__alloyId12 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Todos",
        id: "__alloyId12"
    });
    $.__views.columnPickerAgenda.addRow($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Eventos BUAP",
        id: "__alloyId13"
    });
    $.__views.columnPickerAgenda.addRow($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Eventos Personales",
        id: "__alloyId14"
    });
    $.__views.columnPickerAgenda.addRow($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Añadidos a calendario",
        id: "__alloyId15"
    });
    $.__views.columnPickerAgenda.addRow($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createPickerRow({
        backgroundColor: "#575757",
        title: "Clases",
        id: "__alloyId16"
    });
    $.__views.columnPickerAgenda.addRow($.__views.__alloyId16);
    $.__views.pickerAgenda.add(__alloyId11);
    $.__views.pickerMenu = Ti.UI.createPicker({
        id: "pickerMenu",
        right: "0",
        selectionIndicator: "true",
        width: "30"
    });
    $.__views.__alloyId10.add($.__views.pickerMenu);
    var __alloyId17 = [];
    $.__views.columnPickerMenu = Ti.UI.createPickerColumn({
        id: "columnPickerMenu"
    });
    __alloyId17.push($.__views.columnPickerMenu);
    $.__views.__alloyId18 = Ti.UI.createPickerRow({
        title: "Crear nuevo Evento Personal",
        id: "__alloyId18"
    });
    $.__views.columnPickerMenu.addRow($.__views.__alloyId18);
    showAgendaClases ? $.__views.__alloyId18.addEventListener("change", showAgendaClases) : __defers["$.__views.__alloyId18!change!showAgendaClases"] = true;
    $.__views.__alloyId19 = Ti.UI.createPickerRow({
        title: "Configurar horario de clases",
        id: "__alloyId19"
    });
    $.__views.columnPickerMenu.addRow($.__views.__alloyId19);
    showAgendaClases ? $.__views.__alloyId19.addEventListener("change", showAgendaClases) : __defers["$.__views.__alloyId19!change!showAgendaClases"] = true;
    $.__views.__alloyId20 = Ti.UI.createPickerRow({
        title: "Configurar notificaciones",
        id: "__alloyId20"
    });
    $.__views.columnPickerMenu.addRow($.__views.__alloyId20);
    showAgendaClases ? $.__views.__alloyId20.addEventListener("change", showAgendaClases) : __defers["$.__views.__alloyId20!change!showAgendaClases"] = true;
    $.__views.pickerMenu.add(__alloyId17);
    var __alloyId21 = [];
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "70dp",
        backgroundColor: "#fff",
        focusable: true,
        id: "listRow"
    });
    __alloyId21.push($.__views.listRow);
    $.__views.publicBtn = Ti.UI.createImageView({
        left: 0,
        height: "30dp",
        width: "30dp",
        id: "publicBtn",
        image: "/images/tick_64.png"
    });
    $.__views.listRow.add($.__views.publicBtn);
    showAlertaPublico ? $.__views.publicBtn.addEventListener("click", showAlertaPublico) : __defers["$.__views.publicBtn!click!showAlertaPublico"] = true;
    $.__views.eventoLbl = Ti.UI.createLabel({
        top: "5",
        left: "35",
        right: "35",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Clase de Ecuaciones Diferenciales",
        id: "eventoLbl"
    });
    $.__views.listRow.add($.__views.eventoLbl);
    $.__views.fechaLbl = Ti.UI.createLabel({
        top: "25",
        left: "35",
        right: "35",
        color: "#1A2480",
        font: {
            fontSize: "14"
        },
        text: "Fecha: 09.09.2014, 7:00-9:00 am",
        id: "fechaLbl"
    });
    $.__views.listRow.add($.__views.fechaLbl);
    $.__views.lugarLbl = Ti.UI.createLabel({
        top: "45",
        left: "35",
        right: "35",
        color: "#1A2480",
        font: {
            fontSize: "14"
        },
        text: "Lugar: Edificio Carolino salon S3",
        id: "lugarLbl"
    });
    $.__views.listRow.add($.__views.lugarLbl);
    $.__views.agendarBtn = Ti.UI.createImageView({
        right: 0,
        height: "30dp",
        width: "30dp",
        id: "agendarBtn",
        image: "/images/agendaBtn.png"
    });
    $.__views.listRow.add($.__views.agendarBtn);
    showAlerta ? $.__views.agendarBtn.addEventListener("click", showAlerta) : __defers["$.__views.agendarBtn!click!showAlerta"] = true;
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "70dp",
        backgroundColor: "#fff",
        focusable: true,
        id: "listRow"
    });
    __alloyId21.push($.__views.listRow);
    $.__views.publicBtn = Ti.UI.createImageView({
        left: 0,
        height: "30dp",
        width: "30dp",
        id: "publicBtn",
        image: "/images/tick_gray_64.png"
    });
    $.__views.listRow.add($.__views.publicBtn);
    showAlertaPublico ? $.__views.publicBtn.addEventListener("click", showAlertaPublico) : __defers["$.__views.publicBtn!click!showAlertaPublico"] = true;
    $.__views.eventoLbl = Ti.UI.createLabel({
        top: "5",
        left: "35",
        right: "35",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Conferencia Activa tu mente",
        id: "eventoLbl"
    });
    $.__views.listRow.add($.__views.eventoLbl);
    $.__views.fechaLbl = Ti.UI.createLabel({
        top: "25",
        left: "35",
        right: "35",
        color: "#1A2480",
        font: {
            fontSize: "14"
        },
        text: "Fecha/Hora: 09/09/2014, 7:00-9:00 am",
        id: "fechaLbl"
    });
    $.__views.listRow.add($.__views.fechaLbl);
    $.__views.lugarLbl = Ti.UI.createLabel({
        top: "45",
        left: "35",
        right: "35",
        color: "#1A2480",
        font: {
            fontSize: "14"
        },
        text: "Lugar: Edificio Carolino salon S3",
        id: "lugarLbl"
    });
    $.__views.listRow.add($.__views.lugarLbl);
    $.__views.agendarBtn = Ti.UI.createImageView({
        right: 0,
        height: "30dp",
        width: "30dp",
        id: "agendarBtn",
        image: "/images/agendaBtn.png"
    });
    $.__views.listRow.add($.__views.agendarBtn);
    showAlerta ? $.__views.agendarBtn.addEventListener("click", showAlerta) : __defers["$.__views.agendarBtn!click!showAlerta"] = true;
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "70dp",
        backgroundColor: "#fff",
        focusable: true,
        id: "listRow"
    });
    __alloyId21.push($.__views.listRow);
    $.__views.publicBtn = Ti.UI.createImageView({
        left: 0,
        height: "30dp",
        width: "30dp",
        id: "publicBtn",
        image: "/images/tick_gray_64.png"
    });
    $.__views.listRow.add($.__views.publicBtn);
    showAlertaPublico ? $.__views.publicBtn.addEventListener("click", showAlertaPublico) : __defers["$.__views.publicBtn!click!showAlertaPublico"] = true;
    $.__views.eventoLbl = Ti.UI.createLabel({
        top: "5",
        left: "35",
        right: "35",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Clase de Programación I",
        id: "eventoLbl"
    });
    $.__views.listRow.add($.__views.eventoLbl);
    $.__views.fechaLbl = Ti.UI.createLabel({
        top: "25",
        left: "35",
        right: "35",
        color: "#1A2480",
        font: {
            fontSize: "14"
        },
        text: "Fecha/Hora: 09/09/2014, 7:00-9:00 am",
        id: "fechaLbl"
    });
    $.__views.listRow.add($.__views.fechaLbl);
    $.__views.lugarLbl = Ti.UI.createLabel({
        top: "45",
        left: "35",
        right: "35",
        color: "#1A2480",
        font: {
            fontSize: "14"
        },
        text: "Lugar: Edificio Carolino salon S3",
        id: "lugarLbl"
    });
    $.__views.listRow.add($.__views.lugarLbl);
    $.__views.agendarBtn = Ti.UI.createImageView({
        right: 0,
        height: "30dp",
        width: "30dp",
        id: "agendarBtn",
        image: "/images/agendaBtn.png"
    });
    $.__views.listRow.add($.__views.agendarBtn);
    showAlerta ? $.__views.agendarBtn.addEventListener("click", showAlerta) : __defers["$.__views.agendarBtn!click!showAlerta"] = true;
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "70dp",
        backgroundColor: "#fff",
        focusable: true,
        id: "listRow"
    });
    __alloyId21.push($.__views.listRow);
    $.__views.publicBtn = Ti.UI.createImageView({
        left: 0,
        height: "30dp",
        width: "30dp",
        id: "publicBtn",
        image: "/images/tick_64.png"
    });
    $.__views.listRow.add($.__views.publicBtn);
    showAlertaPublico ? $.__views.publicBtn.addEventListener("click", showAlertaPublico) : __defers["$.__views.publicBtn!click!showAlertaPublico"] = true;
    $.__views.eventoLbl = Ti.UI.createLabel({
        top: "5",
        left: "35",
        right: "35",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Partido Futbol Lobos BUAP",
        id: "eventoLbl"
    });
    $.__views.listRow.add($.__views.eventoLbl);
    $.__views.fechaLbl = Ti.UI.createLabel({
        top: "25",
        left: "35",
        right: "35",
        color: "#1A2480",
        font: {
            fontSize: "14"
        },
        text: "Fecha/Hora: 09/09/2014, 7:00-9:00 am",
        id: "fechaLbl"
    });
    $.__views.listRow.add($.__views.fechaLbl);
    $.__views.lugarLbl = Ti.UI.createLabel({
        top: "45",
        left: "35",
        right: "35",
        color: "#1A2480",
        font: {
            fontSize: "14"
        },
        text: "Lugar: Edificio Carolino salon S3",
        id: "lugarLbl"
    });
    $.__views.listRow.add($.__views.lugarLbl);
    $.__views.agendarBtn = Ti.UI.createImageView({
        right: 0,
        height: "30dp",
        width: "30dp",
        id: "agendarBtn",
        image: "/images/agendaBtn.png"
    });
    $.__views.listRow.add($.__views.agendarBtn);
    showAlerta ? $.__views.agendarBtn.addEventListener("click", showAlerta) : __defers["$.__views.agendarBtn!click!showAlerta"] = true;
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "70dp",
        backgroundColor: "#fff",
        focusable: true,
        id: "listRow"
    });
    __alloyId21.push($.__views.listRow);
    $.__views.publicBtn = Ti.UI.createImageView({
        left: 0,
        height: "30dp",
        width: "30dp",
        id: "publicBtn",
        image: "/images/tick_64.png"
    });
    $.__views.listRow.add($.__views.publicBtn);
    showAlertaPublico ? $.__views.publicBtn.addEventListener("click", showAlertaPublico) : __defers["$.__views.publicBtn!click!showAlertaPublico"] = true;
    $.__views.eventoLbl = Ti.UI.createLabel({
        top: "5",
        left: "35",
        right: "35",
        color: "#000",
        font: {
            fontSize: "16",
            fontWeight: "bold"
        },
        text: "Clase de Aleman A1",
        id: "eventoLbl"
    });
    $.__views.listRow.add($.__views.eventoLbl);
    $.__views.fechaLbl = Ti.UI.createLabel({
        top: "25",
        left: "35",
        right: "35",
        color: "#1A2480",
        font: {
            fontSize: "14"
        },
        text: "Fecha/Hora: 09/09/2014, 7:00-9:00 am",
        id: "fechaLbl"
    });
    $.__views.listRow.add($.__views.fechaLbl);
    $.__views.lugarLbl = Ti.UI.createLabel({
        top: "45",
        left: "35",
        right: "35",
        color: "#1A2480",
        font: {
            fontSize: "14"
        },
        text: "Lugar: Edificio Carolino salon S3",
        id: "lugarLbl"
    });
    $.__views.listRow.add($.__views.lugarLbl);
    $.__views.agendarBtn = Ti.UI.createImageView({
        right: 0,
        height: "30dp",
        width: "30dp",
        id: "agendarBtn",
        image: "/images/agendaBtn.png"
    });
    $.__views.listRow.add($.__views.agendarBtn);
    showAlerta ? $.__views.agendarBtn.addEventListener("click", showAlerta) : __defers["$.__views.agendarBtn!click!showAlerta"] = true;
    $.__views.mainList = Ti.UI.createTableView({
        backgroundColor: "#D4D6DA",
        separatorStyle: "NONE",
        data: __alloyId21,
        id: "mainList"
    });
    $.__views.main.add($.__views.mainList);
    var __alloyId23 = [];
    __alloyId23.push("Aceptar");
    __alloyId23.push("Cancelar");
    $.__views.dialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId23,
        id: "dialog",
        title: "Agregar al calendario",
        message: "¿Quieres agregar este evento al calendario de tu movil?",
        cancel: "1"
    });
    doClick ? $.__views.dialog.addEventListener("click", doClick) : __defers["$.__views.dialog!click!doClick"] = true;
    var __alloyId27 = [];
    __alloyId27.push("Aceptar");
    __alloyId27.push("Cancelar");
    $.__views.eventoPublico = Ti.UI.createAlertDialog({
        buttonNames: __alloyId27,
        id: "eventoPublico",
        title: "Evento público",
        message: "¿Deseas hacer público este evento de tu calendario?",
        cancel: "1"
    });
    doClick ? $.__views.eventoPublico.addEventListener("click", doClick) : __defers["$.__views.eventoPublico!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId2!click!showAgenda"] && $.__views.__alloyId2.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId6!click!showNewsAll"] && $.__views.__alloyId6.addEventListener("click", showNewsAll);
    __defers["$.__views.__alloyId8!click!showVida"] && $.__views.__alloyId8.addEventListener("click", showVida);
    __defers["$.__views.eventBtn!click!showAgenda"] && $.__views.eventBtn.addEventListener("click", showAgenda);
    __defers["$.__views.menuBtn!click!showMenu"] && $.__views.menuBtn.addEventListener("click", showMenu);
    __defers["$.__views.__alloyId18!change!showAgendaClases"] && $.__views.__alloyId18.addEventListener("change", showAgendaClases);
    __defers["$.__views.__alloyId19!change!showAgendaClases"] && $.__views.__alloyId19.addEventListener("change", showAgendaClases);
    __defers["$.__views.__alloyId20!change!showAgendaClases"] && $.__views.__alloyId20.addEventListener("change", showAgendaClases);
    __defers["$.__views.publicBtn!click!showAlertaPublico"] && $.__views.publicBtn.addEventListener("click", showAlertaPublico);
    __defers["$.__views.agendarBtn!click!showAlerta"] && $.__views.agendarBtn.addEventListener("click", showAlerta);
    __defers["$.__views.publicBtn!click!showAlertaPublico"] && $.__views.publicBtn.addEventListener("click", showAlertaPublico);
    __defers["$.__views.agendarBtn!click!showAlerta"] && $.__views.agendarBtn.addEventListener("click", showAlerta);
    __defers["$.__views.publicBtn!click!showAlertaPublico"] && $.__views.publicBtn.addEventListener("click", showAlertaPublico);
    __defers["$.__views.agendarBtn!click!showAlerta"] && $.__views.agendarBtn.addEventListener("click", showAlerta);
    __defers["$.__views.publicBtn!click!showAlertaPublico"] && $.__views.publicBtn.addEventListener("click", showAlertaPublico);
    __defers["$.__views.agendarBtn!click!showAlerta"] && $.__views.agendarBtn.addEventListener("click", showAlerta);
    __defers["$.__views.publicBtn!click!showAlertaPublico"] && $.__views.publicBtn.addEventListener("click", showAlertaPublico);
    __defers["$.__views.agendarBtn!click!showAlerta"] && $.__views.agendarBtn.addEventListener("click", showAlerta);
    __defers["$.__views.dialog!click!doClick"] && $.__views.dialog.addEventListener("click", doClick);
    __defers["$.__views.eventoPublico!click!doClick"] && $.__views.eventoPublico.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;