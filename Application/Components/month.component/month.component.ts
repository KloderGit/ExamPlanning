import { MonthGrid } from './../../Models/Calendar/month-grid';
import { ExamenModel } from './../../Models/examen.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'month',
	templateUrl: 'month.component.html'
})

export class MonthComponent implements OnInit {
	@Input() examens: ExamenModel[] = new Array();

	grid: MonthGrid;

	constructor(){
	}

	ngOnInit() {
		this.grid = new MonthGrid( this.examens[0].startTime );
	}
}