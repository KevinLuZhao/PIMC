import { Component } from 'angular2/core';
import { NoteService } from './note.service';
import { Note } from '../model/note';
import { NoteDetailComponent } from './note.detail.component';

@Component({
    //selector: "pm-note",
    providers: [NoteService],
    templateUrl: "app/notes/templates/note.component.html",
    directives: [NoteComponent]
})

/**
 * NoteComponent
 */
export class NoteComponent {
    noteList: Note[];
    errorMessage: string;
    
    constructor(private noteService: NoteService){}
    
    ngOnInit() { this.getNotes(); }
    
    getNotes(){
        return this .noteService.getNotes()
                    .subscribe(
                        notes => this.noteList = notes,
                        error => this.errorMessage = <any>error
                    );
    }
    
    onNotesSelected(id){
        //NoteDetailComponent.NoteId = 
    }

    getNoteById(id){
        
    }
    
    PageTitle: string = "Note List";
}