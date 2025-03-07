import express from "express";
import ReservaController from "../controllers/ReservaController.js";

const ReservaRouter = express.Router();

ReservaRouter.get("/", ReservaController.getAll);
ReservaRouter.post("/", ReservaController.create);

export default ReservaRouter;
