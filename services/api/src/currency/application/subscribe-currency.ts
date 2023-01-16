import { Currency } from "../domain/models/currency";
import { ICurrencyRepository } from "../domain/repository/currency-repository.interface";
import { MongooseCurrencyRepository } from "../infrastructure/repositories/mongoose-currency.repository";

export class SubscribeCurrency {
  private currencyRepository: ICurrencyRepository;
  constructor({ currencyRepository = new MongooseCurrencyRepository() }) {
    this.currencyRepository = currencyRepository;
  }

  async execute(currencyReq) {
    const currencyDB = await this.currencyRepository.findByCode(
      currencyReq.code
    );

    if (currencyDB) {
      //throw currency already subscribed
    }

    const currency = Currency.create({
      code: currencyReq.code,
      value: currencyReq.value,
    });
    await this.currencyRepository.subscribe(currency as Currency);
    return currency;
  }
}
