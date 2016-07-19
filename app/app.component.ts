import { Component } from 'angular2/core';
import {NoteComponent} from './notes/note.component';
import { Note } from './model/note'

@Component({
    selector: 'pm-app',
    template: '<pm-note></pm-note>',
    directives: [NoteComponent]
})

export /**
 * Component
 */
class PIMCComponent {
    title: string = "Kevin"
}



