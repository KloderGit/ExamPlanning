import { Discipline } from './Models/discipline.model';
import { DataManager } from './Common/DataManager/data-manager';
import { TeacherModel } from './Models/teacher.model';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    discipline: Promise<Discipline[]>

    constructor( private dataManager: DataManager ) {}

    ngOnInit() { 
        this.discipline = this.dataManager.getDisciplinesAll();
    }



}
