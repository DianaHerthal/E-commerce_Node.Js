import Product from "../../products/infra/typeorm/entities/Product";

/**
 * Interface que define a tipagem de um pedido
 */
export default class IPedidoDTO {
     id?: number; // id é opcional (no cadastro não precisa, mas na ediçao sim)
     cliente_id?: number;
     data: string;
     status: string;
     produtos: Product[];
     forma_pagamento: string;
     valor?: number;
     desconto: number;
}
