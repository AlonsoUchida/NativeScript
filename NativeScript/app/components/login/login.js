var frameModule = require("ui/frame");
var dialogs = require("ui/dialogs");
var viewModule = require("ui/core/view");
var email;

exports.loaded = function(args) {
    var page = args.object;
    email = viewModule.getViewById(page, "email");
};

exports.loaded = function() {
    alert("Loaded");
}

exports.signIn = function() {
    alert("Signing in");
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("components/register/register");
};
