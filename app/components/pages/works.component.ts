import { Component } from '@angular/core';
import { WorksService } from '../../services/works.service';

@Component({
    moduleId: module.id,
    selector: 'works',
    templateUrl: 'works.component.html'
})
export class WorksComponent {
    workGroups: any[];

    constructor(private _worksService: WorksService) {
        this._worksService.getWorkGroups().subscribe(workGroups => {
            this.workGroups = workGroups;
            console.log(this.workGroups.length);
        });
    }
}