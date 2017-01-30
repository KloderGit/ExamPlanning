import {
    ExamenModel
} from './../../Models/examen.model';
import {
    DisciplineModel
} from './../../Models/discipline.model';
import {
    TeacherModel
} from './../../Models/teacher.model';
import {
    ServiseFromJson
} from './../../Services/servise-from-json';
import {
    Injectable
} from '@angular/core';

@Injectable()
export class DataManager {

    disciplines: DisciplineModel[] = new Array();
    examens: ExamenModel[] = new Array();

    constructor(private service: ServiseFromJson) {
        console.log('Создание DataManager');
        this.loadDisciplines();
    }

    //  Дисциплины

    private loadDisciplines() {
        this.service.getDisciplinesAll()
            .then(data => {
                this.disciplines = data;
                console.log('DataManager: Получены дисциплины из сервиса')
            });
    }

    getDisciplinesAll() {
        return this.disciplines;
    }

    getDiscipline(id: string) {
        let index = this.disciplines.map(x => x.id).indexOf(id);
        return this.disciplines[index];
    }


    //  Экзамены

    getExamensByDiscipline(disciplineId: string) {
        return this.examens.filter(item => item.disciplineId == disciplineId);
    }

    getExamensFromService(disciplineId: string, year: number, month: number) {
        this.service.getExamensForDiscipline(disciplineId, year, month)
            .then(data => {
               for (var i = 0; i < data.length; i++) {
                   let ex = new ExamenModel();
                   ex.id = data[i].id;
                   ex.disciplineId = data[i].disciplineId;
                   ex.startTime = data[i].startTime;
                   ex.endTime = data[i].endTime;
                   ex.isShared = data[i].isShared;
                   ex.limit = data[i].limit;
                   ex.students = data[i].students;
                   this.examens.push( ex  );
               }
                console.log('DataManager: Получены экзамены из сервиса на месяц - ' + year + "/" + month);
            });
    }

    addExamen(inObject: any) {
        for (let i = 0; i < inObject.length; i++) {
            
            let ex = new ExamenModel();
            ex.id = "new";
            ex.disciplineId = "disc-111";
            ex.startTime = inObject[i].startTime;
            ex.endTime = inObject[i].endTime;
            ex.isShared = inObject[i].countPlace != 1 ? true : false;
            ex.limit = inObject[i].countPlace != 1 ? inObject[i].countPlace : null;
            ex.students = [];

            this.examens.push(ex);
        }
    }
}
