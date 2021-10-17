import BaseRepository from "./BaseRepository";
import BaseModel from "../models/BaseModel";
import DataBaseMemory from "../../infra/database/databaseMemory";
import GenericAdpter from "../../adapter/GenericAdapter";

export default abstract class GenericRepositoryMemory implements BaseRepository {
    protected entity: string;
    private db : any

    constructor(entity: string) {
        this.entity = entity
        this.db = new DataBaseMemory().getEntity(entity)
    }

    insert<T extends BaseModel>(model: T): Promise<boolean> {
        const qty = this.db.length
        this.db.push(GenericAdpter.toDataBase(model, this.entity))
   
        if(qty < this.db.length) {
            return Promise.resolve(true)
        }
        return Promise.resolve(false)
    }

    update<T extends BaseModel>(model: T): Promise<boolean> {
        const model_id =this.entity+'_id'
        let obj = this.db.find(function(value: any) {
            return value[model_id] === model.id
        });

        if (obj !== undefined) {
            obj.codigo = model.codigo
            obj.nome = model.nome
            obj.flagexcluido = model.flagExcluido
            return Promise.resolve(true);
        }

        return Promise.resolve(false);
    }
    
    delete<T extends BaseModel>(model: T): Promise<boolean> {
        const id = model.id
        const model_id = this.entity+'_id'

        let obj = this.db.find(function(p: any) {
            return p[model_id] === id;
        });

        if(obj !== undefined) {
            obj.flagexcluido  = 1
            return Promise.resolve(true)
        }
        return Promise.resolve(false)
    }
    
    list<T extends BaseModel>(): Promise<Array<T>> {
        let list = []
        for(let i = 0; i < this.db.length; i++) {
            if(this.db[i].flagexcluido !== 1) {  
                list.push(
                    GenericAdpter.fromDataBase(this.db[i], this.entity)
                )
            }
        }
        return Promise.resolve(list)
    }

    async getByID(id: string): Promise<BaseModel | any> {
        const model_id = this.entity+'_id'
        for(let i = 0; i < this.db.length; i++) {
            if(this.db[i][model_id] === id) {
                return Promise.resolve(GenericAdpter.fromDataBase(this.db[i], this.entity))
            } 
       }
    }

}