import { Component } from 'angular2/core'
import { Note } from './model/note'
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'

import { WelcomeComponent } from './home/welcome.component'
import { NoteComponent } from './notes/note.component';

import { bootstrap }   from 'angular2/platform/browser';

@Component({
    selector: 'pm-app',
    template:` 
        <div>
            <nav class='navbar navbar-default'>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['Notes']">Notes</a></li>
                </ul>
            </nav>
        </div>
        <router-outlet></router-outlet>
        `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: 'welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path: 'notes', name: 'Notes', component: NoteComponent }
])
export class PIMCComponent {
    title: string = "Kevin"
}
bootstrap(PIMCComponent, [
  ROUTER_PROVIDERS
]);

