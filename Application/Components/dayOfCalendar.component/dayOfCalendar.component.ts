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
		$(".pie-chart").peity("donut", {
					radius: 30,
					fill: function(_, i, all) {
						let colors = [ "rgb(255, 92, 92)", "rgb(255, 173, 92)", "rgb(204, 255, 102)", "rgb(39, 235, 0)", "rgb(204, 204, 204)" ];
						// var g = parseInt((i / all.length) * 255);
						// return "rgb(255, " + g + "," + (g-10) + ")";
						return colors[i];
					}
		// fill: ["#bf4040", "#bfbf40", "#80bf40", "#40bf40", "#eeeeee" ],
		});

		$('.day-popover').popover({
			'html':true,    
    		content: `
			<div class = "popover-content">
			<p><strong>День</strong></p>
			<ul>
					<li>20% : Двоек</li>
					<li>30% : Троек</li>
					<li>15% : Четверок</li>
					<li>25% : Пятерок</li>
					<li>10% : Невыставлено</li>
			</ul>
					
					<div class="dropdown">
  <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Dropdown
    <span class="caret"></span>
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
		</div>			
					`
		});

	$(".donut-chart").peity("pie", {
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



