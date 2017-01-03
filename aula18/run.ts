import {Dao} from './dao';
import {Animal} from './../aula16/animal';
import {Cavalo} from './../aula16/cavalo';

let dao: Dao<Animal> = new Dao<Animal>();
let animal: Animal = new Animal('Rex');

let cavalo: Cavalo = new Cavalo('Titã');

dao.insert(animal);
dao.insert(cavalo);