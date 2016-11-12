import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompaniesService {

    constructor(private _http: Http) {
    }

    getCompanies() {
        return this._http.get('http://www.alekseysamoylov.com:8080/serviceiii/coordinates')
            .map(res => res.json());
    }
}