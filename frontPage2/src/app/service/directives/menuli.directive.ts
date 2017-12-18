import {Directive, ElementRef, Renderer , HostListener, ContentChild  ,Input} from '@angular/core';

@Directive({
  selector: '[menuLiDirective]'
})

export class MenuLiDirective {

  @ContentChild('subMenu') child;
  constructor(private elementRef: ElementRef, private renderer: Renderer ) {
  }
  @HostListener('click' )
  show(): void {


  }

}
