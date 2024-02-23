import { Schema, model } from "mongoose";

const QrSchema = new Schema(
  {
    token:{type:String,}
  },
  {
    timestamps: true,
  }
);

const QrToken = model("QrToken", QrSchema);

export default QrToken;