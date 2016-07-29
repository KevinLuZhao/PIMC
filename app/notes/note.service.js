System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var NoteService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            //Refer to https://angular.io/docs/ts/latest/guide/server-communication.html
            NoteService = (function () {
                function NoteService(http) {
                    this.http = http;
                    this._baseUrl = 'http://localhost:9002/';
                }
                NoteService.prototype.getNotes = function () {
                    return this.http.get(this._baseUrl + 'api/NotesApi')
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                NoteService.prototype.getNoteById = function (id) {
                    return this.http.get(this._baseUrl + 'api/NotesApi/' + id)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                NoteService.prototype.SaveNote = function (note) {
                    var headers = new http_1.Headers();
                    //headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this._baseUrl + '/api/NotesApi', JSON.stringify(note), {
                        headers: headers
                    })
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                NoteService.prototype.extractData = function (res) {
                    var body = res.json();
                    return body || {};
                };
                NoteService.prototype.saveJwt = function (jwt) {
                    if (jwt) {
                        localStorage.setItem('id_token', jwt);
                    }
                };
                NoteService.prototype.handleError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    //console.error(errMsg); // log to console instead
                    alert(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                NoteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], NoteService);
                return NoteService;
            }());
            exports_1("NoteService", NoteService);
        }
    }
});
//# sourceMappingURL=note.service.js.map