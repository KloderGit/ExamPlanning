export class ExamenModelNew{    
    id: string;
    disciplineId: string;
    private _startTime: Date;
    private _endTime: Date;

    isShared: boolean;
    limit: number;

    students: Array<string>;

    public get startTime() : Date {
        return this._startTime;
    }
    public set startTime(value) {
        this._startTime = new Date(value);
    }
    public get endTime() {
        return this._endTime;
    }
    public set endTime(value: Date | string) {
        this._endTime = new Date(value);
    }    
}