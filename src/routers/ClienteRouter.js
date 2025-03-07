import express from "express";
import ClienteController from "../controllers/ClienteController.js";

const ClienteRouter = express.Router();

ClienteRouter.get("/", ClienteController.getAll);
ClienteRouter.post("/", ClienteController.create);

export default ClienteRouter;