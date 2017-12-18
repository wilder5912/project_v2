import {Directive, ElementRef, Renderer , HostListener, ContentChild, Input} from '@angular/core';

@Directive({
  selector: '[menuLiSecondDirective]'
})


export class MenuLiSecondDirective {


  constructor(private elementRef: ElementRef, private renderer: Renderer ) {
  }
  @HostListener('click' )
  show(): void {
  }

}
