import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColoryDirective]',
  exportAs: 'colory'
})
export class ColoryDirective {


  @HostBinding('style.color') color = 'red'

  changeColor(innerColor: string) {
    this.color = innerColor
  }
  constructor() { }

}
