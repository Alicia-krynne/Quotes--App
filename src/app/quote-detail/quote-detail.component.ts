import { Component, OnInit ,Input,Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote'



@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {

  @Input()
  quotes!: Quote;
 @Output() isDelete = new EventEmitter<boolean>();
   quoteDelete(Delete:boolean){
   this.isDelete.emit(Delete); 
  }
  constructor() { }

  ngOnInit(): void {
  }

}




 