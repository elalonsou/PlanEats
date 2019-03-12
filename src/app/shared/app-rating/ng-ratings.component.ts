import { Component, OnInit, Input } from '@angular/core';
// import { NewsRatingsService } from './news-ratings.service';
// import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-ng-ratings',
  templateUrl: './ng-ratings.component.html',
  styleUrls: ['./ng-ratings.component.css']
})
 // styleUrls: ['./ng-ratings.component.css'],
  // encapsulation: ViewEncapsulation.None
export class NgRatingsComponent implements OnInit {

  checked_5: boolean;
  checked_45: boolean;
  checked_4: boolean;
  checked_35: boolean;
  checked_3: boolean;
  checked_25: boolean;
  checked_2: boolean;
  checked_15: boolean;
  checked_1: boolean;
  checked_05: boolean;
  checked_0: boolean;

  @Input('news_id') news_id: any;
  @Input('ratingVal') ratingVal: any;

  constructor() { }

  ngOnInit() {
    console.log('in ng-ratings module init');
    console.log(this.ratingVal);
    this.ratingVal = this.ratingVal + 0;
    this.rate(this.ratingVal);

    // this.connection = this.newsRatingsService.getMessages().subscribe(message => {
    //       this.messageObjectResponse = message;
    //         console.log('receiving message: ');
    //         console.log(this.messageObjectResponse);
    //       switch (this.messageObjectResponse.type) {
    //           case 'rate-news':
    //               this.rate(this.messageObjectResponse.ratingVal);
    //           break;
    //           case 'error-message':
    //             this.toast(this.messageObjectResponse.message);
    //             this.messageObjectResponse = {};
    //           break;
    //           case 'sent-rating':
    //             this.toast(this.messageObjectResponse.message);
    //             this.messageObjectResponse = {};
    //           break;

    //           default:
    //           break;
    //           }
    //           this.ratingVal = this.messageObjectResponse.average;
    // });
  }

  rate(rateVal: number) {
      if (rateVal > 0 && rateVal <= 0.5) {
          this.checked_05 = true;
      } else if (rateVal > 0.5 && rateVal <= 1) {
          this.checked_1 = true;
      } else if (rateVal > 1 && rateVal <= 1.5) {
          this.checked_15 = true;
      } else if (rateVal > 1.5 && rateVal <= 2) {
          this.checked_2 = true;
      } else if (rateVal > 2 && rateVal <= 2.5) {
          this.checked_25 = true;
      } else if (rateVal > 2.5 && rateVal <= 3) {
          this.checked_3 = true;
      } else if (rateVal > 3 && rateVal <= 3.5) {
          this.checked_35 = true;
      } else if (this.ratingVal > 3.5 && rateVal <= 4) {
          this.checked_4 = true;
      } else if (rateVal > 4 && rateVal <= 4.5) {
          this.checked_45 = true;
      } else if (rateVal > 4.5) {
          this.checked_5 = true;
      }
  }

  send(event: any) {
    console.log(event);

    // this.messageObject.rating = event;
    // this.messageObject.news_id = this.news_id;

  }

  // toast(msg, t = 4000) {
  //   const config = new MdSnackBarConfig();
  //   config.duration = t;
  //   this.snackBar.open(msg, 'Cerrar', config);
  // }

}
