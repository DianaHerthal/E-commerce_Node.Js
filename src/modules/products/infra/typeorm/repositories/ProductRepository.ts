import IProductDTO from "../../../dtos/IProductDTO";
import IProductRepository from "../../../repositories/IProductRepository";
import { DeleteResult, getRepository, Repository, UpdateResult } from "typeorm";
import Product from "../entities/Product";

/**
 * É nesse arquivo que serão feitas todas as conexões com o banco de dados
 * Ele implementa a Interface de IClientREpository portanto, sempre
 * que precisar de um novo método ele deve ser criado na interface também
 */
export default class ProductRepository implements IProductRepository {
     private ormRepository: Repository<Product>;

     constructor() {
          this.ormRepository = getRepository(Product);
     }

     async create(data: IProductDTO): Promise<Product> {
          const product = await this.ormRepository.create(data);

          return this.ormRepository.save(product);
     }
     async get(): Promise<Product[]> {
          const product = await this.ormRepository.find();

          return product;
     }
     async findOne(
          id: number,
          data: IProductDTO
     ): Promise<Product | undefined> {
          const product = await this.ormRepository.findOne(id);

          return product;
     }
     async delete(id: number): Promise<DeleteResult> {
          const result = await this.ormRepository.delete(id);

          return result;
     }
     async update(data: IProductDTO, id: number): Promise<Product> {
          const result = await this.ormRepository.save(data);

          return result;
     }
}
