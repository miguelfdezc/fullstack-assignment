import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forex-landing-page',
  templateUrl: './forex-landing-page.component.html',
  styleUrls: ['./forex-landing-page.component.scss']
})
export class ForexLandingPageComponent implements OnInit {
  currencies: any[] = [];

  constructor() {
    this.currencies = [
      {
        "_id": "63cc6470b9d6bf7da69b8dd1",
        "_code": "USD",
        "_hasSubscription": true,
        "_history": [
          {
            "date": "2023-01-20T00:00:00.000Z",
            "open": 1.08341,
            "high": 1.0859,
            "low": 1.0801,
            "close": 1.08556,
            "_id": "63cd36da07267199680765d5",
            "updatedAt": "2023-01-22T13:15:06.713Z",
            "createdAt": "2023-01-22T13:15:06.713Z"
          },
          {
            "date": "2023-01-19T00:00:00.000Z",
            "open": 1.07928,
            "high": 1.084,
            "low": 1.0781,
            "close": 1.08308,
            "_id": "63cd36da07267199680765d6",
            "updatedAt": "2023-01-22T13:15:06.713Z",
            "createdAt": "2023-01-22T13:15:06.713Z"
          }
        ]
      }
    ];
  }

  ngOnInit(): void {

  }

}
