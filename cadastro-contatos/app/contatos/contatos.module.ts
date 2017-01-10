import {NgModule} from '@angular/core';
import {ContatosListaComponent} from './contatos-lista.component';
import {ContatoDetalheComponent} from './contato-detalhe.component';
import {CommonModule} from '@angular/common';
import {ContatoRoutingModule} from './contato-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule
    ],
    declarations: [
        ContatosListaComponent,
        ContatoDetalheComponent
    ],
    exports:[
        ContatosListaComponent
    ]
})
export class ContatosModule {

}