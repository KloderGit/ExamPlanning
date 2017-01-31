import { ExamenModel } from './../../Models/examen.model';
import { MonthGrid } from './../../Models/Calendar/month-grid';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'month',
	templateUrl: 'month.component.html',
	styleUrls: ['month.component.css']
})

export class MonthComponent implements OnInit {
	@Input() examens: ExamenModel[] = new Array();
	@Input() timestamp: Date;
	@Input() disciplineID: string;
	grid: MonthGrid;

	constructor( private router: Router ){
	}

	ngOnInit() {
		this.grid = new MonthGrid( new Date ( this.timestamp) );
	}

	getMonthName(){
		let dateForLocal = new Date( this.timestamp );
		let str = dateForLocal.toLocaleString("ru-ru", { month: "long" }) + " " + dateForLocal.getFullYear();
        return str.charAt(0).toUpperCase() + str.slice(1);
    } 

	editDay( date: Date ){
		this.router.navigate(['/addexamens', +date,  this.disciplineID ]);
	}

}