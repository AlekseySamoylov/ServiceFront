import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './components/pages/home.component';
// import { AboutComponent } from './components/pages/about.component';

import { CompaniesComponent } from './components/pages/companies.component';
import { WorksComponent } from './components/pages/works.component';

const appRoutes: Routes = [
    {
        path: '',
        component: CompaniesComponent
    },
    {
        path: 'works',
        component: WorksComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)