import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnifier]'
})
export class MagnifierDirective {
  @HostBinding('width') width = 200;

  @HostListener('click')
  onHover() {
    this.width = 300;
  }

  constructor() { }

}
