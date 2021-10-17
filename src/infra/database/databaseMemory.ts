export default class DataBaseMemory {
  private pessoa: Array<any>
  private marca: Array<any>

  constructor() {
    this.pessoa = [
      
        {
          pessoa_id: '771b9140-0793-4733-96d1-e1453d6eba69',
          nome: 'Renan',
          codigo: '00001',
          datacadastro: '2021-08-04T23:00:00.000',
          dataalterado: '2021-08-07T23:22:13.000',
          flagexcluido: 0
        },
        {
          pessoa_id: '0faaa497-7c2b-4624-a098-67c3a1ee253f',
          nome: 'vanessa',
          codigo: '00002',
          datacadastro: '2021-08-04T23:00:00.000',
          dataalterado: '2021-08-07T23:22:13.000',
          flagexcluido: 0
        },
       {
        pessoa_id: '0654e066-46ea-495f-8971-4a5f09829e1a',
          nome: 'Dona Maria',
          codigo: '00003',
          datacadastro: '2021-08-04T23:00:00.000',
          dataalterado: '2021-08-07T23:22:13.000',
          flagexcluido: 0
        },
        {
          pessoa_id: '08ab6ade-b7cd-4a26-90ef-7a1f434038e0',
          nome: 'Regina',
          codigo: '00004',
          datacadastro: '2021-08-04T23:00:00.000',
          dataalterado: '2021-08-07T23:22:13.000',
          flagexcluido: 1
        },
          {
          pessoa_id: '492663ab-dabc-4b91-abac-e8e54d9f16a1',
          nome: 'Grazi',
          codigo: '00005',
          datacadastro: '2021-08-04T23:00:00.000',
          dataalterado: '2021-08-07T23:22:13.000',
          flagexcluido: 1
        }
    ]
    
    this.marca = [{
      marca_id: "asdfdsfdsf",
      codigo: "000001",
      nome: "ROYAL",
      datacadastro: '2021-08-04T23:00:00.000',
      dataalterado: '2021-08-07T23:22:13.000',
      flagexcluido: 0
    }]
  }

  
  getEntity(entity: string)  {
    if(entity === 'pessoa') {
      return this.pessoa
    } 
    if(entity === 'marca') {
      return this.marca
    }
    return []
  }
}



