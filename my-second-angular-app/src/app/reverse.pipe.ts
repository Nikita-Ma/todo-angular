import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false//def TRUE
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('').reverse().join('')
  }

}
