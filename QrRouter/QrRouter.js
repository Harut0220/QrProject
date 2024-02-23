import express, { Router } from "express";
import qrController from "../QrController/QrController.js";

const qrRouter=Router()

qrRouter.get("/getQr",qrController.getQr)

export default qrRouter