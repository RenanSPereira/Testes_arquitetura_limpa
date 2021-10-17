// import RepositoryPessoa from "../../core/repository/RepositoryPessoa";
// import AdapterPessoa from "../../adapter/AdapterPessoa";
// import Pessoa from "../../core/models/Pessoa";
// import DataBaseMemory from "../database/databaseMemory";

// export default class RepositoryPessoaMemory implements RepositoryPessoa {
//     db: Array<any>;

//     constructor() {
//         this.db = new DataBaseMemory().getEntity("pessoa")
//     }
    
//     insert(pessoa: Pessoa): Promise<boolean> {
//         const qty = this.db.length
//         this.db.push(AdapterPessoa.toDataBase(pessoa, 'pessoa'))
        
//         if(qty < this.db.length) {
//             return Promise.resolve(true)
//         }
//         return Promise.resolve(false)
//     }
    
//     delete(pessoa: Pessoa): Promise<boolean> {
//         let id = pessoa.id
//         let obj = this.db.find(function(p) {
//             return p.pessoa_id === id;
//         });

//         if(obj !== undefined) {
//             obj.flagexcluido  = 1
//             return Promise.resolve(true)
//         }
//         return Promise.resolve(false)
//     }
    
//     update(pessoa: Pessoa): Promise<boolean> {
//         let obj = this.db.find(function(value) {
//             return value.pessoa_id === pessoa.id
//         });

//         if (obj !== undefined) {
//             obj.codigo = pessoa.codigo
//             obj.nome = pessoa.nome
//             obj.flagexcluido = pessoa.flagExcluido
//             return Promise.resolve(true);
//         }

//         return Promise.resolve(false);
//     }

//     async getByID(id: string): Promise<Pessoa | any> {
//         for(let i = 0; i < this.db.length; i++) {
//             if(this.db[i].pessoa_id === id) {
//                 return Promise.resolve(AdapterPessoa.create(
//                     this.db[i].pessoa_id, 
//                     this.db[i].codigo,
//                     this.db[i].nome, 
//                     this.db[i].datacadastro, 
//                     this.db[i].dataalterado,
//                     this.db[i].flagexcluido
//                 ))
//             } 
//        }
//     }
    
//     async list(): Promise<Array<Pessoa>> {
//         let pessoas = []
//         for(let i = 0; i < this.db.length; i++) {
//             if(this.db[i].flagexcluido !== 1) {  
//                 pessoas.push(
//                     AdapterPessoa.create(
//                         this.db[i].pessoa_id, 
//                         this.db[i].codigo, 
//                         this.db[i].nome, 
//                         this.db[i].datacadastro,
//                         this.db[i].dataalterado,
//                         this.db[i].flagexcluido
//                     )
//                 )
//             }
//         }
//         return Promise.resolve(pessoas)
//     }


// }