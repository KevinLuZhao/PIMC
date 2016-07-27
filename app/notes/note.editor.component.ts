import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { NoteService } from './note.service';
import { Note } from '../model/note';

@Component({
    selector: 'pm-note-editor',
    templateUrl: 'app/notes/templates/note.editor.component.html',
    providers: [NoteService],
    //inputs:['NoteId']
    properties: ['NoteId']
})

export class NoteEditorComponent {
    //_noteId: Number;
    //note: Note;
    
    @Input() Note: Note;
    @Output() changeMode: EventEmitter<string> = new EventEmitter<string>();

    constructor(private noteService: NoteService){
    }
    errorMessage: string;

    saveNote(){
        this.noteService.SaveNote(this.Note);
        this.changeMode.emit('view');
    }
}