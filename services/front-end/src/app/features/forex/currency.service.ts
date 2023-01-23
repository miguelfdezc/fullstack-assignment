import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CurrenciesResponse, Currency, CurrencyResponse, TimeSerie, TimeSeriesResponse } from './currency';


@Injectable({ providedIn: 'root' })
export class CurrencyService {

  private apiURL: string = 'http://localhost:8080/api';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  /** GET: find all subscribed currencies */
  findAllSubscribedCurrencies(): Observable<CurrenciesResponse> {
    const url: string = `${this.apiURL}/currencies`;
    return this.http.get<CurrenciesResponse>(url);
  }

  /** POST: subscribe to a currency */
  subscribe(code: string): Observable<CurrencyResponse> {
    const url: string = `${this.apiURL}/currency`;
    return this.http.post<CurrencyResponse>(url, { code: code }, this.httpOptions);
  }

  /** PUT: unsubscribe from a currency */
  unsubscribe(code: string): Observable<CurrencyResponse> {
    const url: string = `${this.apiURL}/currency/${code}`;
    return this.http.put<CurrencyResponse>(url, undefined, this.httpOptions);
  }

  /** GET: find currency history */
  findCurrencyHistory(code: string): Observable<TimeSeriesResponse> {
    const url: string = `${this.apiURL}/currency/${code}/history`;
    return this.http.get<TimeSeriesResponse>(url);
  }
}
