import { Pipe, PipeTransform } from '@angular/core';
import { IPeople } from '../interfaces/people.interface';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {

  transform(value: Array<IPeople>, sortingColumn: string, isDesc: boolean): Array<IPeople> {
    if (value && sortingColumn && value.length > 0 && sortingColumn.length > 0) { 
      value.sort((a, b) => {
        if (a[sortingColumn] < b[sortingColumn]) {
          return -1;
        } else {
          return 1;
        }
      });
      if (isDesc === false) {
        value.reverse()
      }
    }
    return value;
  }

}
