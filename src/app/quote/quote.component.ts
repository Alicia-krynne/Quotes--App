import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(),
    
  ];
  toggleDetails(index:any){ 
    this.quotes[index].showAbout = !this.quotes[index].showAbout;
  }


  deleteQuote(isDelete:any, index : number){
    if (isDelete) {
      this.quotes.splice(index,1);
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
  
      