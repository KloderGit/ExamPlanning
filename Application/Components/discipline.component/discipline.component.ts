import { ExamenModel } from './../../Models/examen.model';
import { DataManager } from './../../Common/DataManager/data-manager';
import { DisciplineModel } from './../../Models/discipline.model';
import { Component, OnInit } from '@angular/core';
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
			if ( this.getExamens().length == 0 ){ this.loadMonth( new Date().getMonth() ) }			
		}
	}

	getExamens(){		
		return this.dataManager.getExamensByDiscipline( this.discipline.id );
	}

	loadMonth( month: number ){
		this.dataManager.getExamensFromService( this.discipline.id, month );
	}


	rrr(){
		this.dataManager.examens.push( new ExamenModel( "rrrr", "2017/1/5 15:00", "2017/1/5 15:40", "disc-111") );
		console.log( this.dataManager.examens );
	}

}