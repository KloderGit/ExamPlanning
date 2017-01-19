
export class ExamenModel{

    id: string;
    guid: string;
    disciplineId: string;
    startTime: Date;
    endTime: Date;    

    constructor( id?: string, startTime?: string, endtTime?: string, disciplineId?: string ){
        this.id = id;
        this.startTime = new Date (startTime);
        this.endTime = new Date (endtTime);
        this.disciplineId = disciplineId;
    }
}