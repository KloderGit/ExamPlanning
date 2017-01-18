import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';

import { TeacherModel } from './../Models/teacher.model';

@Injectable()
export class ServiseFromJson implements OnInit{
    constructor ( private http: Http ){}

    ngOnInit(){}

    getTeachers(){
        return this.http.get('/Application/MockData/teachers-mock-data.json')
        .toPromise()
        .then( res => res.json() as TeacherModel[] );
    }

}