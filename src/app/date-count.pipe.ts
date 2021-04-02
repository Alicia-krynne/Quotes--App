import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount',
})
export class DateCountPipe implements PipeTransform {
  transform(value: any): string {
    let today: Date = new Date(); // current date and time
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    var dateDifference = Math.abs(todayWithNoTime - value); // borrowed math  fomula
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001; 
    var dateCounter = dateDifferenceSeconds / secondsInDay;
    let outputMessage: string;

    if (dateCounter >= 1 && value < todayWithNoTime) {
      outputMessage = `${dateCounter} days ago`;
      return outputMessage;
    } else {
      outputMessage = `Today`;
      return outputMessage;
    }
  }
}
