
export class DataTableOutput<T>{

    QuantidadePagina: number;
    QuantidadeTotal: number;
    Query: T[];

    constructor(obj?: any) {
        this.QuantidadePagina = obj && obj.QuantidadePagina || 0;
        this.QuantidadeTotal = obj && obj.QuantidadeTotal || 0;
        this.Query = obj && obj.Query || [];
    }
}
