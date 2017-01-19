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

    getExamensForDiscipline( disciplineId: string, month: number ){
        return this.http.get('/Application/MockData/examens-mock-data.json')
        .toPromise()
        .then( ( res ) => { 
               let temp: ExamenModel[] = []; 
               let array = res.json();
               for (var i = 0; i < array.length; i++) {
                    temp.push( new ExamenModel( array[i].id, array[i].startTime, array[i].endTime, array[i].disciplineId ) );
               }

               console.log('Service: Сервис получил экзамены'); 
               return temp.filter( item => item.disciplineId == disciplineId)
                          .filter( item => new Date(item.startTime).getMonth() == month );
            }
        );        
    }

    getExamensForDisciplineAll( disciplineId: string ){
        return this.http.get('/Application/MockData/examens-mock-data.json')
        .toPromise()
        .then( ( res ) => { 
               let temp = res.json() as ExamenModel[]; 
               console.log('Service: Сервис получил экзамены'); 
               return temp;
            }
        );        
    }
}