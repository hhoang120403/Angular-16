import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/Student';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(list: Student[], filterBy: string): Student[] {
    console.log('Filter Pipe Called');
    if (
      filterBy.toLowerCase() === 'all' ||
      filterBy === '' ||
      list.length === 0
    ) {
      return list;
    }

    return list.filter(
      (item) => item.gender.toLowerCase() === filterBy.toLowerCase()
    );
  }
}
