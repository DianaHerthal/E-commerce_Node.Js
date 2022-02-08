import { Router } from "express";
import PedidoController from "../controllers/PedidoController";

/*
 * Define as rotas a serem usadas no insomnia
 */
const routes = Router();

routes.post("/", PedidoController.create);

routes.get("/", PedidoController.findOne);

routes.get("/:id", PedidoController.findClientOrder);

export default routes;
