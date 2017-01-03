export class Animal {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public mover(distancia: number): void {
        console.log(`${this.nome} moveu ${distancia}m.`);
    }
}