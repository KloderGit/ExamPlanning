import { ObjectToMonthTimestampPipe } from './../Pipes/objToMonthPipe';
import { DisciplineComponent } from './../Components/discipline.component/discipline.component';
import { MonthComponent } from './../Components/month.component/month.component';
import { DayOfCalendarComponent } from './../Components/dayOfCalendar.component/dayOfCalendar.component';

import { ExamensForDayPipe } from './../Pipes/examensForDay';
import { ExamensForMonthPipe } from './../Pipes/examensForMonth.pipe';

import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';

export const routerConfig = [{
        path: '', component: DisciplineComponent
    }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routerConfig)],
    declarations: [ DisciplineComponent, 
                    MonthComponent, 
                    ExamensForMonthPipe, ExamensForDayPipe,
                    DayOfCalendarComponent, ObjectToMonthTimestampPipe]
})
export default class HomeModule {}