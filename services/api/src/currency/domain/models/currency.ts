import { Types } from "mongoose";
import { IncorrectCurrencyError } from "../errors/incorrect-currency.error";

export class Currency {
  private _id: Types.ObjectId;
  private _code: string;
  private _hasSubscription: boolean;
  private _value: number;

  private constructor({ id, code, hasSubscription, value }) {
    this._id = id;
    this._code = code;
    this._hasSubscription = hasSubscription;
    this._value = value;
  }

  static create({
    id = new Types.ObjectId(),
    code,
    hasSubscription = true,
    value,
  }) {
    if (!code || !value) {
      return IncorrectCurrencyError.withConfig(code, value);
    }
    if (value <= 0) {
      return IncorrectCurrencyError.withValue(value);
    }

    return new Currency({
      id: id,
      code: code,
      hasSubscription: hasSubscription,
      value: value,
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
  get value(): number {
    return this._value;
  }

  unsubscribe() {
    this._hasSubscription = true;
  }
}
