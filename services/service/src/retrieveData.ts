import axios, { AxiosResponse, AxiosError } from 'axios';
import { getSubscribedCurrencies, updateCurrencyHistory } from './currency';
import { Currency, TimeSerie } from './models';
import { forexToTimeSeries } from './utils';

declare var API_URL: string;
declare var API_KEY: string;

const FROM_SYMBOL: string = "EUR";
const ALPHAVANTAGE_FUNCTION: string = "FX_DAILY";

export const retrieveData = async (): Promise<Currency[]> => {
  let updatedCurrencies: Currency[] = [];
  const subscribedCurrencies: Currency[] = await getSubscribedCurrencies();

  for (const currency of subscribedCurrencies) {
    const forexData = await getForexData(FROM_SYMBOL, currency.code);
    const history: TimeSerie[] = forexToTimeSeries(forexData);
    const updatedCurrency: Currency = await updateCurrencyHistory(currency, history);
    updatedCurrencies.push(updatedCurrency);
  }

  return updatedCurrencies;
};

const getForexData = async (fromSymbol: string, toSymbol: string) => {
  try {
    const response: AxiosResponse = await axios.get(API_URL, {
      params: {
        function: ALPHAVANTAGE_FUNCTION,
        from_symbol: fromSymbol,
        to_symbol: toSymbol,
        apikey: API_KEY
      }
    });
    return response.data;
  } catch (err: AxiosError | Error | any) {
    console.error('Error:', err);
    throw err.message;
  }
};
