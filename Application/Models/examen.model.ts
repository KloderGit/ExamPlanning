
export class ExamenModel{

    id: number;
    disciplineId: string;
    startTime: Date;
    endTime: Date;

    intervals: boolean;
    studentLimit: number;
    students: string[];

    constructor(    startTime: string | Date, 
                    endTime: string | Date,
                    disciplineId: string, 
                    intervals: boolean,
                    studentLimit?: number,
                    students?: string[],
                    id?: number ){
        this.id = id;
        if (typeof startTime == "string") { this.startTime = new Date (startTime); } else { this.startTime = startTime; }
        if (typeof endTime == "string") { this.endTime = new Date (endTime); } else { this.endTime = endTime; }
        this.disciplineId = disciplineId;
        this.intervals = intervals;
        this.studentLimit = studentLimit
        this.students = students;
    }
}