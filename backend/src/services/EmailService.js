"use strict";
exports.__esModule = true;
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendMail = function (to, message) {
        console.log("Email enviado para " + to.name + ": " + message.subject);
    };
    return EmailService;
}());
exports["default"] = EmailService;
