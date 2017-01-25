import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
	@Input() onlyHours: boolean = false;
	@Output() onChangeTimePicker = new EventEmitter<Object>();

	ngOnInit() {
		this.value.hours = this.defaultHour;
		this.value.minutes = this.defaultMinute;

		this.onChangeTimePicker.emit( this.value );
	}

	changeHours( hours: number ){
			this.value.hours = hours;
			this.onChangeTimePicker.emit( this.value );
	}

	changeMinutes( minutes: number ){
			this.value.minutes = minutes;
			this.onChangeTimePicker.emit( this.value );
	}
}