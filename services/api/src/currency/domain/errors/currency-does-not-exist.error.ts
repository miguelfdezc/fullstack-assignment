import { DomainError } from "src/utils/errors/domain.error";

export class CurrencyDoesNotExistError extends DomainError {
  constructor(errMessage) {
    super(errMessage);
  }

  static withCode(code: string) {
    throw new CurrencyDoesNotExistError(
      `Subscribed currency with code: ${code} does not exist`
    );
  }
}
