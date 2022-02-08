import { Request, Response } from "express";
import FindOrderService from "../../../services/FindOrderService";
import CreateOrderService from "../../../services/CreateOrderService";
import FindClientOrderService from "../../../services/FindClientOrderService";

/**
 * O controller tem acesso as requisições e é o responsável por enviar uma
 * resposta
 *
 * Por padrão ele deve ter no máximo 5 métodos (index, create, show, update e delete)
 */
class PedidoController {
     async create(request: Request, response: Response) {
          const createOrder = new CreateOrderService();

          const data = request.body;

          const result = await createOrder.execute(data);

          return response.json(result);
     }

     async findOne(request: Request, response: Response) {
          const id = Number(request.body.id);

          const findService = new FindOrderService();

          const pedido = await findService.execute(id);

          return response.json(pedido);
     }

     async findClientOrder(request: Request, response: Response) {
          const id = Number(request.params.id);

          const clientOrderService = new FindClientOrderService();

          const pedidos = await clientOrderService.execute(id);

          return response.json(pedidos);
     }
}

export default new PedidoController();
