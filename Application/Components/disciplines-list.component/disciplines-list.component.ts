import { DataManager } from './../../Common/DataManager/data-manager';
import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'disciplines-list',
	templateUrl: 'disciplines-list.component.html'
})

export class DisciplinesListComponent implements OnInit {

	isActive: boolean = true;
	forTeacher: string = 'all';

	constructor( private dataManager: DataManager){}

	ngOnInit() {}

	getDisciplines(){
		let array = this.dataManager.getDisciplinesAll();

		if ( this.isActive ){
			array = array.filter( item => item.active );
		}
		if ( this.forTeacher != 'all'){
			array = array.filter( item => item.teacherId == this.forTeacher );
		}
		
		return array;
	}

	getTeacher( id: string ){
		return this.dataManager.getTeacherById(id);
	}

	filterActiveChange( checked: boolean ){
		this.isActive = checked;
	}

	filterTeacherChange( teacherId: string ){
		console.log(teacherId);
		this.forTeacher = teacherId;
	}	

	getCurrentTeachers(){
		return	this.dataManager.getDisciplinesAll().map( item => this.getTeacher(item.teacherId) )
					.filter( (value, index, self) => self.indexOf(value) === index );
	}

}
