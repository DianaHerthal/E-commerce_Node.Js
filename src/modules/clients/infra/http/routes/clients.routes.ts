import { Router } from "express";
import ClientsController from "../controllers/ClientsController";

/*
 * Define as rotas a serem usadas no insomnia
 */
const routes = Router();

routes.post("/", ClientsController.create);

routes.get("/", ClientsController.show);

routes.get("/:id", ClientsController.showOne);

routes.delete("/:id", ClientsController.delete);

routes.put("/:id", ClientsController.update);

export default routes;
