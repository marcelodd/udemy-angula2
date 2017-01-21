import { Component, OnInit } from '@angular/core';
import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { DialogService } from '../dialog.service';
@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html',
    styleUrls: [
        'contatos-lista.component.css'
    ]
})
export class ContatosListaComponent implements OnInit {
    contatos: Contato[] = [];
    mensagem: {};
    classesCss: {};
    private currentTimeout: any;

    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService) {

    }
    // arrow functions
    ngOnInit(): void {
        this.contatoService.findAll()
            .then((contatos: Contato[]) => {
                this.contatos = contatos;
            }).catch(err => {
                this.mostrarMensagem({
                    tipo: 'danger',
                    text: 'Erro ao buscar o contatos!'
                });
            });

    }

    onDelete(contato: Contato): void {
        this.dialogService.confirm('Deseja deletar o contato ' + contato.nome + ' ?')
            .then((canDelete: boolean) => {

                if (canDelete) {
                    this.contatoService
                        .delete(contato)
                        .then((cont: Contato) => {
                            this.contatos = this.contatos.filter(c => c.id != cont.id);
                            this.mostrarMensagem({
                                tipo: 'success',
                                text: 'Contato deletado!'
                            });
                        })
                        .catch(err => {
                            this.mostrarMensagem({
                                tipo: 'danger',
                                text: 'Erro ao deletar o contato!'
                            });
                        });
                }
            });
    }

    private mostrarMensagem(mensagem: { tipo: string, text: string }): void {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);

        if (mensagem.tipo != 'danger') {

            if (this.currentTimeout)
                clearTimeout(this.currentTimeout);


            this.currentTimeout = setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }

    }

    private montarClasses(tipo: string): void {
        this.classesCss = {
            'alert': true,
        }
        this.classesCss['alert-' + tipo] = true;
    }
}