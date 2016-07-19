import { bootstrap } from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

// Our main component
import { PIMCComponent } from './app.component';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from 'angular2/router';

bootstrap(PIMCComponent, [HTTP_PROVIDERS]);