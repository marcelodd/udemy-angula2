import {DaoInterface} from './dao.interface';
import {Animal} from './../aula16/animal';

export class AnimalDao implements DaoInterface{
    tableName: string;

    insert(objetc: Animal): boolean{
        console.log('Inserting...');
        objetc.mover(60);
        return true;
    }

    update(objetc: Animal): boolean{
        return true;
    }

    delete(id: number): Animal{
        return null;
    }

    find(id: number): Animal{
        return null;
    }

    findAll(): [Animal]{
        return [new Animal('Rex')];
    }
}