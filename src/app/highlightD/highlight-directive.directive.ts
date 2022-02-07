import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor( private eR:ElementRef) {

    eR.nativeElement.style.backgroundColor="aqua"
   }









  

}
