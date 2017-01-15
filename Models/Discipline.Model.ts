
export class Discipline{

    id: string;
    guid: string;
    title: string;
    teacherId: string;
    active: boolean;

    constructor(id:string, title:string, teacherId:string, active:boolean){
        this.id = id;
        this.title = title;
        this.teacherId = teacherId;
        this.active = active;
    }
}