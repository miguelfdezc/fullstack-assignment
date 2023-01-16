import { Nullable } from "src/utils";
import { Currency } from "../models/currency";

export interface ICurrencyRepository {
  subscribe(currency: Currency): Promise<void>;
  findByCode(code: string): Promise<Nullable<Currency>>;
  unsubscribe(currency: Currency): Promise<void>;
}
