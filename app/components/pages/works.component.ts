import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works.service';

@Component({
    moduleId: module.id,
    selector: 'works',
    templateUrl: 'works.component.html'
})
export class WorksComponent implements OnInit {
    workGroups: any[];
    collapse: string;
    collapseInfo: string;
    isExpand: Boolean;

    constructor(private _worksService: WorksService) {
    }

    ngOnInit(): void {
        this._worksService.getWorkGroups().subscribe(workGroups => {
            this.workGroups = workGroups;
            console.log(this.workGroups.length);
        });

        this.collapse = "";
        this.collapseInfo = "Развернуть все";
        this.isExpand = false;
    }

    hideShowAll(): void {
        this.isExpand = !this.isExpand;
        this.collapse = this.isExpand ? "in" : "";
        this.collapseInfo = this.isExpand ? "Свернуть все" : "Развернуть все";
    }
}