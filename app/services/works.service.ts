import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WorksService {

    constructor(private _http: Http) {

    }

    getWorkGroups() {
        return this._http.get('http://www.alekseysamoylov.com:8080/serviceiii/prices')
            .map(res => res.json());
    }
}