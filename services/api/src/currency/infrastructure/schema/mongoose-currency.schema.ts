import { model, Schema } from "mongoose";

const CurrencySchema = new Schema(
  {
    code: String,
    hasSubscription: Boolean,
    value: Number,
  },
  {
    timestamps: true,
  }
);

export default model("CurrencySchema", CurrencySchema);
