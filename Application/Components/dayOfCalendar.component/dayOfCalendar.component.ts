import { ExamenModel } from './../../Models/examen.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'dayOfCalendar',
	templateUrl: 'dayOfCalendar.component.html'
})

export class DayOfCalendarComponent implements OnInit {
	@Input() examens: ExamenModel[];

	ngOnInit() {}
}