import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'a'
})
export class APipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
