"use strict";
var dao_1 = require("./dao");
var animal_1 = require("./../aula16/animal");
var cavalo_1 = require("./../aula16/cavalo");
var dao = new dao_1.Dao();
var animal = new animal_1.Animal('Rex');
var cavalo = new cavalo_1.Cavalo('Titã');
dao.insert(animal);
dao.insert(cavalo);
//# sourceMappingURL=run.js.map