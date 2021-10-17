import BaseRepository from "../repository/BaseRepository";
import Pessoa from "../models/Pessoa";

export default class CadastroPessoa {
    repository: BaseRepository;
    
    constructor(repository: BaseRepository) {
        this.repository = repository
    }
    
    create(pessoa: Pessoa): Promise<boolean>{
        return this.repository.insert(pessoa);
    }

    findByID(id: string): Promise<Pessoa> {
        return this.repository.getByID(id);
    }

    delete(pessoa: Pessoa): Promise<boolean> {
        return this.repository.delete(pessoa);
    }
    listAll() {
        return this.repository.list();
    }
    update(pessoa: Pessoa): Promise<boolean> {
        return this.repository.update(pessoa)
    }
}