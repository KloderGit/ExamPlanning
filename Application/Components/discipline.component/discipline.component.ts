// import { ExamenModel } from './../../Models/examen.model';
import { DataManager } from './../../Common/DataManager/data-manager';
import { DisciplineModel } from './../../Models/discipline.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'discipline',
	templateUrl: 'discipline.component.html'
})

export class DisciplineComponent implements OnInit {

	discipline: DisciplineModel;

	constructor( private route: ActivatedRoute,
				 private router: Router,
				 private dataManager: DataManager){
		console.log("Создан компонент Дисциплины");
	}

	ngOnInit() {
		let id = this.route.snapshot.params['id'];		
		this.discipline = this.dataManager.getDiscipline(id);

		if ( this.discipline == undefined ) {
			this.router.navigate(['/disciplines']); 
		} else {
			if ( this.getExamens().length == 0 ){ this.loadMonth( new Date().getFullYear(), new Date().getMonth() ) }			
		}
	}

	getExamens(){		
		return this.dataManager.getExamensByDiscipline( this.discipline.id );
	}

	loadMonth( year: number, month: number ){
		this.dataManager.getExamensFromService( this.discipline.id, year, month );
	}

	loadNextOrPreviusMonth( direction?: boolean, anyMonth?: string ){
		let year: number;
		let month: number;

		console.log(direction, anyMonth);
		// anyMonth = new Date("2016/11/14 14:10");

		if ( anyMonth == undefined ) {
			let months = this.getExamens().map( item => +item.startTime );

			let toggle = direction ? 1: -1;
			let timestamp = direction ? Math.max.apply( Math, months ) : Math.min.apply( Math, months );
			let date = new Date(timestamp);
			date.setMonth(date.getMonth() + toggle);
			year = date.getFullYear();
			month = date.getMonth();
		} else {
			let array = anyMonth.split('-');
			year = parseInt(array[0]);
			month = parseInt(array[1]);
			console.log(parseInt(array[0]), parseInt(array[1]));
		}

		this.loadMonth( year, month );		
	}

	selectAnyMonth( month: string ){
		let array = month.split('-');
		this.loadMonth( parseInt(array[0]), parseInt(array[1]) );
	}

	rrr( m ){
		console.log( typeof(m), m );
	}

	ttt(){
		this.dataManager.getExamensFromServiceAll( this.discipline.id );
	}


}