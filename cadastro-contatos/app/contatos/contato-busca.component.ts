import { Component, EventEmitter, OnInit , OnChanges, Input, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Contato} from './contato.model';
import {Subject} from 'rxjs/Subject';
import {ContatoService} from './contato.service';
import {Router} from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html'
})
export class ContatoBuscaComponent implements OnInit, OnChanges {
    
    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();

    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<string> = new Subject<string>();
    constructor(
        private contatoService: ContatoService,
        private router: Router
    ) { }

    ngOnInit() { 
        this.contatos = this.termosDaBusca
        .debounceTime(600) // aguarde 600 ms
        .distinctUntilChanged() //Ignore se o próximo termo de busca for igual ao anterior
        .switchMap(term =>  term ? this.contatoService.search(term) : Observable.of<Contato[]>([])
        ).catch(err => {
            console.log(err);
            return Observable.of<Contato[]>([]);
        });

        this.contatos.subscribe((contatos: Contato[]) => {

        });
    }

    ngOnChanges(changes: SimpleChanges){
        let busca: SimpleChange = changes['busca'];
        this.search(busca.currentValue);
    }

    search(term: string): void{
        this.termosDaBusca.next(term);
        this.buscaChange.emit(term);
    }

    verDetalhe(contato: Contato): void{
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
        this.buscaChange.emit('');
    }
}