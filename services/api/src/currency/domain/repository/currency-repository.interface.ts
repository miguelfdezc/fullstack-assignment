import { Nullable } from "src/utils";
import { TimeSerie } from "../models";
import { Currency } from "../models/currency";

export interface ICurrencyRepository {
  update(currency: Currency): Promise<void>;
  findAllSubscriptions(): Promise<Currency[]>;
  findByCode(code: string): Promise<Nullable<Currency>>;
  retrieveForexData(code: string): Promise<TimeSerie[]>;
}
