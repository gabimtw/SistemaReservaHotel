import express from "express";
import ClientesController from "../controllers/ClientesController.js";

const ClientesRouters = express.Router();

ClientesRouters.get("/", ClientesController.getAll);
ClientesRouters.post("/", ClientesController.create);

export default ClientesRouters;