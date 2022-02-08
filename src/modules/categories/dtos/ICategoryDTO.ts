/**
 * Interface que define a tipagem de uma categoria
 */
export default interface ICategoryDTO {
     id?: number; // id é opcional (no cadastro não precisa, mas na ediçao sim)
     descricao: string;
}
