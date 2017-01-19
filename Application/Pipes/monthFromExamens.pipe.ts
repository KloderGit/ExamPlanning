import { ExamenModel } from './../Models/examen.model';
import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'monthFromExamens'
})
export class MonthFromExamensPipe implements PipeTransform {
  transform(array: ExamenModel[]) {

      return array.map( item => +item.startTime.getMonth() )
                  .filter( (value, index, _this) => _this.indexOf(value) === index )
                  .sort();
  }
}