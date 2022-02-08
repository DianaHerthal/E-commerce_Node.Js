import ICategoryDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";
import AppError from "../../../shared/errors/AppError";

/**
 * O service terá toda a regra de negócio. Cada service é responsável por
 * uma única atividade.
 *
 * Por Exemplo: Esse service é o responsável por cadastrar uma categoria.
 * Todas as operações/regras/verificações que precisam ser feitas para que
 * a categoria seja cadastrada devem ser feitas aqui
 *
 * Como um service só tem uma função ele deve ter apenas um método público
 */
export default class CreateCategoryService {
     public async execute(data: ICategoryDTO): Promise<Category | AppError> {
          if (!data) {
               return new AppError(
                    "Necessario descrição para o cadastro da categoria"
               );
          }

          const categoryRepository = new CategoryRepository();

          const category = categoryRepository.create(data);

          return category;
     }
}
