import { Component } from 'angular2/core';
import { NoteService } from './note.service';
import { Note } from '../model/note';
import { NoteDetailComponent } from './note.detail.component';
import { NoteEditorComponent } from './note.editor.component';
import { HTTP_PROVIDERS} from 'angular2/http';

//import { bootstrap }   from 'angular2/platform/browser';

@Component({
    //selector: "pm-note",
    providers: [NoteService, HTTP_PROVIDERS], //Has to add HTTP_PROVIDERS, otherwise will have a lot errorMessage
    templateUrl: "app/notes/templates/note.component.html",
    directives: [NoteDetailComponent, NoteEditorComponent]
})
export class NoteComponent {
    noteList: Note[];
    errorMessage: string;
    selectedNodeId: number = 0;
    selectedNote: Note;
    mode: string = 'view';
    
    constructor(private noteService: NoteService){}
    
    ngOnInit() { 
        this.getNotes();
    }
    
    getNotes(){
        //alert("test subscribe");
        return this .noteService.getNotes()
                    .subscribe(
                        notes => this.noteList = notes,
                        error => this.errorMessage = <any>error,
                        ()=>{
                            for(var note of this.noteList){
                                note.Date = new Date(note.Date).toLocaleDateString();
                            }
                        }
                    );                
    }

    createNewNote(){
        this.selectedNodeId = 0;
        this.selectedNote = new Note();
        this.selectedNote.Subject = '';
        this.selectedNote.Body =  '';
        this.onChangeMode('edit');
    }
    
    onNotesSelected(id){
        this.selectedNodeId = id;
        this.onChangeMode('view');
        this.selectedNote = this.noteList.find((note)=>note.Id == id);
    }
    
    onChangeMode(mode: string){
        this.mode = mode;
        if (mode == 'refresh'){
            this.getNotes();
        }
    }
}