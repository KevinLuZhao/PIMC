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
    var NoteDetailComponent;
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
            NoteDetailComponent = (function () {
                function NoteDetailComponent(noteService) {
                    this.noteService = noteService;
                    this.changeMode = new core_1.EventEmitter();
                    this.note = new note_1.Note();
                }
                Object.defineProperty(NoteDetailComponent.prototype, "NoteId", {
                    get: function () {
                        return this._noteId;
                    },
                    set: function (newModelValue) {
                        this._noteId = newModelValue;
                        if (this._noteId > 0) {
                            this.getNoteById(this._noteId);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                NoteDetailComponent.prototype.getNoteById = function (id) {
                    var _this = this;
                    return this.noteService.getNoteById(id)
                        .subscribe(function (note) { return _this.note = note; }, function (error) { return _this.errorMessage = error; }, function () {
                        _this.note.Date = new Date(_this.note.Date).toLocaleDateString();
                    });
                };
                NoteDetailComponent.prototype.editNote = function () {
                    this.changeMode.emit('edit');
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], NoteDetailComponent.prototype, "changeMode", void 0);
                NoteDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'pm-note-detail',
                        templateUrl: 'app/notes/templates/note.detail.component.html',
                        //templateUrl: 'app/notes/templates/note.editor.component.html',
                        providers: [note_service_1.NoteService],
                        //inputs:['NoteId']
                        properties: ['NoteId']
                    }), 
                    __metadata('design:paramtypes', [note_service_1.NoteService])
                ], NoteDetailComponent);
                return NoteDetailComponent;
            }());
            exports_1("NoteDetailComponent", NoteDetailComponent);
        }
    }
});
//# sourceMappingURL=note.detail.component.js.map