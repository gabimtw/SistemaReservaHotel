import express from "express";
import HotelController from "../controllers/HotelController.js";

const HotelRouter = express.Router();

HotelRouter.get("/", HotelController.getAll);
HotelRouter.post("/", HotelController.create);

export default HotelRouter;