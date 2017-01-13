import {NgModule} from '@angular/core';
import {ContatosListaComponent} from './contatos-lista.component';
import {ContatoDetalheComponent} from './contato-detalhe.component';
import {CommonModule} from '@angular/common';
import {ContatoRoutingModule} from './contato-routing.module';
import {ContatoService} from './contato.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ContatoRoutingModule,
        FormsModule
    ],
    declarations: [
        ContatosListaComponent,
        ContatoDetalheComponent
    ],
    exports:[
        ContatosListaComponent
    ],
    providers: [ContatoService],
})
export class ContatosModule {

}