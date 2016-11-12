import { Component } from '@angular/core';
import { CompaniesService } from './services/companies.service';
import { WorksService } from './services/works.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [ CompaniesService, WorksService ],
})
export class AppComponent { }
