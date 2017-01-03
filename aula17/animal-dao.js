"use strict";
var animal_1 = require("./../aula16/animal");
var AnimalDao = (function () {
    function AnimalDao() {
    }
    AnimalDao.prototype.insert = function (objetc) {
        console.log('Inserting...');
        objetc.mover(60);
        return true;
    };
    AnimalDao.prototype.update = function (objetc) {
        return true;
    };
    AnimalDao.prototype.delete = function (id) {
        return null;
    };
    AnimalDao.prototype.find = function (id) {
        return null;
    };
    AnimalDao.prototype.findAll = function () {
        return [new animal_1.Animal('Rex')];
    };
    return AnimalDao;
}());
exports.AnimalDao = AnimalDao;
//# sourceMappingURL=animal-dao.js.map