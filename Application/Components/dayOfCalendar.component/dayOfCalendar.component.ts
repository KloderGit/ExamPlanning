import { ExamenModel } from './../../Models/examen.model';
import { Component, OnInit, Input } from '@angular/core';

declare var $:any;

@Component({
	moduleId: module.id,
	selector: 'dayOfCalendar',
	templateUrl: 'dayOfCalendar.component.html',
	styleUrls: ['dayOfCalendar.component.css']
})

export class DayOfCalendarComponent implements OnInit {
	@Input() examens: ExamenModel[];

	ngOnInit() {
		$(".donut-chart").peity("donut", {
					radius: 30,
		fill: ["#bf4040", "#bfbf40", "#80bf40", "#40bf40", "#eeeeee" ],
		});

	$(".pie-chart").peity("pie", {
		radius: 30,
		fill: ["#00bfff",  "#cccccc" ],
		})
	}

	isFuture(){
		return +this.examens[0].startTime > +new Date();
	}

	countInvited(){
		return this.examens.filter( item => item.studentplace);
	}
	percentInvite(){
		return this.percentIn( this.countInvited().length, this.examens.length)
	}
	invitedString(){
		return (this.countInvited().length + "/" + this.examens.length);
	}

	isNeud(){
		let count = this.percentOfRate("1") + this.percentOfRate("2");
		return this.percentIn( count, this.examens.length );
	}

	isThre(){
		let count = this.percentOfRate("3");
		return this.percentIn( count, this.examens.length );
	}

	isFour(){
		let count = this.percentOfRate("4");
		return this.percentIn( count, this.examens.length );
	}

	isFive(){
		let count = this.percentOfRate("5");
		return this.percentIn( count, this.examens.length );
	}

	isNone(){
		return 100 - (this.isNeud() + this.isThre() + this.isFour() + this.isFive());
		// return this.percentIn( count, this.examens.length );
	}

	percentOfRate( rate: string ){
		return this.examens.filter( item => item.rate == rate ).length;
	}

	percentIn( x, y ){
		return Math.floor( 100 / ( y / x ));
	}
}



