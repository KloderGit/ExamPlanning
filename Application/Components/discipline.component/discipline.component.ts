import { DataManager } from './../../Common/DataManager/data-manager';
import { DisciplineModel } from './../../Models/discipline.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $:any;

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

		this.dataPickerInit();
	}


	dataPickerInit(){
		$('.datepicker-here').datepicker({
			autoClose: true,
			altField: "#dataPickerAlternate",
			altFieldDateFormat: "yyyy:m"
		});
	}

	getExamens(){
		return this.dataManager.getExamensByDiscipline( this.discipline.id );
	}

	loadMonth( year: number, month: number ){
		this.dataManager.getExamensNew( this.discipline.id, year, month );
	}

	loadNextOrPreviusMonth( direction?: boolean, anyMonth?: string ){
		let year: number;
		let month: number;

			let months = this.getExamens().map( item => +item.startTime );

			let toggle = direction ? 1: -1;
			let timestamp = direction ? Math.max.apply( Math, months ) : Math.min.apply( Math, months );
			let date = new Date(timestamp);
			date.setMonth(date.getMonth() + toggle);
			year = date.getFullYear();
			month = date.getMonth();

		this.loadMonth( year, month );		
	}

	selectAnyMonth( anyMonth: string ){

		if ( anyMonth =="" || anyMonth == undefined){
			alert("Укажите месяц для загрузки!");
			return;
		}

		let array = anyMonth.split(':');
		let year = parseInt(array[0]);
		let month = parseInt(array[1]) - 1;

		this.loadMonth( year, month );
	}

	rrr(){
		// console.log( this.examens );
	}

}