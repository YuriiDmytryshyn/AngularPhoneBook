import { Pipe, PipeTransform } from '@angular/core';
import { IPeople } from '../interfaces/people.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<IPeople>, field: string): Array<IPeople> {
    if (!field) {
      return value;
    }
    if (!value) {
      return value;
    }
    return value.filter(user =>
      user.firstName.toLowerCase().includes(field.toLowerCase()) ||
      user.secondName.toLowerCase().includes(field.toLowerCase()) ||
      user.numberPhone.includes(field));
  }

}
