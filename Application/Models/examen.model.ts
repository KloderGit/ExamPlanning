
export class ExamenModel{

    id: string;
    guid: string;
    disciplineId: string;
    startTime: Date;
    endTime: Date;

    studentplace: boolean;
    student?: string;
    rate?: string;


    constructor( id?: string, startTime?: string, endtTime?: string, disciplineId?: string, 
    student?: string, studentplace?: boolean, rate?: string ){
        this.id = id;
        this.startTime = new Date (startTime);
        this.endTime = new Date (endtTime);
        this.disciplineId = disciplineId;
        this.student = student;
        this.studentplace = studentplace;
        this.rate = rate;
    }
}