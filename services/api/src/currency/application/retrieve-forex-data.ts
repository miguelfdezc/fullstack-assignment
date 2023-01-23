import { ICurrencyRepository } from "../domain";
import { MongooseCurrencyRepository } from "../infrastructure";

export class RetrieveForexData {
  private currencyRepository: ICurrencyRepository;
  constructor({ currencyRepository = new MongooseCurrencyRepository() }) {
    this.currencyRepository = currencyRepository;
  }

  async execute(code: string) {
    return await this.currencyRepository.retrieveForexData(code);
  }
}
