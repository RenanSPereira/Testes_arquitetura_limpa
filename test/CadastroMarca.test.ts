import CadastroMarca from "../src/core/usecases/CadastroMarca"
import AdapterMarca from "../src/adapter/AdapterMarca"
import { v4 as uuidv4 } from 'uuid';
import RepositoryMarca from "../src/infra/repository/RepositoryMarca";


test("Cadastrando Marca", async function() {
    const repository = new RepositoryMarca()
    const cadastroMarca = new CadastroMarca(repository)
    const marca = AdapterMarca.create(uuidv4(), "99999", "Premier", new Date("2021-08-04T23:00:00.000Z"), new Date("2021-08-07T23:22:15.000"),0)
    expect(await cadastroMarca.create(marca)).toBe(true)
})

test("Atualizando Marca", async function() {
    const repository = new RepositoryMarca()
    const cadastroMarca = new CadastroMarca(repository)
    const marca = await cadastroMarca.findByID("asdfdsfdsf")
    expect(marca.nome).toBe("ROYAL")
    marca.nome = "Royal Canin"
    expect(await cadastroMarca.update(marca)).toBe(true)
    expect((await cadastroMarca.findByID("asdfdsfdsf")).nome).toBe("Royal Canin")
})

test("Deletando Marca", async function() {
    const repository = new RepositoryMarca()
    const cadastroMarca = new CadastroMarca(repository)
    const marca = await cadastroMarca.findByID("asdfdsfdsf")
    expect(await cadastroMarca.delete(marca)).toBe(true)
})

test("Buscando por ID", async function() {
    const repository = new RepositoryMarca()
    const cadastroMarca = new CadastroMarca(repository)
    const marca = await cadastroMarca.findByID("asdfdsfdsf")
    expect(marca.id).toBe("asdfdsfdsf")
})

test("Listando Todos", async function() {
    const repository = new RepositoryMarca()
    const cadastroMarca = new CadastroMarca(repository)
    const marca = await cadastroMarca.listAll()
    expect(marca.length).toBe(1)
    console.log(marca)
})