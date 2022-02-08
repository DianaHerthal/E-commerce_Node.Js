import { UpdateResult, DeleteResult } from "typeorm";
import ICategoryDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";

/**
 * Interface que define quais serão os métodos do repositório de Category
 * Todos os métodos que o repositório terá devem ser primeiramente definidos aqui
 */
export default interface IcategoryRepository {
     /**
      * data são os dados da Categoria, deve ter o tipo ICategoryDTO
      * Promise<Category> é o tipo do retorno do método
      */

     create(data: ICategoryDTO): Promise<Category>;

     get(): Promise<Category[]>;

     findOne(id: number): Promise<Category | undefined>;

     delete(id: number): Promise<DeleteResult>;

     update(data: ICategoryDTO, id: number): Promise<UpdateResult>;
}
