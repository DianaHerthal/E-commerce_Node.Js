import IPedidoDTO from "../dtos/IPedidoDTO";
import Pedido from "../infra/typeorm/entities/Pedido";

/**
 * Interface que define quais serão os métodos do repositório de Pedido
 * Todos os métodos que o repositório terá devem ser primeiramente definidos aqui
 */
export default interface IPedidoRepository {
     /**
      * data são os dados do Pedido, deve ter o tipo IPedidoDTO
      * Promise<Pedido> é o tipo do retorno do método
      */

     doOrder(data: IPedidoDTO): Promise<Pedido>;

     clientOrders(id: number): Promise<Pedido[]>;

     findOne(id: number): Promise<Pedido | undefined>;
}
