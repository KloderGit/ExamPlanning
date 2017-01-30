import { ExamenModelNew } from './../Models/examen-new.model';
import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'examensForDay'
})
export class ExamensForDayPipe implements PipeTransform {
  transform(array: ExamenModelNew[], date: Date) {
      return array.filter( function(item){
        let src = new Date ( item.startTime.getFullYear(), item.startTime.getMonth(), item.startTime.getDate() );
        let inc = new Date ( date.getFullYear(), date.getMonth(), date.getDate());
        return +src == +date;
      });
  }
}
