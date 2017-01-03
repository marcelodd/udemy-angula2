"use strict";
var Dao = (function () {
    function Dao() {
    }
    Dao.prototype.insert = function (objetc) {
        console.log('Inserting...');
        objetc.mover(60);
        return true;
    };
    Dao.prototype.update = function (objetc) {
        return true;
    };
    Dao.prototype.delete = function (id) {
        return null;
    };
    Dao.prototype.find = function (id) {
        return null;
    };
    Dao.prototype.findAll = function () {
        return null;
    };
    return Dao;
}());
exports.Dao = Dao;
//# sourceMappingURL=dao.js.map