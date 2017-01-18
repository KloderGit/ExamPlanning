import { TeacherModel } from './Models/teacher.model';
import { ServiseFromJson } from './Services/servise-from-json'
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    teachers: TeacherModel[];

    constructor( private service: ServiseFromJson ) { 
        this.teachers = new Array();
    }

    ngOnInit() { 
		this.service.getTeachers()
        .then( data => this.teachers = data );
    }

}
