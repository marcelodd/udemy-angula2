import './util/rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { ContatosModule } from './contatos/contatos.module';
import {AppRoutingModule} from './app-routing.module';

import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {DialogService} from './dialog.service';

import {FormsModule} from '@angular/forms';
@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        ContatosModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        DialogService
    ]
})
export class AppModule {

}