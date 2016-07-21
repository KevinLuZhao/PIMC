import { Component, Input, Output } from 'angular2/core';
import { NoteService } from './note.service';

@Component({
    selector: 'pm-note-detail',
    templateUrl: 'app/note/templates/note.detail.components.html',
    providers: [NoteService],
    inputs:['NoteId']
})

export class NoteDetailComponent {
    public noteId: Number;
}