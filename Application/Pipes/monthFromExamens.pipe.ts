import { ExamenModel } from './../Models/examen.model';
import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'monthFromExamens'
})
export class MonthFromExamensPipe implements PipeTransform {
  transform(array: ExamenModel[]) {

      return array.map( item => +item.startTime.getMonth() )
                  .filter(function(value, index, _this) {
    	                return _this.indexOf(value) === index;
                });

  }
}