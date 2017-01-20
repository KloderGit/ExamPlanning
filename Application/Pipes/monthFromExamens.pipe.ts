import { ExamenModel } from './../Models/examen.model';
import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'monthFromExamens'
})
export class MonthFromExamensPipe implements PipeTransform {
  transform(array: ExamenModel[]) {

      return array.map( item => {
                            let tempDate = new Date ( item.startTime.getFullYear(), item.startTime.getMonth() );
                            return +tempDate;
                  })
                  .filter( (value, index, _this) => _this.indexOf(value) === index )
                  .sort( sortfn );
    
    function sortfn( a, b ){
        return a - b;
    }
  }
}