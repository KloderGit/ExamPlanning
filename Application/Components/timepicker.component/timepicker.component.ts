import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'timepicker',
	templateUrl: 'timepicker.component.html',
	styleUrls: ['timepicker.component.css']
})

export class TimepickerComponent implements OnInit {

	value: { hours: number, minutes: number } = { hours: undefined, minutes: undefined };

 	@Input() defaultHour: number = 10;
	@Input() defaultMinute: number = 0;

	ngOnInit() {
		this.value.hours = this.defaultHour;
		this.value.minutes = this.defaultMinute;
	}

	changeHours( hours: number ){
		if (typeof hours == 'number'){
			this.value.hours = hours;
		}
	}

	changeMinutes( minutes: number ){
		if (typeof minutes == 'number'){
			this.value.minutes = minutes;
		}
	}
}