import { Currency, ICurrencyRepository, TimeSerie } from "@app/currency/domain";
import { Nullable } from "@app/utils";
import CurrencySchema from "../schema/mongoose-currency.schema";
export class MongooseCurrencyRepository implements ICurrencyRepository {
  private toDomain(currencyDB) {
    return Currency.fromPrimitives({
      id: currencyDB._id,
      code: currencyDB.code,
      hasSubscription: currencyDB.hasSubscription,
      history: currencyDB.history
    });
  }

  private fromDomain(currency: Currency) {
    return {
      _id: currency.id,
      code: currency.code,
      hasSubscription: currency.hasSubscription,
      history: currency.history
    };
  }

  async update(currency: Currency): Promise<void> {
    const document = this.fromDomain(currency);
    await CurrencySchema.updateOne(
      { _id: currency.id },
      { $set: document },
      { upsert: true }
    );
  }

  async findAllSubscriptions(): Promise<Currency[]> {
    const subscribedCurrencies = await CurrencySchema.find({
      hasSubscription: true,
    });

    return subscribedCurrencies.map((currency) => this.toDomain(currency));
  }

  async findByCode(code: string): Promise<Nullable<Currency>> {
    const currency = await CurrencySchema.findOne({ code: code });
    return currency === null ? null : this.toDomain(currency);
  }

  async retrieveForexData(code: string): Promise<TimeSerie[]> {
    const forexData: TimeSerie[] = await (await this.findByCode(code)).history;
    return forexData;
  }
}
