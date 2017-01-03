import {Animal} from './animal';

export class Cavalo extends Animal {
    
    constructor(nome: string){
        super(nome);
    }

    public mover(distancia: number): void{
        console.log('Galopando...');
        super.mover(distancia);
    }
}