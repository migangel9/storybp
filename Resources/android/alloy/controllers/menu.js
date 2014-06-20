function Controller() {
    function hideMenu(e) {
        if (e.direction = "left") {
            $.main.width = Ti.UI.SIZE;
            $.main.animate({
                left: 0,
                duration: 100
            });
        }
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.menu = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "menu"
    });
    $.__views.menu && $.addTopLevelView($.__views.menu);
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
    $.__views.__alloyId327 = Ti.UI.createView({
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
        id: "__alloyId327"
    });
    $.__views.options.add($.__views.__alloyId327);
    $.__views.__alloyId328 = Ti.UI.createLabel({
        text: "Perfil",
        id: "__alloyId328"
    });
    $.__views.__alloyId327.add($.__views.__alloyId328);
    $.__views.__alloyId329 = Ti.UI.createView({
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
        id: "__alloyId329"
    });
    $.__views.options.add($.__views.__alloyId329);
    showAgenda ? $.__views.__alloyId329.addEventListener("click", showAgenda) : __defers["$.__views.__alloyId329!click!showAgenda"] = true;
    $.__views.__alloyId330 = Ti.UI.createLabel({
        text: "Agenda",
        id: "__alloyId330"
    });
    $.__views.__alloyId329.add($.__views.__alloyId330);
    $.__views.__alloyId331 = Ti.UI.createView({
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
        id: "__alloyId331"
    });
    $.__views.options.add($.__views.__alloyId331);
    $.__views.__alloyId332 = Ti.UI.createLabel({
        text: "Mensajes",
        id: "__alloyId332"
    });
    $.__views.__alloyId331.add($.__views.__alloyId332);
    $.__views.__alloyId333 = Ti.UI.createView({
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
        id: "__alloyId333"
    });
    $.__views.options.add($.__views.__alloyId333);
    showNewsAll ? $.__views.__alloyId333.addEventListener("click", showNewsAll) : __defers["$.__views.__alloyId333!click!showNewsAll"] = true;
    $.__views.__alloyId334 = Ti.UI.createLabel({
        text: "Noticias",
        id: "__alloyId334"
    });
    $.__views.__alloyId333.add($.__views.__alloyId334);
    $.__views.__alloyId335 = Ti.UI.createView({
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
        id: "__alloyId335"
    });
    $.__views.options.add($.__views.__alloyId335);
    showVida ? $.__views.__alloyId335.addEventListener("click", showVida) : __defers["$.__views.__alloyId335!click!showVida"] = true;
    $.__views.__alloyId336 = Ti.UI.createLabel({
        text: "Vida Sana",
        id: "__alloyId336"
    });
    $.__views.__alloyId335.add($.__views.__alloyId336);
    $.__views.__alloyId337 = Ti.UI.createView({
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
        id: "__alloyId337"
    });
    $.__views.options.add($.__views.__alloyId337);
    showMercado ? $.__views.__alloyId337.addEventListener("click", showMercado) : __defers["$.__views.__alloyId337!click!showMercado"] = true;
    $.__views.__alloyId338 = Ti.UI.createLabel({
        text: "Lobo Mercado",
        id: "__alloyId338"
    });
    $.__views.__alloyId337.add($.__views.__alloyId338);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.menu!swipe!hideMenu"] && $.__views.menu.addEventListener("swipe", hideMenu);
    __defers["$.__views.__alloyId329!click!showAgenda"] && $.__views.__alloyId329.addEventListener("click", showAgenda);
    __defers["$.__views.__alloyId333!click!showNewsAll"] && $.__views.__alloyId333.addEventListener("click", showNewsAll);
    __defers["$.__views.__alloyId335!click!showVida"] && $.__views.__alloyId335.addEventListener("click", showVida);
    __defers["$.__views.__alloyId337!click!showMercado"] && $.__views.__alloyId337.addEventListener("click", showMercado);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;