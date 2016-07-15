import { Component } from 'angular2/core';
import {NoteComponent} from './notes/note.component';

@Component({
    selector: 'pm-app',
    template: '<p>Hello {{title}}</p> <pm-note></pm-note>',
    directives: [NoteComponent]
})

export /**
 * Component
 */
class PIMCComponent {
    title: string = "Kevin"
}



