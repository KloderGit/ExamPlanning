import { DisciplineModel } from './../../Models/discipline.model';
import { TeacherModel } from './../../Models/teacher.model';
import { ServiseFromJson } from './../../Services/servise-from-json';
import { Injectable } from '@angular/core';

@Injectable()
export class DataManager {

    disciplines: DisciplineModel[] = new Array();

    constructor( private service: ServiseFromJson ){
        console.log('Создание DataManager');

        this.service.getDisciplinesAll()
                    .then( data => { this.disciplines = data; console.log('DataManager: Получены дисциплины из сервиса') } );
    }

    getDisciplinesAll(){
       return this.disciplines;
    }

    getDiscipline( id: string){
        let index = this.disciplines.map(x => x.id).indexOf(id);
        return this.disciplines[index];
    }

    getExamens( parentId: string ){
        
    }

}