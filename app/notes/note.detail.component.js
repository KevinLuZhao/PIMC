System.register(['angular2/core', './note.service'], function(exports_1, context_1) {
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
    var core_1, note_service_1;
    var NoteDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (note_service_1_1) {
                note_service_1 = note_service_1_1;
            }],
        execute: function() {
            NoteDetailComponent = (function () {
                function NoteDetailComponent() {
                }
                NoteDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-note-detail',
                        templateUrl: 'app/note/templates/note.detail.components.html',
                        providers: [note_service_1.NoteService],
                        inputs: ['NoteId']
                    }), 
                    __metadata('design:paramtypes', [])
                ], NoteDetailComponent);
                return NoteDetailComponent;
            }());
            exports_1("NoteDetailComponent", NoteDetailComponent);
        }
    }
});
//# sourceMappingURL=note.detail.component.js.map