import { ExamenModel } from './../Models/examen.model';
import { DisciplineModel } from './../Models/discipline.model';
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
               let temp = res.json() as DisciplineModel[]; 
               console.log('Service: Сервис получил дисциплины'); 
               return temp; }
        );
    }

    getTeachersAll(){
        return this.http.get('/Application/MockData/teachers-mock-data.json')
        .toPromise()
        .then( ( res ) => { 
               let temp = res.json() as TeacherModel[]; 
               console.log('Service: Сервис получил преподавателей'); 
               return temp; }
        );
    }    

    getExamensForDiscipline( disciplineId: string, year: number, month: number ){
        return this.http.get('/Application/MockData/examens-mock-data2.json')
        .toPromise()
        .then( ( res ) => {
               let array = res.json();
               console.log('Service: Сервис получил экзамены'); 
               return array.filter( item => item.disciplineId == disciplineId )
                          .filter( item => new Date(item.startTime).getFullYear() == year )
                          .filter( item => new Date(item.startTime).getMonth() == month );
            }
        );        
    }

}
