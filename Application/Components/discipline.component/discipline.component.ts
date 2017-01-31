import { LoggerService } from './../../Services/logger.service';
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
				 private logger: LoggerService,
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
		this.dataManager.getExamensFromService( this.discipline.id, year, month );
		this.logger.addMessage( { title: 'DataManager', message: 'Загружены данные: год - ' + year + ', месяц - ' + month, type: 'success' } );		
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

	editDay(){
		this.router.navigate(['/addexamens', + new Date(),  this.discipline.id ]);
	}

}