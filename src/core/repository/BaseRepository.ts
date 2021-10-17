import BaseModel from "../models/BaseModel";

export default interface BaseRepository {
    insert<T extends BaseModel>(model: T): Promise<boolean> 
    update<T extends BaseModel>(model: T): Promise<boolean>
    delete<T extends BaseModel>(model: T): Promise<boolean>
    list<T extends BaseModel>(): Promise<Array<T>>
    getByID<T extends BaseModel>(id: string): Promise<T>
}
