import { model, Schema } from "mongoose";

const TimeSerieSchema = new Schema(
  {
    date: Date,
    open: Number,
    high: Number,
    low: Number,
    close: Number,
  },
  {
    timestamps: true,
  }
);
const CurrencySchema = new Schema(
  {
    code: String,
    hasSubscription: Boolean,
    history: [TimeSerieSchema]
  },
  {
    timestamps: true,
  }
);

export default model("Currency", CurrencySchema);
