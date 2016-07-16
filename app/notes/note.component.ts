import { Component } from 'angular2/core';

@Component({
    selector: "pm-note",
    templateUrl: "app/notes/note.component.html"
    //template: "<p>Note List</p>"
})

/**
 * NoteComponent
 */
export class NoteComponent {    
    PageTitle: string = "Note List";
}