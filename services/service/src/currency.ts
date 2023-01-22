import { Currency, TimeSerie } from "./models";
import CurrencySchema from "./schema/mongoose-currency.schema";

export const getSubscribedCurrencies = async (): Promise<Currency[]> => {
  const subscribedCurrencies = await CurrencySchema.find({
    hasSubscription: true,
  });

  return subscribedCurrencies.map((currency) => Currency.fromPrimitives({
    id: currency._id,
    code: currency.code,
    hasSubscription: currency.hasSubscription,
    history: currency.history
  }));
}

export const updateCurrencyHistory = async (currency: Currency, history: TimeSerie[]): Promise<Currency> => {
  const document = {
    _id: currency.id,
    code: currency.code,
    hasSubscription: currency.hasSubscription,
    history: history.map((timeSerie: TimeSerie) => ({
      date: timeSerie.date,
      open: timeSerie.open,
      high: timeSerie.high,
      low: timeSerie.low,
      close: timeSerie.close
    }))
  };
  await CurrencySchema.updateOne(
    { _id: currency.id },
    { $set: document },
    { upsert: true }
  );
  return currency;
}
