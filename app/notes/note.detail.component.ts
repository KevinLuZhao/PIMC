import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { NoteService } from './note.service';
import { Note } from '../model/note';

@Component({
    selector: 'pm-note-detail',
    templateUrl: 'app/notes/templates/note.detail.component.html',
    //templateUrl: 'app/notes/templates/note.editor.component.html',
    providers: [NoteService],
    //inputs:['NoteId']
    properties: ['NoteId']
})

export class NoteDetailComponent {
    _noteId: Number;
    note: Note;
    
    @Output() changeMode: EventEmitter<string> = new EventEmitter<string>();

    constructor(private noteService: NoteService){
        this.note = new Note();
    }
    errorMessage: string;
    
    set NoteId(newModelValue) {
        this._noteId = newModelValue;
        if (this._noteId > 0){
            this.getNoteById(this._noteId);
        }
    }

    get NoteId() {
        return this._noteId;
    }
    
    getNoteById(id){
        return this .noteService.getNoteById(id)
                    .subscribe(
                        note => this.note = note,
                        error => this.errorMessage = <any>error,
                        ()=>{
                            this.note.Date = new Date(this.note.Date).toLocaleDateString();
                        }
                    );
    }
    
    editNote(){
        this.changeMode.emit('edit');
    }
}