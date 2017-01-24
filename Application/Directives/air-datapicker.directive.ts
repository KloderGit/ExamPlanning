import {Directive, ElementRef, OnInit} from '@angular/core';
// import { $ } from './../Common/function.common'

declare var $:any;

@Directive({
    selector: '[air-datapicker-init]'
})
export class AirDataPickerInitDirective implements OnInit{
     
    constructor(private element: ElementRef){}

    ngOnInit(){
        this.init_plugin();
    }

    init_plugin(){

                let t = new Date();
                t.setFullYear(2017);
                t.setMonth(7);
                t.setDate(20);

        $(this.element.nativeElement).datepicker({
            inline: true,
            showOtherMonths: true,
            timepicker: true
		});

        var datepicker = $(this.element.nativeElement).datepicker().data('datepicker');
        datepicker.date = new Date(t);
    }
}