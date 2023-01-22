import { IncorrectTimeSerieError } from "../errors";

export class TimeSerie {
  private _date: Date;
  private _open: number;
  private _high: number;
  private _low: number;
  private _close: number;

  private constructor({ date, open, high, low, close }) {
    this._date = date;
    this._open = open;
    this._high = high;
    this._low = low;
    this._close = close;
  }

  static fromPrimitives({ date, open, high, low, close }) {
    return new TimeSerie({
      date: date,
      open: open,
      high: high,
      low: low,
      close: close
    });
  }

  static create({ date, open, high, low, close }) {
    if (!date || !open || !high || !low || !close) {
      return IncorrectTimeSerieError.withValues({ date, open, high, low, close });
    }

    return new TimeSerie({
      date: date,
      open: open,
      high: high,
      low: low,
      close: close
    });
  }

  get date(): Date {
    return this._date;
  }

  get open(): number {
    return this._open;
  }
  
  get high(): number {
    return this._high;
  }
  
  get low(): number {
    return this._low;
  }
  
  get close(): number {
    return this._close;
  }
}
