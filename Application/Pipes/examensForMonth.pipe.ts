import { ExamenModelNew } from './../Models/examen-new.model';
import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'examensForMonth'
})
export class ExamensForMonthPipe implements PipeTransform {
  transform(array: ExamenModelNew[], timestamp: number) {
    let tempDate = new Date (timestamp);
    return array.filter( function(item){
      return (item.startTime.getFullYear() == tempDate.getFullYear()) && (item.startTime.getMonth() == tempDate.getMonth());
    });
  }
}