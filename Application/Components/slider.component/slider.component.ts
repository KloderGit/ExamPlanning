import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

	declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'slider',
	templateUrl: 'slider.component.html',
	styleUrls: ['slider.component.css']	
})

export class SliderComponent implements OnInit {

	@ViewChild("slider") slider: ElementRef;

	@Input() min: number = 0;
	@Input() max: number = 100;

	@Input() value: number = 10;

	@Output() onChangeSlider = new EventEmitter();

	ngOnInit() {
		let context = this;

		this.slider.nativeElement.addEventListener("input", function() {
			context.onChangeSlider.emit( parseInt(this.value) );
		}, false);
	}
}