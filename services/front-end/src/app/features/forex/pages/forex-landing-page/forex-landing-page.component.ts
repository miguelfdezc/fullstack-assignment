import { Component, OnInit } from '@angular/core';
import { Currency } from '../../currency';
import { CurrencyService } from '../../currency.service';

@Component({
  selector: 'app-forex-landing-page',
  templateUrl: './forex-landing-page.component.html',
  styleUrls: ['./forex-landing-page.component.scss']
})
export class ForexLandingPageComponent implements OnInit {
  currencies: Currency[] = [];
  code: string;

  constructor(private currencyService: CurrencyService) {}

  displayedColumns: string[] = ['from_symbol', 'to_symbol', 'low_today', 'high_today', 'low_yesterday', 'high_yesterday', 'actions'];

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies(): void {
    this.currencyService.findAllSubscribedCurrencies()
    .subscribe(response => this.currencies = response.data);
  }

  subscribe(code: string): void {
    this.currencyService.subscribe(code)
    .subscribe(() => this.getCurrencies());
  }

  unsubscribe(code: string): void {
    this.currencyService.unsubscribe(code)
    .subscribe(() => this.getCurrencies());
  }
}
