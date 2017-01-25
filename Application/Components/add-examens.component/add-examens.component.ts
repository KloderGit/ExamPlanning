import { DataManager } from './../../Common/DataManager/data-manager';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
	moduleId: module.id,
	selector: 'add-examens',
	templateUrl: 'add-examens.component.html',
	styleUrls: [ 'add-examens.component.css' ]
})

export class AddExamensComponent implements OnInit {

	formState = {
		date: new Date(),
		type: { isSet: false, value: '' }
	}

	constructor( private route: ActivatedRoute,
				 private dataManager: DataManager){
		console.log("Создан компонент создания экзаменов");
	}

	ngOnInit() {
		let urlParam = this.route.snapshot.params['date'];
		this.formState.date.setTime(urlParam);

		this.init_jquery();
	}

	init_jquery(){
			$('.nav-tabs > li a[title]').tooltip();

			$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
				var $target = $(e.target);
				if ($target.parent().hasClass('disabled')) {
					return false;
				}
			});

			$(".next-step").click(function (e) {
				var $active = $('.wizard .nav-tabs li.active');
				$active.next().removeClass('disabled');
				$($active).next().find('a[data-toggle="tab"]').click();
			});
			$(".prev-step").click(function (e) {
				var $active = $('.wizard .nav-tabs li.active');
				$($active).prev().find('a[data-toggle="tab"]').click();
			});
	};

	changeExamenType( type: string ){
		this.formState.type = { isSet: true, value: type }
		console.log( type );
	}
	
}
