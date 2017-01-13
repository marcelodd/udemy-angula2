import { Injectable } from '@angular/core';
import { CONTATOS } from './contatos.moc';
import { Contato } from './contato.model';

import 'rxjs/add/operator/toPromise';

import {Http} from '@angular/http';

@Injectable()
export class ContatoService {

    private apiUrl: string = 'app/contatos';

    constructor(
        private http: Http
    ){}

    getContatos(): Promise<Contato[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as Contato[]);
        //return Promise.resolve(CONTATOS);
    }

    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Contato[]) => {
                return contatos.find((contato) => {
                    return contato.id === id;
                });
            });
    }

    getContatoSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        })
            .then(() => {
                console.log('primeiro then');
                return 'Curso Angular 2 Plínio Naves';
            })
            .then((param: string) => {
                console.log('segundo then');
                console.log(param);

                return new Promise((resolve2, reject2) => {
                    setTimeout(() => {
                        console.log('continuando depois de 4 segundos...');
                        resolve2();
                    }, 4000)
                })
            })
            .then(() => {
                console.log('terceiro then');
                return this.getContatos()
            });
    }
}