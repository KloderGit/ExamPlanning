import { MonthGrid } from './../../Models/Calendar/month-grid';
import { ExamenModel } from './../../Models/examen.model';
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

	grid: MonthGrid;

	constructor( private router: Router ){
	}

	ngOnInit() {
		this.grid = new MonthGrid( this.examens[0].startTime );
	}

	getMonthName(){
		let str = this.examens[0].startTime.toLocaleString("ru-ru", { month: "long" }) + " " + this.examens[0].startTime.getFullYear();
        return str.charAt(0).toUpperCase() + str.slice(1);
    } 

	editDay( date: Date ){
		this.router.navigate(['/addexamens', + date ]);
	}

}