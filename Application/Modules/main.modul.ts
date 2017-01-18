import { DataManager } from './../Common/DataManager/data-manager';
import { AppComponent } from './../App.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ServiseFromJson } from './../Services/servise-from-json'
import { ServiceFromJsonObservable } from './../Services/service-json-observerable'

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

var routerMaps = RouterModule.forRoot([
    // { path: 'calendar', component: SheduleComponent },
    { path: '', component: AppComponent },
    { path: '**', component: AppComponent }
]);

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, routerMaps ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [ ServiseFromJson, DataManager ]
})

export class MainModule {}