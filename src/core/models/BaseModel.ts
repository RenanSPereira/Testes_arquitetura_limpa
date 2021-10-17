export default abstract class BaseModel {
    abstract id: string
    abstract codigo?: string
    abstract nome?: string
    abstract dataCadastro: Date
    abstract dataAlterado: Date
    abstract flagExcluido: number
}