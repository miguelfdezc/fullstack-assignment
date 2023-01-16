import { CurrencyDoesNotExistError } from "../domain/errors/currency-does-not-exist.error";
import { ICurrencyRepository } from "../domain/repository/currency-repository.interface";
import { MongooseCurrencyRepository } from "../infrastructure/repositories/mongoose-currency.repository";

export class UnsubscribeCurrency {
  private currencyRepository: ICurrencyRepository;
  constructor({ currencyRepository = new MongooseCurrencyRepository() }) {
    this.currencyRepository = currencyRepository;
  }

  async execute(code: string) {
    const currency = await this.currencyRepository.findByCode(code);
    if (!currency) {
      return CurrencyDoesNotExistError.withCode(code);
    }

    currency.unsubscribe();
    await this.currencyRepository.unsubscribe(currency);
  }
}
