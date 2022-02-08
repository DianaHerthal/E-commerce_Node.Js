/**
 * Interface que define a tipagem de um produto
 */
export default class IProductDTO {
     id?: number; // id é opcional (no cadastro não precisa, mas na ediçao sim)
     nome: string;
     preco: number;
     quantidade: number;
     categoria_id?: number;
}
