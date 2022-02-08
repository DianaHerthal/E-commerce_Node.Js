import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import Product from "../infra/typeorm/entities/Product";
import IProductDTO from "../dtos/IProductDTO";
import AppError from "../../../shared/errors/AppError";

/**
 * O service terá toda a regra de negócio. Cada service é responsável por
 * uma única atividade.
 *
 * Por Exemplo: Esse service é o responsável por cadastrar um produto.
 * Todas as operações/regras/verificações que precisam ser feitas para que
 * o produto seja cadastrado devem ser feitas aqui
 *
 * Como um service só tem uma função ele deve ter apenas um método público
 */
export default class CreateProductService {
     public async execute(data: IProductDTO): Promise<Product | AppError> {
          if (!data) {
               return new AppError("Necessário dados para fazer o cadastro");
          }

          if (!data.categoria_id) {
               return new AppError(
                    "Necessário informar a qual categoria o produto petence para cadastra-lo"
               );
          }

          const repository = new ProductRepository();

          const productCreated = await repository.create(data);

          return productCreated;
     }
}
