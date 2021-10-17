import BaseModel from "./BaseModel";

export default class Pessoa extends BaseModel {
    id: string;
    nome?: string | undefined;
    codigo?: string | undefined;
    dataCadastro: Date;
    dataAlterado: Date;
    flagExcluido: number;
    
    constructor(id: string, codigo: string, nome: string, dataCadastro: Date, dataAlterado: Date, flagExcluido: number) {
        super()
        this.id = id;
        this.nome = nome;
        this.codigo = codigo
        this.dataCadastro = dataCadastro;
        this.dataAlterado = dataAlterado
        this.flagExcluido = flagExcluido
    }

}