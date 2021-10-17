import Pessoa from "../core/models/Pessoa";

export default class AdapterPessoa {
    static create(id: string, codigo: string ,nome: string, dataCadastro: Date, dataAlterado: Date, flagExcluido: number) {
        return new Pessoa(id, codigo, nome, dataCadastro, dataAlterado, flagExcluido)
    }

    static fromDataBase(pessoa: any) {
        return new Pessoa(pessoa.pessoa_id, pessoa.codigo, pessoa.nome, pessoa.datacadastro, pessoa.dataalterado, pessoa.flagexcluido)
    }

    static toDataBase(pessoa: Pessoa, entity: string) {
        const model_id = entity+'_id'
        return {
            [model_id]: pessoa.id,
            codigo : pessoa.codigo,
            nome: pessoa.nome,
            datacadastro: pessoa.dataCadastro,
            dataalterado: pessoa.dataAlterado,
            flagexcluido: pessoa.flagExcluido
        }
    }
}