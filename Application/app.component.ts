import { ServiceFromJsonObservable } from './Services/service-json-observerable';
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

    rere: Observable<TeacherModel[]>;
    rep;

    constructor( private service: ServiseFromJson, private Oservice: ServiceFromJsonObservable ) { }

    ngOnInit() { 
		this.service.getTeachers2().subscribe( res => { this.rep = res; });   

            this.rere = this.Oservice.todos;
            this.Oservice.loadAll();
    }

    dd(){
        console.log( this.Oservice.load('111') );
    }
}
