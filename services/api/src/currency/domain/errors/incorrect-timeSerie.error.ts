import { DomainError } from "@app/utils";

export class IncorrectTimeSerieError extends DomainError {
  constructor(errMessage) {
    super(errMessage);
  }

  static withValues({ date, open, high, low, close }) {
    throw new IncorrectTimeSerieError(`Invalid time serie date : ${date}, open : ${open}, high : ${high}, low : ${low}, close : ${close}`);
  }
}
