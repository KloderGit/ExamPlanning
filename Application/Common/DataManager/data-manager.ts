import {
    ExamenModelNew
} from './../../Models/examen-new.model';
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
    examens: ExamenModelNew[] = new Array();

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

    // getExamensFromService(disciplineId: string, year: number, month: number) {
    //     this.service.getExamensForDiscipline(disciplineId, year, month)
    //         .then(data => {
    //             for (let i = 0; i < data.length; i++) {
    //                 this.examens.push(data[i]);
    //             }
    //             console.log('DataManager: Получены экзамены из сервиса на месяц - ' + year + "/" + month)
    //         });
    // }

    getExamensByDiscipline(disciplineId: string) {
        return this.examens.filter(item => item.disciplineId == disciplineId);
    }

    // getExamensFromServiceAll(disciplineId: string) {
    //     this.service.getExamensForDisciplineAll(disciplineId)
    //         .then(data => {
    //             this.examens = [];
    //             for (let i = 0; i < data.length; i++) {
    //                 this.examens.push(data[i]);
    //             }
    //             console.log('DataManager: Получены все экзамены из сервиса')
    //         });
    // }

    // addExamen(inObject: any) {

    //     for (let i = 0; i < inObject.length; i++) {
    //         let ex = new ExamenModelNew();
    //         ex.id = "new"
    //         ex.disciplineId = "disc-111";
    //         ex.guid = "c4b67ca4-f51d-4a29-a740-49cba471ec28";
    //         ex.startTime = inObject[i].startTime;
    //         ex.endTime = inObject[i].endTime;
    //         ex.student = undefined;
    //         ex.studentplace = false;
    //         ex.rate = "0";

    //         this.examens.push(ex);
    //         console.log(ex);

    //     }

    // }

    getExamensNew(disciplineId: string, year: number, month: number) {
        this.service.getExamensNew(disciplineId, year, month)
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    this.examens.push(data[i]);
                }
                console.log('DataManager: Получены экзамены из сервиса на месяц - ' + year + "/" + month);
                console.log(this.examens);
            });
    }

}
