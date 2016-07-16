import {Injectable} from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable }     from 'rxjs/Observable'

@Injectable
export class NoteService {
    constructor (private http: Http) {}
    private _url = 'http://localhost:23090/api/NotesWebApi'

    getNotes(): Observable<Note[]>{
        return this.http.get
        }
        
    }
}