import { Currency } from "../models/currency";

export interface ICurrencyRepository {
  update(currency: Currency): Promise<void>;
  findAllSubscriptions(): Promise<Currency[]>;
}
