import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { VoteDirective } from './vote.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteHeaderComponent } from './quote-header/quote-header.component';
import { QuoteFooterComponent } from './quote-footer/quote-footer.component';


@NgModule({
  declarations: [
    QuoteComponent,
    QuoteDetailComponent,
    VoteDirective,
    DateCountPipe,
    QuoteFormComponent,
    QuoteHeaderComponent,
    QuoteFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
 
})
export class AppModule { }
