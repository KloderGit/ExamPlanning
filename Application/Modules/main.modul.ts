import { DayOfCalendarComponent } from './../Components/dayOfCalendar.component/dayOfCalendar.component';
import { ExamensForDayPipe } from './../Pipes/examensForDay';
import { MonthComponent } from './../Components/month.component/month.component';
import { DisciplineComponent } from './../Components/discipline.component/discipline.component';
import { DisciplinesListComponent } from './../Components/disciplines-list.component/disciplines-list.component';
import { AppComponent } from './../App.component';
import { MonthFromExamensPipe } from './../Pipes/monthFromExamens.pipe';
import { ExamensForMonthPipe } from './../Pipes/examensForMonth.pipe';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ServiseFromJson } from './../Services/servise-from-json'
import { DataManager } from './../Common/DataManager/data-manager';

import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

var routerMaps = RouterModule.forRoot([
    { path: 'disciplines', component: DisciplinesListComponent },
    { path: 'discipline/:id', component: DisciplineComponent },
    { path: '', component: DisciplinesListComponent },
    { path: '**', component: DisciplinesListComponent }
]);

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule, routerMaps ],
    declarations: [ AppComponent, DisciplinesListComponent, DisciplineComponent, 
                    MonthComponent, MonthFromExamensPipe, 
                    ExamensForMonthPipe, ExamensForDayPipe, DayOfCalendarComponent ],
    bootstrap: [ AppComponent ],
    providers: [ ServiseFromJson, DataManager ]
})

export class MainModule {}