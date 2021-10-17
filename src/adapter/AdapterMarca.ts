import Marca from "../core/models/Marca"

export default class AdapterMarca {
    static create(id: string, codigo: string ,nome: string, dataCadastro: Date, dataAlterado: Date, flagExcluido: number) {
        return new Marca(id, codigo, nome, dataCadastro, dataAlterado, flagExcluido)
    }

    static fromDataBase(marca: any) {
        return new Marca(marca.marca_id, marca.codigo, marca.nome, marca.datacadastro, marca.dataalterado, marca.flagexcluido)
    }

    static toDataBase(marca: Marca, entity: string) {
        const model_id = entity+'_id'
        return {
            [model_id]: marca.id,
            codigo : marca.codigo,
            nome: marca.nome,
            datacadastro: marca.dataCadastro,
            dataalterado: marca.dataAlterado,
            flagexcluido: marca.flagExcluido
        }
    }
}