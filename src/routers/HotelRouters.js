import express from "express";
import HotelController from "../controllers/HotelController.js";

const HotelRouters = express.Router();

HotelRouters.get("/", HotelController.getAll);
HotelRouters.post("/", HotelController.create);

export default HotelRouters;