import {DaoInterface} from './dao.interface';
import {Animal} from './../aula16/animal';

export class Dao<T> implements DaoInterface<T>{
    tableName: string;

    insert(objetc: T): boolean{
        console.log('Inserting...');
        return true;
    }

    update(objetc: T): boolean{
        return true;
    }

    delete(id: number): T{
        return null;
    }

    find(id: number): T{
        return null;
    }

    findAll(): Array<T>{
        return null;
    }
}