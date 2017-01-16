import { TeacherModel } from './Models/teacher.model';
import { Observable } from 'rxjs/Observable';
import { ServiseFromJson } from './Services/servise-from-json'
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    repos: Observable<TeacherModel[]>;

    constructor( private service: ServiseFromJson ) { }

    ngOnInit() { 
		this.repos = this.service.getTeachers2();        
    }

}