import {Injectable} from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http'
import { Observable }     from 'rxjs/Observable'
import { Note } from '../model/note'
import 'rxjs/Rx'

//Refer to https://angular.io/docs/ts/latest/guide/server-communication.html
@Injectable()
export class NoteService {
    constructor (private http: Http) {}
    private _baseUrl = 'http://localhost:9002/'

    getNotes(): Observable<Note[]>{
        return this.http.get(this._baseUrl + 'api/NotesApi')
                        .map(this.extractData)
                        .catch(this.handleError);
    } 
    
    getNoteById(id): Observable<Note>{
        return this.http.get(this._baseUrl + 'api/NotesApi/'+id)                       
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    SaveNote(note){
        var headers = new Headers();
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'application/json');

        this.http.post(this._baseUrl + '/api/NotesApi', JSON.stringify(note), {
            headers: headers
        })
                .map(res => res.json())
                .subscribe(
                    //data => this.saveJwt(data.id_token),
                    err => this.handleError(err),
                    () => alert("Note saveed")
                );
    }
       
     private extractData(res: Response) {
        let body = res.json();
        return body || { };
     } 

     saveJwt(jwt) {
        if(jwt) {
            localStorage.setItem('id_token', jwt)
        }
    } 
     
     private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        //console.error(errMsg); // log to console instead
        alert(errMsg);
        return Observable.throw(errMsg);
    }    
}