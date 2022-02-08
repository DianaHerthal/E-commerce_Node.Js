import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController";

/*
 * Define as rotas a serem usadas no insomnia
 */
const routes = Router();

routes.post("/", CategoriesController.create);

routes.get("/", CategoriesController.get);

routes.delete("/:id", CategoriesController.delete);

routes.get("/:id", CategoriesController.getOne);

routes.put("/:id", CategoriesController.update);

export default routes;
