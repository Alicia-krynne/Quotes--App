import { Directive,ElementRef  } from '@angular/core';

@Directive({
  selector: '[appVote]'
})
export class VoteDirective {

  constructor( private elem:ElementRef) { 
  this.elem.nativeElement.style.textDecoration='up-vote';

  }


}
