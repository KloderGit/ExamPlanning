import { ExamenModel } from './../../Models/examen.model';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
	moduleId: module.id,
	selector: 'dayOfCalendar',
	templateUrl: 'dayOfCalendar.component.html',
	styleUrls: ['dayOfCalendar.component.css']
})

export class DayOfCalendarComponent implements OnInit, AfterViewInit {
	@Input() examens: ExamenModel[];
	@ViewChild("popoverTag") popoverTag: ElementRef;
	@ViewChild("donutChart") donutChart: ElementRef;
	@ViewChild("pieChart") pieChart: ElementRef;

	ngOnInit() {}

	ngAfterViewInit(){

		if ( this.pieChart != undefined){
			$(this.pieChart.nativeElement).peity("pie", {
				radius: 30,
				fill: ["#00bfff",  "#cccccc" ]
			});
		}
		
		if (this.donutChart != undefined){
			$(this.donutChart.nativeElement).peity("donut", {
				radius: 30,
				fill: function(_, i, all) {
						let colors = [ "rgb(255, 92, 92)", "rgb(255, 173, 92)", "rgb(204, 255, 102)", "rgb(39, 235, 0)", "rgb(204, 204, 204)" ];
						return colors[i];
					}
			});
		}

		let popupString: string;

		if ( this.isFuture() ){
			popupString = `
			<div class = "popover-content">
				<p><strong>День</strong></p>
				<p>Записано:` + this.countInvited().length + `</p>
			</div>
			`;
		} else {
 			popupString = `
			<div class = "popover-content">
				<p><strong>День</strong></p>
				<ul>
					<li>` + this.isNeud() + `%: Неудовлетворительно</li>
					<li>` + this.isThre() + `%: Удовлетворительно</li>
					<li>` + this.isFour() + `%: Хорошо</li>
					<li>` + this.isFive() + `%: Отлично</li>
					<li>` + this.isNone() + `%: Пустых или Пропущенных</li>
				</ul>
			</div>
			`;
		}

		$(this.popoverTag.nativeElement).popover({
			'html':true,    
    		content: popupString
		});
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

	percentAccepted(){
		let count = this.countOfRate("3") + this.countOfRate("4") + this.countOfRate("5");
		return this.percentIn( count, this.countInvited().length );
	}

	isNeud(){
		let count = this.countOfRate("1") + this.countOfRate("2");
		return this.percentIn( count, this.examens.length );
	}

	isThre(){
		let count = this.countOfRate("3");
		return this.percentIn( count, this.examens.length );
	}

	isFour(){
		let count = this.countOfRate("4");
		return this.percentIn( count, this.examens.length );
	}

	isFive(){
		let count = this.countOfRate("5");
		return this.percentIn( count, this.examens.length );
	}

	isNone(){
		return 100 - (this.isNeud() + this.isThre() + this.isFour() + this.isFive());
		// return this.percentIn( count, this.examens.length );
	}

	countOfRate( rate: string ){
		return this.examens.filter( item => item.studentplace )
			.filter( item => item.rate == rate ).length;
	}

	percentIn( x, y ){
		return Math.floor( 100 / ( y / x ));
	}
}



