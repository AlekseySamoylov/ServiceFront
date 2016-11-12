import { Component } from '@angular/core';
import { CompaniesService } from './services/companies.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [ CompaniesService ],
})
export class AppComponent { }
