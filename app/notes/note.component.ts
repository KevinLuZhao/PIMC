import { Component } from 'angular2/core';
import { NoteService } from './note.service';
import { Note } from '../model/note';
import { NoteDetailComponent } from './note.detail.component';
import { HTTP_PROVIDERS} from 'angular2/http';

//import { bootstrap }   from 'angular2/platform/browser';

@Component({
    //selector: "pm-note",
    providers: [NoteService, HTTP_PROVIDERS], //Has to add HTTP_PROVIDERS, otherwise will have a lot errorMessage
    templateUrl: "app/notes/templates/note.component.html",
    directives: [NoteDetailComponent]
})

/**
 * NoteComponent
 */
export class NoteComponent {
    noteList: Note[];
    errorMessage: string;
    selectedNodeId: number = 0;
    
    constructor(private noteService: NoteService){}
    
    ngOnInit() { 
        const promise = new Promise((getNotes, reject) => {
           this.getNotes();
        });
        promise.then((res) => {
            for (var note of this.noteList){
                note.Date = new Date(note.Date.toLocaleDateString());
                alert(note.Date );
            }
        });
        
    }
    
    getNotes(){
        return this .noteService.getNotes()
                    .subscribe(
                        notes => this.noteList = notes,
                        error => this.errorMessage = <any>error
                    );
    }
    
    onNotesSelected(id){
        this.selectedNodeId = id;
    }
    
    PageTitle: string = "Note List";
}
//bootstrap(NoteComponent, [HTTP_PROVIDERS]);