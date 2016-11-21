import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../services/companies.service';

@Component({
    moduleId: module.id,
    selector: 'companies',
    templateUrl: 'companies.component.html'
})
export class CompaniesComponent implements OnInit {
    companies: any[];

    constructor(private _companiesService: CompaniesService) {
    }

    ngOnInit(): void {
        this._companiesService.getCompanies().subscribe(companies => {
            this.companies = companies;
        });
    }
}