import express from "express";
import QuartosController from "../controllers/QuartosController.js";

const QuartosRouters = express.Router();

QuartosRouters.get("/", QuartosController.getAll);
QuartosRouters.post("/", QuartosController.create);

export default QuartosRouters;
