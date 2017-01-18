import { Discipline } from './../Models/discipline.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';

import { TeacherModel } from './../Models/teacher.model';

@Injectable()
export class ServiseFromJson{

    constructor ( private http: Http ){
        console.log('Service: Создан сервис');
    }

    getDisciplinesAll(){
        return this.http.get('/Application/MockData/discipline.mock.data.json')
        .toPromise()
        .then( ( res ) => { 
               let temp = res.json() as Discipline[]; 
               console.log('Service: Сервис получил дисциплины'); 
               return temp; }
        );
    }
}