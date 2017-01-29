import { ExamenModel } from './../../Models/examen.model';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

declare var $:any;

@Component({
	moduleId: module.id,
	selector: 'dayOfCalendar',
	templateUrl: 'dayOfCalendar.component.html',
	styleUrls: ['dayOfCalendar.component.css']
})

export class DayOfCalendarComponent implements OnInit, AfterViewInit, OnDestroy {
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
			<div class = "content-of-popover">
				<p><strong>Всего эзаменов: ` + this.examens.length +`</strong></p>
				<p>Занято - ` + this.countInvited().length + ` (<strong>` + this.percentInvite() + `%</strong>)</p>
				<div class="dropup">
				<button class="btn btn-info btn-sm btn-block dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Действия
					<span class="caret"></span>
				</button>
				<ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
					<li><a href="#">Перенос</a></li>
					<li><a href="#">Копировать</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="#">Редактировать</a></li>
				</ul>
				</div>				
			</div>
			`;
		} else {
 			popupString = `
			<div class = "content-of-popover">
				<p><strong>` + this.percentAccepted() +`% - успешно сданы</strong></p>
				<ul class="legend-popover">
					<li>` + ( this.isNeud() > 0? this.isNeud() : 0 ) + `%: Неудовлетв.</li>
					<li>` + ( this.isThre() > 0? this.isThre() : 0 ) + `%: Удовлетв.</li>
					<li>` + ( this.isFour() > 0? this.isFour() : 0 ) + `%: Хорошо</li>
					<li>` + ( this.isFive() > 0? this.isFive() : 0 ) + `%: Отлично</li>
					<li>` + ( this.isNone() > 0? this.isNone() : 0 ) + `%: Нет оценки</li>
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
		return (this.percentInvite() + "/100");
	}

	percentAccepted(){
		let count = this.countOfRate("3") + this.countOfRate("4") + this.countOfRate("5");
		if ( count == 0 ){
			return 0;
		} else {
			return this.percentIn( count, this.countInvited().length );
		}		
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


	ngOnDestroy(){
		$(this.popoverTag.nativeElement).popover('destroy');
	}
}



