System.register(['angular2/core', './note.service', './note.detail.component', './note.editor.component', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, note_service_1, note_detail_component_1, note_editor_component_1, http_1;
    var NoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (note_service_1_1) {
                note_service_1 = note_service_1_1;
            },
            function (note_detail_component_1_1) {
                note_detail_component_1 = note_detail_component_1_1;
            },
            function (note_editor_component_1_1) {
                note_editor_component_1 = note_editor_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            //import { bootstrap }   from 'angular2/platform/browser';
            NoteComponent = (function () {
                function NoteComponent(noteService) {
                    this.noteService = noteService;
                    this.selectedNodeId = 0;
                    this.mode = 'view';
                    this.PageTitle = "Note List";
                }
                NoteComponent.prototype.ngOnInit = function () {
                    this.getNotes();
                };
                NoteComponent.prototype.getNotes = function () {
                    var _this = this;
                    //alert("test subscribe");
                    return this.noteService.getNotes()
                        .subscribe(function (notes) { return _this.noteList = notes; }, function (error) { return _this.errorMessage = error; }, function () {
                        for (var _i = 0, _a = _this.noteList; _i < _a.length; _i++) {
                            var note = _a[_i];
                            note.Date = new Date(note.Date).toLocaleDateString();
                        }
                    });
                };
                NoteComponent.prototype.onNotesSelected = function (id) {
                    this.selectedNodeId = id;
                    this.onChangeMode('view');
                    this.selectedNote = this.noteList.find(function (note) { return note.Id == id; });
                };
                NoteComponent.prototype.onChangeMode = function (mode) {
                    this.mode = mode;
                };
                NoteComponent = __decorate([
                    core_1.Component({
                        //selector: "pm-note",
                        providers: [note_service_1.NoteService, http_1.HTTP_PROVIDERS],
                        templateUrl: "app/notes/templates/note.component.html",
                        directives: [note_detail_component_1.NoteDetailComponent, note_editor_component_1.NoteEditorComponent]
                    }), 
                    __metadata('design:paramtypes', [note_service_1.NoteService])
                ], NoteComponent);
                return NoteComponent;
            }());
            exports_1("NoteComponent", NoteComponent);
        }
    }
});
//bootstrap(NoteComponent, [HTTP_PROVIDERS]); 
//# sourceMappingURL=note.component.js.map