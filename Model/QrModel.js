import { Schema, model } from "mongoose";

const QrSchema = new Schema(
  {
    qr:{type:String},
    uniqId:{type:String}
  },
  {
    timestamps: true,
  }
);

const QrToken = model("QrToken", QrSchema);

export default QrToken;