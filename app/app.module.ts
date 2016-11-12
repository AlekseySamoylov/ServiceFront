import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';

import { NavbarComponent } from './components/navbar/navbar.component';
import { CompaniesComponent } from './components/pages/companies.component';
import { WorksComponent } from './components/pages/works.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, NavbarComponent, CompaniesComponent, WorksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
