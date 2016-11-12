import { Component } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';

@Component({
    moduleId: module.id,
    selector: 'companies',
    templateUrl: 'companies.component.html'
})
export class CompaniesComponent {
    companies: any[];

    constructor(private _companiesService: CompaniesService) {
        this._companiesService.getCompanies().subscribe(companies => {
            this.companies = companies;
        });
    }
}