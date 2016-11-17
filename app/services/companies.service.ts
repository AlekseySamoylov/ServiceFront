import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { APP_CONFIG, IAppConfig } from '../app.config';

@Injectable()
export class CompaniesService {

     serviceUrl: String;    
    
     constructor( @Inject(APP_CONFIG) private config: IAppConfig, private _http: Http) {
        this.serviceUrl = config.apiEndpoint;
    }

    getCompanies() {
        return this._http.get(this.serviceUrl + '/coordinates')
            .map(res => res.json());
    }
}