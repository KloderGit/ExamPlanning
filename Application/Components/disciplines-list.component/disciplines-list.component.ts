import { DataManager } from './../../Common/DataManager/data-manager';
import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'disciplines-list',
	templateUrl: 'disciplines-list.component.html'
})

export class DisciplinesListComponent implements OnInit {

	constructor( private dataManager: DataManager){}

	ngOnInit() {}

	getDisciplines(){
		return this.dataManager.getDisciplinesAll();
	}

}