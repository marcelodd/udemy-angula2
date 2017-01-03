import {Component} from '@angular/core';
import {CONTATOS} from './contatos.moc';
import {Contato} from './contato.model';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html',
    styleUrls: [
       'contatos-lista.component.css' 
    ]
})
export class ContatosListaComponent{
    contatos: Contato[] = CONTATOS;
}