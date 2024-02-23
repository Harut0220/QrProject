import { Schema, model } from "mongoose";

const QrSchema = new Schema(
  {
    code:{type:String},
    uniqToken:{type:String}
  },
  {
    timestamps: true,
  }
);

const QrToken = model("QrToken", QrSchema);

export default QrToken;