import express from "express";
import ReservasController from "../controllers/ReservasController.js";

const ReservasRouters = express.Router();

ReservasRouters.get("/", ReservasController.getAll);
ReservasRouters.post("/", ReservasController.create);

export default ReservasRouters;
