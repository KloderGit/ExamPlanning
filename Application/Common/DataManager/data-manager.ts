import { ExamenModel } from './../../Models/examen.model';
import { DisciplineModel } from './../../Models/discipline.model';
import { TeacherModel } from './../../Models/teacher.model';
import { ServiseFromJson } from './../../Services/servise-from-json';
import { Injectable } from '@angular/core';

@Injectable()
export class DataManager {

    disciplines: DisciplineModel[] = new Array();
    examens: ExamenModel[] = new Array();

    constructor( private service: ServiseFromJson ){
        console.log('Создание DataManager');
        this.loadDisciplines();
    }

//  Дисциплины

    private loadDisciplines(){
        this.service.getDisciplinesAll()
                    .then( data => { this.disciplines = data; console.log('DataManager: Получены дисциплины из сервиса') } );
    }

    getDisciplinesAll(){
       return this.disciplines;
    }

    getDiscipline( id: string ){
        let index = this.disciplines.map(x => x.id).indexOf(id);
        return this.disciplines[index];
    }


//  Экзамены

    getExamensFromService( disciplineId: string, month: number ){
        this.service.getExamensForDiscipline( disciplineId, month )
                           .then( data => { 
                               for( let i=0; i< data.length; i++){
                                   this.examens.push(data[i]);
                               }                               
                               console.log('DataManager: Получены экзамены из сервиса на месяц - ' + month, data) 
                            }
                     );
    }

    getExamensByDiscipline( disciplineId: string  ) {
        return this.examens.filter( item => item.disciplineId == disciplineId );
    }

    getExamensFromServiceAll( disciplineId: string ){
        this.service.getExamensForDisciplineAll( disciplineId )
                           .then( data => { this.examens = data;                           
                               console.log('DataManager: Получены все экзамены из сервиса') 
                            }
                     );
    }

}