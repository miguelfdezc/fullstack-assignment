import { TimeSerie } from "../models";

export const forexToTimeSeries = (data: any): TimeSerie[] => {
  let timeSeries: TimeSerie[] = [];
  for (const [key, value] of Object.entries(data["Time Series FX (Daily)"])) {
    const timeSerie: void | TimeSerie = TimeSerie.create({
      date: new Date(key),
      open: value["1. open"],
      high: value["2. high"],
      low: value["3. low"],
      close: value["4. close"]
    });
    if (timeSerie) {
      timeSeries.push(timeSerie);
    }  
  }
  return timeSeries;
}
