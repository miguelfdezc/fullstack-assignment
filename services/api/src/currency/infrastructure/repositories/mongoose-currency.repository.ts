import { Currency } from "src/currency/domain/models/currency";
import { ICurrencyRepository } from "src/currency/domain/repository/currency-repository.interface";
import CurrencySchema from "../schema/mongoose-currency.schema";

export class MongooseCurrencyRepository implements ICurrencyRepository {
  private toDomain(currencyDB) {
    return Currency.create({
      id: currencyDB._id,
      code: currencyDB.code,
      value: currencyDB.value,
    });
  }

  private fromDomain(currency: Currency) {
    return {
      _id: currency.id,
      code: currency.code,
      hasSubscription: currency.hasSubscription,
      value: currency.value,
    };
  }

  async subscribe(currency: Currency): Promise<void> {
    const mongooseCurrency = this.fromDomain(currency);
    await CurrencySchema.create(mongooseCurrency);
  }

  async findByCode(code: string): Promise<Currency | void | null> {
    const currency = await CurrencySchema.findOne({ code: code });
    return currency === null ? null : this.toDomain(currency);
  }

  async unsubscribe(currency: Currency): Promise<void> {
    const document = this.fromDomain(currency);
    await CurrencySchema.updateOne(
      { _id: currency.id },
      { $set: document },
      { upsert: true }
    );
  }
}
