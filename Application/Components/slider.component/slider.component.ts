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

	@Output() change = new EventEmitter();

	ngOnInit() {
		let context = this;
		// $(this.slider.nativeElement).on("mousedown", function(){
		// 	$(this).on("mousemove", function(){
		// 		if( this.value != context.value){
		// 			context.change.emit(this.value);
		// 		}
		// 	});
		// });

		this.slider.nativeElement.addEventListener("input", function() {
			context.change.emit( parseInt(this.value) );
		}, false);
	}
}