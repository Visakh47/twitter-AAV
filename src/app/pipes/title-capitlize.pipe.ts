import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCapitlize',
})
export class TitleCapitlizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.replace(/\b\w/g, (matched) => matched.toUpperCase());
  }
}
