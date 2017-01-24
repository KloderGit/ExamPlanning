import { DisciplineComponent } from './../Components/discipline.component/discipline.component';
import { MonthComponent } from './../Components/month.component/month.component';
import { DayOfCalendarComponent } from './../Components/dayOfCalendar.component/dayOfCalendar.component';

import { ExamensForDayPipe } from './../Pipes/examensForDay';
import { ExamensForMonthPipe } from './../Pipes/examensForMonth.pipe';
import { MonthFromExamensPipe } from './../Pipes/monthFromExamens.pipe';

import { DataManager } from './../Common/DataManager/data-manager';

import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';

export const routerConfig = [{
        path: '', component: DisciplineComponent
    }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routerConfig)],
    declarations: [ DisciplineComponent, MonthComponent, MonthFromExamensPipe, ExamensForMonthPipe, ExamensForDayPipe, DayOfCalendarComponent]
})
export default class HomeModule {}