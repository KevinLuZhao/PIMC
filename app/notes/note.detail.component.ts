import { Component, Input, Output } from 'angular2/core';
import { NoteService } from './note.service';
import { Note } from '../model/note';

@Component({
    selector: 'pm-note-detail',
    templateUrl: 'app/notes/templates/note.detail.components.html',
    providers: [NoteService],
    //inputs:['NoteId']
    properties: ['NoteId']
})

export class NoteDetailComponent {
    _noteId: Number;
    note: Note;
    
    constructor(private noteService: NoteService){
        this.note = new Note();
        this.note.Subject='';
        this.note.Date = new Date();
    }
    errorMessage: string;
    //@Input() person: number;
    //onChange(map){
      //if(map.NoteId) {
        //console.log('doing crazy stuff here');
        //alert(map.NoteId); //SimpleChange {previousValue: 43, currentValue: 44}
      //}
      //alert("changed");
    //}
    
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
                        error => this.errorMessage = <any>error
                    );
    }
}