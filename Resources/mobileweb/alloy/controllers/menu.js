function Controller() {
    function mayHide(e) {
        "left" === e.direction && hide();
        return;
    }
    function hideMenu() {
        var win = Alloy.createController("index").getView();
        win.width = Ti.UI.SIZE;
        win.animate({
            left: 0,
            duration: 100
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#585B63",
        left: 0,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    hideMenu ? $.__views.container.addEventListener("click", hideMenu) : __defers["$.__views.container!click!hideMenu"] = true;
    $.__views.options = Ti.UI.createView({
        top: 0,
        left: 0,
        height: Ti.UI.SIZE,
        layout: "vertical",
        bubbleParent: false,
        backgroundColor: "#5f00",
        id: "options"
    });
    $.__views.container.add($.__views.options);
    mayHide ? $.__views.options.addEventListener("swipe", mayHide) : __defers["$.__views.options!swipe!mayHide"] = true;
    $.__views.__alloyId23 = Ti.UI.createView({
        top: 0,
        left: 0,
        height: 44,
        backgroundColor: "yellow",
        id: "__alloyId23"
    });
    $.__views.options.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        text: "One",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        top: 0,
        left: 0,
        height: 44,
        backgroundColor: "yellow",
        id: "__alloyId25"
    });
    $.__views.options.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        text: "Two",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        top: 0,
        left: 0,
        height: 44,
        backgroundColor: "yellow",
        id: "__alloyId27"
    });
    $.__views.options.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        text: "Three",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.container!click!hideMenu"] && $.__views.container.addEventListener("click", hideMenu);
    __defers["$.__views.options!swipe!mayHide"] && $.__views.options.addEventListener("swipe", mayHide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;