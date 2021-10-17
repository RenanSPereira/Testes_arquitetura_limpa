import AdapterPessoa from "./AdapterPessoa";
import AdapterMarca from "./AdapterMarca";

export default class GenericAdpter {
    
    static fromDataBase(model: any, entity: string): any {
        if(entity === 'pessoa') {
            return AdapterPessoa.fromDataBase(model)
        }
        if(entity === 'marca') {
            return AdapterMarca.fromDataBase(model)
        }
    }

    static toDataBase(model: any, entity: string) {
        if(entity === 'pessoa') {
            return AdapterPessoa.toDataBase(model, entity)
        }
        if(entity === 'marca') {
            return AdapterMarca.toDataBase(model, entity)
        }
    }
}