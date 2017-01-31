import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'ObjToMonthPipe'
})
export class ObjectToMonthTimestampPipe implements PipeTransform {
  transform(array: { disciplineID: string, year: number, month: number }[]) {
      return array.map( item => {   let date = new Date( item.year, item.month );
                                    return +date;
                                }).sort( sortfn );    
    function sortfn( a, b ){
        return a - b;
    }
  }
}
