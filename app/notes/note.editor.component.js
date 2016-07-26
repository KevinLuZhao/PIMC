System.register(['angular2/core', './note.service', '../model/note'], function(exports_1, context_1) {
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
    var core_1, note_service_1, note_1;
    var NoteEditorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (note_service_1_1) {
                note_service_1 = note_service_1_1;
            },
            function (note_1_1) {
                note_1 = note_1_1;
            }],
        execute: function() {
            NoteEditorComponent = (function () {
                function NoteEditorComponent(noteService) {
                    this.noteService = noteService;
                    this.changeMode = new core_1.EventEmitter();
                    //this.note = new Note();
                    /*this.note.Subject ="Subject Mock";
                    this.note.Body ="Body Mock";*/
                }
                NoteEditorComponent.prototype.saveNote = function () {
                    this.noteService.SaveNote(this.Note);
                    this.changeMode.emit('view');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', note_1.Note)
                ], NoteEditorComponent.prototype, "Note", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], NoteEditorComponent.prototype, "changeMode", void 0);
                NoteEditorComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-note-editor',
                        templateUrl: 'app/notes/templates/note.editor.component.html',
                        providers: [note_service_1.NoteService],
                        //inputs:['NoteId']
                        properties: ['NoteId']
                    }), 
                    __metadata('design:paramtypes', [note_service_1.NoteService])
                ], NoteEditorComponent);
                return NoteEditorComponent;
            }());
            exports_1("NoteEditorComponent", NoteEditorComponent);
        }
    }
});
//# sourceMappingURL=note.editor.component.js.map