import { DomainError } from "@app/utils";

export class IncorrectCurrencyError extends DomainError {
  constructor(errMessage) {
    super(errMessage);
  }

  static withConfig(code: string, value: number) {
    throw new IncorrectCurrencyError(
      `Incorrect currency configuration with code: ${code} and value: ${value}`
    );
  }
  static withValue(value: number) {
    throw new IncorrectCurrencyError(
      `Currency value must be greater than zero: ${value}`
    );
  }
}
