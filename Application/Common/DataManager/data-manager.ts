import { LoggerService } from './../../Services/logger.service';
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
    teachers: TeacherModel[] = new Array();

    constructor(private service: ServiseFromJson,
                private logger: LoggerService
    ) {
        console.log('Создание DataManager');
        this.loadTeachers();
        this.loadDisciplines();
    }

    //  Дисциплины

    private loadDisciplines() {
        this.service.getDisciplinesAll()
            .then(data => {
               for (var i = 0; i < data.length; i++) {
                   let dscp = new DisciplineModel();
                   dscp.id = data[i].id;
                   dscp.title = data[i].title;
                   dscp.teacherId = data[i].teacherId;
                   dscp.active = data[i].active;
                   dscp.format = data[i].format;
                   this.disciplines.push( dscp );
               }
                console.log('DataManager: Получены дисциплины из сервиса')
            });
    }

    private loadTeachers() {
        this.service.getTeachersAll()
            .then(data => {
               for (var i = 0; i < data.length; i++) {
                   let thr = new TeacherModel();
                   thr.id = data[i].id;
                   thr.name = data[i].name;
                   this.teachers.push( thr );
               }
                console.log('DataManager: Получены преподаатели из сервиса', this.teachers)
            });
    }

    getDisciplinesAll() {
        return this.disciplines;
    }

    getTeachersAll() {
        return this.teachers;
    }

    getTeacherById( id: string ) {
        return this.teachers[ this.teachers.map( item => item.id ).indexOf(id) ];
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
            ex.disciplineId = inObject[i].disciplineId;
            ex.startTime = inObject[i].startTime;
            ex.endTime = inObject[i].endTime;
            ex.isShared = inObject[i].countPlace != 1 ? true : false;
            ex.limit = inObject[i].countPlace != 1 ? inObject[i].countPlace : null;
            ex.students = [];

            this.examens.push(ex);
        }
    }
}
