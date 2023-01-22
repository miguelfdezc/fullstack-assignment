export interface TimeSerie {
  _id: string;
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  updatedAt: Date;
  createdAt: Date;
}

export interface Currency {
  _id: string;
  _code: string;
  _hasSubscription: boolean;
  _history: TimeSerie[];
}

export interface CurrenciesResponse {
  data: Currency[];
}

export interface CurrencyResponse {
  data: Currency;
}

export interface TimeSeriesResponse {
  data: TimeSerie[];
}
