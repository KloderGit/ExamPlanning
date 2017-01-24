import { DataManager } from './../../Common/DataManager/data-manager';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'add-examens',
	templateUrl: 'add-examens.component.html'
})

export class AddExamensComponent implements OnInit {

	date: Date = new Date();

	constructor( private route: ActivatedRoute,
				 private router: Router,
				 private dataManager: DataManager){
		console.log("Создан компонент создания экзаменов");
	}

	ngOnInit() {
		let urlParam = this.route.snapshot.params['data'];		
		this.date.setTime(urlParam);
	}
}