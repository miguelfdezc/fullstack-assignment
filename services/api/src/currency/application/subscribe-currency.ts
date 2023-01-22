import {
  Currency,
  ICurrencyRepository,
} from "../domain";
import { MongooseCurrencyRepository } from "../infrastructure";

export class SubscribeCurrency {
  private currencyRepository: ICurrencyRepository;
  constructor({ currencyRepository = new MongooseCurrencyRepository() }) {
    this.currencyRepository = currencyRepository;
  }

  async execute(currencyReq) {
    let currency: void | Currency = await this.currencyRepository.findByCode(currencyReq.code);
    if (currency) {
      currency.subscribe();
    } else {
      currency = Currency.create({ code: currencyReq.code });
    }

    await this.currencyRepository.update(currency as Currency);
    return currency;
  }
}
