import { LoggerService } from './../Services/logger.service';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './../App.component';
import { DisciplinesListComponent } from './../Components/disciplines-list.component/disciplines-list.component';

import { ServiseFromJson } from './../Services/servise-from-json'
import { DataManager } from './../Common/DataManager/data-manager';



var routerMaps = RouterModule.forRoot([
    { path: 'disciplines', component: DisciplinesListComponent },
    { path: 'discipline/:id', loadChildren: 'Application/Modules/discipline.module' },
    { path: 'addexamens/:date/:discipline', loadChildren: 'Application/Modules/examensPlanning.module' },
    { path: '', component: DisciplinesListComponent },
    { path: '**', component: DisciplinesListComponent }
]);

@NgModule({
    imports: [ BrowserModule, HttpModule, routerMaps ],
    declarations: [ AppComponent, DisciplinesListComponent ],
    bootstrap: [ AppComponent ],
    providers: [ ServiseFromJson, DataManager, LoggerService ]
})

export class MainModule {}