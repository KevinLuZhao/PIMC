import {Injectable} from 'angular2/core';
import { Http, Response } from 'angular2/http'
import { Observable }     from 'rxjs/Observable'
import { Note } from '../model/note'
import 'rxjs/Rx'

@Injectable()
export class NoteService {
    constructor (private http: Http) {}
    private _baseUrl = 'http://localhost:9002/'

    getNotes(): Observable<Note[]>{
        return this.http.get(this._baseUrl + 'api/NotesApi')
                        .map(this.extractData)
                        .catch(this.handleError);
    } 
       
     private extractData(res: Response) {
        let body = res.json();
        return body || { };
     }  
     
     private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }    
}