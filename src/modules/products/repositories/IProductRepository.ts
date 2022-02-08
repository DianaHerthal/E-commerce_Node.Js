import { UpdateResult, DeleteResult } from "typeorm";
import IProductDTO from "../dtos/IProductDTO";
import Product from "../infra/typeorm/entities/Product";

/**
 * Interface que define quais serão os métodos do repositório de Product
 * Todos os métodos que o repositório terá devem ser primeiramente definidos aqui
 */
export default interface IProductRepository {
     /**
      * data são os dados do Produto, deve ter o tipo IProductDTO
      * Promise<Product> é o tipo do retorno do método
      */

     create(data: IProductDTO): Promise<Product>;

     get(): Promise<Product[]>;

     findOne(id: number, data: IProductDTO): Promise<Product | undefined>;

     delete(id: number): Promise<DeleteResult>;

     update(data: IProductDTO, id: number): Promise<Product>;
}
