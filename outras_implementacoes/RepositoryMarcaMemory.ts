// import Marca from "../../core/models/Marca";
// import AdapterMarca from "../../adapter/AdapterMarca";
// import RepositoryMarca from "../../core/repository/RepositiryMarca";
// import DataBaseMemory from "../database/databaseMemory";

// export default class RepositoryMarcaMemory implements RepositoryMarca {
//     db: Array<any>;

//     constructor() {
//         this.db = new DataBaseMemory().getEntity('marca')
//     }
    
//     insert(marca: Marca): Promise<boolean> {
//         const qty = this.db.length
//         this.db.push(AdapterMarca.toDataBase(marca, 'marca'))
        
//         if(qty < this.db.length) {
//             return Promise.resolve(true)
//         }
//         return Promise.resolve(false)
//     }
    
//     delete(marca: Marca): Promise<boolean> {
//         let id = marca.id
//         let obj = this.db.find(function(p) {
//             return p.marca_id === id;
//         });

//         if(obj !== undefined) {
//             obj.flagexcluido  = 1
//             return Promise.resolve(true)
//         }
//         return Promise.resolve(false)
//     }
    
//     update(marca: Marca): Promise<boolean> {
//         let obj = this.db.find(function(value) {
//             return value.marca_id === marca.id
//         });

//         if (obj !== undefined) {
//             obj.codigo = marca.codigo
//             obj.nome = marca.nome
//             obj.flagexcluido = marca.flagExcluido
//             return Promise.resolve(true);
//         }

//         return Promise.resolve(false);
//     }

//     async getByID(id: string): Promise<Marca | any> {
//         for(let i = 0; i < this.db.length; i++) {
//             if(this.db[i].marca_id === id) {
//                 return Promise.resolve(AdapterMarca.create(
//                     this.db[i].marca_id, 
//                     this.db[i].codigo,
//                     this.db[i].nome, 
//                     this.db[i].datacadastro, 
//                     this.db[i].dataalterado,
//                     this.db[i].flagexcluido
//                 ))
//             } 
//        }
//     }
    
//     async list(): Promise<Array<Marca>> {
//         let marcas = []
//         for(let i = 0; i < this.db.length; i++) {
//             if(this.db[i].flagexcluido !== 1) {  
//                 marcas.push(
//                     AdapterMarca.create(
//                         this.db[i].marca_id, 
//                         this.db[i].codigo, 
//                         this.db[i].nome, 
//                         this.db[i].datacadastro,
//                         this.db[i].dataalterado,
//                         this.db[i].flagexcluido
//                     )
//                 )
//             }
//         }
//         return Promise.resolve(marcas)
//     }


// }