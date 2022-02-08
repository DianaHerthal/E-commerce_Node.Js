import { create } from "domain";
import { Router } from "express";
import ProductsController from "../controllers/ProductsController";

/*
 * Define as rotas a serem usadas no insomnia
 */
const routes = Router();

routes.post("/", ProductsController.create);

routes.get("/", ProductsController.find);

routes.get("/find", ProductsController.findOne);

routes.delete("/", ProductsController.delete);

routes.put("/", ProductsController.update);

export default routes;
