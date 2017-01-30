import { ExamenModelNew } from './../Models/examen-new.model';
import { IExamen } from './../Models/IExamen.interface';
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

    getExamensForDiscipline( disciplineId: string, year: number, month: number ){
        return this.http.get('/Application/MockData/examens-mock-data.json')
        .toPromise()
        .then( ( res ) => { 
               let temp: ExamenModel[] = []; 
               let array = res.json();

               console.log( <ExamenModel[]>array );
               console.log( array as ExamenModel[]);

               for (var i = 0; i < array.length; i++) {
                    temp.push( new ExamenModel( array[i].id, array[i].startTime, array[i].endTime, array[i].disciplineId,
                    array[i].student, array[i].studentplace, array[i].rate ) );
               }
               console.log('Service: Сервис получил экзамены'); 
               return temp.filter( item => item.disciplineId == disciplineId )
                          .filter( item => new Date(item.startTime).getFullYear() == year )
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



    getExamensNew( disciplineId: string, year: number, month: number ){
        return this.http.get('/Application/MockData/examens-mock-data2.json')
        .toPromise()
        .then( ( res ) => { 
               let temp: ExamenModelNew[] = []; 
               let array = res.json();

               for (var i = 0; i < array.length; i++) {
                   let ex = new ExamenModelNew();
                   ex.id = array[i].id;
                   ex.disciplineId = array[i].disciplineId;
                   ex.startTime = array[i].startTime;
                   ex.endTime = array[i].endTime;
                   ex.isShared = array[i].isShared;
                   ex.limit = array[i].limit;
                   ex.students = array[i].students;

                    temp.push( ex  );
               }

               console.log('Service: Сервис получил экзамены', temp); 
               return temp.filter( item => item.disciplineId == disciplineId )
                          .filter( item => new Date(item.startTime).getFullYear() == year )
                          .filter( item => new Date(item.startTime).getMonth() == month );
            }
        );        
    }
}
