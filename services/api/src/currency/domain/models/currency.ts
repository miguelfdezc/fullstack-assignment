import { Types } from "mongoose";
import { CurrencyAlreadySubscribedError, CurrencyNotSubscribedError, IncorrectCurrencyError } from "../errors";
import { TimeSerie } from "./timeSerie";

export class Currency {
  private _id: Types.ObjectId;
  private _code: string;
  private _hasSubscription: boolean;
  private _history: TimeSerie[];

  private constructor({ id, code, hasSubscription, history }) {
    this._id = id;
    this._code = code;
    this._hasSubscription = hasSubscription;
    this._history = history;
  }

  static fromPrimitives({ id, code, hasSubscription, history }) {
    return new Currency({
      id: id,
      code: code,
      hasSubscription: hasSubscription,
      history: history
    });
  }

  static create({ id = new Types.ObjectId(), code, hasSubscription = true, history = [] }) {
    if (!code) {
      return IncorrectCurrencyError.withCode(code);
    }

    return new Currency({
      id: id,
      code: code,
      hasSubscription: hasSubscription,
      history: history
    });
  }

  get id(): Types.ObjectId {
    return this._id;
  }

  get code(): string {
    return this._code;
  }

  get hasSubscription(): boolean {
    return this._hasSubscription;
  }

  get history(): TimeSerie[] {
    return this._history;
  }

  subscribe() {
    if (this._hasSubscription) {
      return CurrencyAlreadySubscribedError.withCode(this._code);
    }

    this._hasSubscription = true;
  }

  unsubscribe() {
    if (!this._hasSubscription) {
      return CurrencyNotSubscribedError.withCode(this._code);
    }

    this._hasSubscription = false;
  }
}
