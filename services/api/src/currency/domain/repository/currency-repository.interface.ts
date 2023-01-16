import { Currency } from "../models/currency";

export interface ICurrencyRepository {
  subscribe(currency: Currency): Promise<void>;
  findByCode(code: string): Promise<Currency | void | null>;
  unsubscribe(currency: Currency): Promise<void>;
}
