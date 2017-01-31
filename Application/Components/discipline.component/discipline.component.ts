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
			let currentDate = new Date();
			let curentIsLoaded = this.getMonthLoaded()
										.filter( yar => yar.year == currentDate.getFullYear())
										.filter( mth => mth.month == currentDate.getMonth());
			if ( curentIsLoaded.length == 0 ){
				this.loadMonth( currentDate.getFullYear(), currentDate.getMonth() )
			}			
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
	}

	selectAnyMonth( anyMonth: string ){
		if ( anyMonth =="" || anyMonth == undefined){
            this.logger.addMessage( 
				{	title: 'Выбор месяца', 
					message: 'Выберете месяц для загрузки...',
					type: 'danger' } );		
			return;
		}

		let array = anyMonth.split(':');
		let year = parseInt(array[0]);
		let month = parseInt(array[1]) - 1;

		let test = this.getMonthLoaded().filter( yr => yr.year == year )
										.filter( mn => mn.month == month );

		if (test.length > 0 ){
            this.logger.addMessage( 
				{	title: 'Выбор месяца', 
					message: 'Этот месяц уже загружен...',
					type: 'warning' } );				
		} else {
			this.loadMonth( year, month );
		}				
	}

	getMonthLoaded(){
		return this.dataManager.getLoadedMonth( this.discipline.id );
	}
}