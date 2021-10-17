import BaseModel from "./BaseModel";

export default class Marca extends BaseModel {
    id: string;
    codigo?: string | undefined;
    nome?: string | undefined;
    dataCadastro: Date;
    dataAlterado: Date;
    flagExcluido: number;

    
    constructor(id: string, codigo: string, nome: string, dataCadastro: Date, dataAlterado: Date, flagExcluido: number) {
        super();
        this.id = id
        this.codigo = codigo
        this.nome = nome 
        this.dataCadastro = dataCadastro
        this.dataAlterado = dataAlterado
        this.flagExcluido = flagExcluido
    }

}