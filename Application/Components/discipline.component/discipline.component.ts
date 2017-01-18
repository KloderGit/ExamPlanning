import { DataManager } from './../../Common/DataManager/data-manager';
import { Discipline } from './../../Models/discipline.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'discipline',
	templateUrl: 'discipline.component.html'
})

export class DisciplineComponent implements OnInit {

	discipline: Discipline;

	constructor( private route: ActivatedRoute,
				 private dataManager: DataManager){}

	ngOnInit() {
		let id = this.route.snapshot.params['id'];
		this.discipline = this.dataManager.getDiscipline(id);
	}
}