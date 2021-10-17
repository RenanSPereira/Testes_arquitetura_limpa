import Marca from "../models/Marca";
import BaseRepository from "../repository/BaseRepository";

export default class CadastroMarca {
    repository: BaseRepository;
    
    constructor(repository: BaseRepository) {
        this.repository = repository
    }
    
    create(marca: Marca): Promise<boolean>{
        return this.repository.insert(marca);
    }

    findByID(id: string): Promise<Marca> {
        return this.repository.getByID(id);
    }

    delete(marca: Marca): Promise<boolean> {
        return this.repository.delete(marca);
    }

    listAll() {
        return this.repository.list();
    }
    
    update(marca: Marca): Promise<boolean> {
        return this.repository.update(marca)
    }
}