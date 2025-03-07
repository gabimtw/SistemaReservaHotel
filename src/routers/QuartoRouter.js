import express from "express";
import QuartoController from "../controllers/QuartoController.js";

const QuartoRouter = express.Router();

QuartoRouter.get("/", QuartoController.getAll);
QuartoRouter.post("/", QuartoController.create);

export default QuartoRouter;
