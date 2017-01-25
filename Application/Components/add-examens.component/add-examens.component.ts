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

	date: Date = new Date(); 	

	formState: { 
		type?: { 
			isSet: boolean,
			value: string
		},
		startTime?: Date,
		endTime?: Date };

	constructor( private route: ActivatedRoute,
				 private dataManager: DataManager){
		console.log("Создан компонент создания экзаменов");
	}

	ngOnInit() {
		let urlParam = this.route.snapshot.params['date'];
		this.date.setTime(urlParam);
		this.date.setHours(0,0,0);

		this.formState =
		{
			type: { isSet: false, value: ''},
			startTime: new Date( this.date ),
			endTime: new Date( this.date )
		}

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
	}

	startTimeChange( value: any ){
		this.formState.startTime.setHours( value.hours, value.minutes );
	}
	
	endTimeChange( value: any ){
		this.formState.endTime.setHours( value.hours, value.minutes );
	}
}
