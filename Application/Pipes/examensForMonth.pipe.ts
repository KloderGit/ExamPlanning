import { ExamenModel } from './../Models/examen.model';
import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'examensForMonth'
})
export class ExamensForMonthPipe implements PipeTransform {
  transform(array: ExamenModel[], date: number) {
    return array.filter( function(item){
      return +item.startTime.getMonth() == +date;
    });
  }
}