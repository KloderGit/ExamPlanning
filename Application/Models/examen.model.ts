
export class ExamenModel{

    id: string;
    guid: string;

    startTime: Date;
    endTime: Date;    

    constructor( id: string, startTime: string, endtTime: string ){
        this.id = id;
        this.startTime = new Date (startTime);
        this.endTime = new Date (endtTime);
    }
}