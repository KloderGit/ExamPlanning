import { DataManager } from './../../Common/DataManager/data-manager';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { addFirstZero } from './../../Common/function.common'

declare var $:any;

@Component({
	moduleId: module.id,
	selector: 'add-examens',
	templateUrl: 'add-examens.component.html',
	styleUrls: [ 'add-examens.component.css' ]
})

export class AddExamensComponent implements OnInit {

	date: Date = new Date();

	divided: { startTime: Date, endTime: Date, isSelected: boolean }[] = [];

	divideBy: number = 10;
	divideByCheck: boolean = false;

	formState: { 
		type?: { 
			isSet: boolean,
			value: string
		},
		startTime?: Date,
		endTime?: Date,
		studentCount?: number
 	};

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
		this.formState.type = { isSet: true, value: type };
		this.divided = [];
	}

	startTimeChange( value: any ){
		this.formState.startTime.setHours( value.hours, value.minutes );
		this.divided = [];
	}
	
	endTimeChange( value: any ){
		this.formState.endTime.setHours( value.hours, value.minutes );
		this.divided = [];
	}

	changeStudentCount( value: number ){
		this.formState.studentCount = value;
	}

	diffTime(){
		let diff = ( +this.formState.endTime - +this.formState.startTime );
		return diff;
	}

	formatTimeDigit(n){		
		return addFirstZero( n );
	}

	addExamen(){
		console.log( this.formState );
	}


	changeDivideByButton( value: any ){
		value = parseInt(value);
		this.divideBy = value;
		this.dividePeriod();
	}
	changeDivideByInput( value: any ){
		value = parseInt(value);
		if( value < 5) { return }
		this.divideBy = value;
		this.dividePeriod();		
	}
	changeDivideByCheckBox( value: any ){
		this.divideByCheck = value;
		this.dividePeriod();		
	}

	dividePeriod(){
		let n = this.divideBy;
		let h = this.divideByCheck;
		this.divided = [];
		let count: number;
		let mod = (this.diffTime() / 1000 / 60) % n;

		if ( mod > 0 && h ){
			count = Math.floor( (this.diffTime() / 1000 / 60) / n ) + 1;
		} else {
			count = Math.floor( (this.diffTime() / 1000 / 60) / n );
		}

		let index = 0;
		let stT = this.formState.startTime;

		for(let i=0; i < count; i++){
			let tm = new Date(stT);			
			tm.setMinutes(index);
			let mt = new Date(stT);
			mt.setMinutes(index+n);
			this.divided[i] = { startTime: tm, endTime: mt, isSelected: true };
			index +=n;
		}
	}
}
