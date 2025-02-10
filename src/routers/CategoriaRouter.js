import express from "express";
import CategoriaController from "../controllers/CategoriaController.js";

const CategoriaRouters = express.Router(); //Cria um objeto Router, que permite definir rotas para categorias

CategoriaRouters.get("/", CategoriaController.getAll);//busca todas as categorias no banco e retorna um JSON.
CategoriaRouters.post("/", CategoriaController.create);//cria nova categoria no banco e retorna o objeto.

export default CategoriaRouters;