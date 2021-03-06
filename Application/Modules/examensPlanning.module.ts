import { SliderComponent } from './../Components/slider.component/slider.component';
import { TimepickerComponent } from './../Components/timepicker.component/timepicker.component';
import { AirDataPickerInitDirective } from './../Directives/air-datapicker.directive';
import { AddExamensComponent } from './../Components/add-examens.component/add-examens.component';
import { DataManager } from './../Common/DataManager/data-manager';

import { RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

export const routerConfig = [{
        path: '', component: AddExamensComponent
    }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routerConfig)],
    declarations: [ AddExamensComponent, AirDataPickerInitDirective, TimepickerComponent, SliderComponent ]
})
export default class ExamensPlanningModule {}