import {Component} from '@angular/core';

// Shadow dom

@Component({
    selector: 'my-app',
    template: `<h1>Hello Word!</h1>
        <router-outlet></router-outlet>
    `
})
export class AppComponent{

}