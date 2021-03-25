import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comma-seperated-number'
})
export class CommaSeperatedNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
