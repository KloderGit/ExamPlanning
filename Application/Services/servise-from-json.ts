import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { TeacherModel } from './../Models/teacher.model';

@Injectable()
export class ServiseFromJson implements OnInit{
    teachers: any;

    constructor ( private http: Http ){}

    ngOnInit(){
        this.http.get('/Application/MockData/teachers-mock-data.json').map(res => { this.teachers = res.json() as TeacherModel[]; });
    }

    getTeachers(){
        return this.http.get('/Application/MockData/teachers-mock-data.json')
        .toPromise()
        .then( res => this.extract( res ) );
    }

        extract(res: Response){
            return res.json();
        }

    getTeachers2(){
        return this.http.get('/Application/MockData/teachers-mock-data.json').map(res => res.json() as TeacherModel[]);
    }

    getTeachers3(){
        console.log( this.teachers );
    }
}