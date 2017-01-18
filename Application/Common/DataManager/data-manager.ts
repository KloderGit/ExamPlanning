import { Discipline } from './../../Models/discipline.model';
import { TeacherModel } from './../../Models/teacher.model';
import { ServiseFromJson } from './../../Services/servise-from-json';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class DataManager implements OnInit{

    teachers: TeacherModel[];

    constructor( private service: ServiseFromJson ){
        this.teachers = [];
    }

    ngOnInit(){
        // this.service.getTeachers().then( data => this.teachers = data );
        this.getDisciplinesAll();
    }

    getTeachers(){
        return this.teachers;
    }

    getDisciplinesAll(){
       return this.service.getDisciplinesAll();        
    }

}