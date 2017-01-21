import { Injectable } from '@angular/core';
import { CONTATOS } from './contatos.moc';
import { Contato } from './contato.model';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';

import { Http, Headers, Response } from '@angular/http';

import {ServiceInterface} from './../interfaces/service.interface';

@Injectable()
export class ContatoService implements ServiceInterface<Contato>{

    private apiUrl: string = 'app/contatos';
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' })

    constructor(
        private http: Http
    ) { }

    findAll(): Promise<Contato[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json().data as Contato[])
            .catch(this.handleError);
        //return Promise.resolve(CONTATOS);
    }

    private handleError(err: any): Promise<any> {
        return Promise.reject(err.message || err);
    }

    find(id: number): Promise<Contato> {
        return this.findAll()
            .then((contatos: Contato[]) => {
                return contatos.find((contato) => {
                    return contato.id === id;
                });
            });
    }

    create(contato: Contato): Promise<Contato> {
        return this.http.post(this.apiUrl, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then((response: Response) => response.json().data as Contato)
            .catch(this.handleError);
    }

    update(contato: Contato): Promise<Contato> {
        const url = `${this.apiUrl}/${contato.id}`;
        return this.http.put(url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
    }

    delete(contato: Contato): Promise<Contato> {
        const url = `${this.apiUrl}/${contato.id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
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
                return this.findAll()
            });
    }

    search(term: string): Observable<Contato[]> {
        return this.http
            .get(`${this.apiUrl}/?nome=${term}`)
            .map((res: Response) => res.json().data as Contato[]);
    }
}