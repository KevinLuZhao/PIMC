System.register(['angular2/core', 'angular2/router', './home/welcome.component', './notes/note.component', 'angular2/platform/browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, welcome_component_1, note_component_1, browser_1;
    var PIMCComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (note_component_1_1) {
                note_component_1 = note_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            //import { appRouterProviders } from './app2/routes';
            PIMCComponent = (function () {
                function PIMCComponent() {
                    this.title = "Kevin";
                }
                PIMCComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-app',
                        template: " \n        <div>\n            <nav class='navbar navbar-default'>\n                <ul class='nav navbar-nav'>\n                    <li><a [routerLink]=\"['Welcome']\">Home</a></li>\n                    <li><a [routerLink]=\"['Notes']\">Notes</a></li>\n                </ul>\n            </nav>\n        </div>\n        <router-outlet></router-outlet>\n        ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: 'welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: 'notes', name: 'Notes', component: note_component_1.NoteComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], PIMCComponent);
                return PIMCComponent;
            }());
            exports_1("PIMCComponent", PIMCComponent);
            browser_1.bootstrap(PIMCComponent, [
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=app.component.js.map