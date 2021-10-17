import CadastroPessoa from "../src/core/usecases/CadastroPessoa";
import AdapterPessoa from "../src/adapter/AdapterPessoa";
import { v4 as uuidv4 } from 'uuid';
import GenericRepositoryMemory from "../src/core/repository/GenericRepositoryMemory";
import RepositoryPessoa from "../src/infra/repository/RepositoryPessoa";

test("Cadastrando pessoa", async function() {
    const repository = new RepositoryPessoa();
    const cadastroPessoa = new CadastroPessoa(repository);
    const pessoa = AdapterPessoa.create(uuidv4(), "99999", "Wender", new Date
    ("2021-08-04T23:00:00.000Z"), new Date("2021-08-07T23:22:15.000"),0);
    expect(await cadastroPessoa.create(pessoa)).toBe(true)
    const pessoaCadastrada = await cadastroPessoa.findByID(pessoa.id)
    expect(pessoaCadastrada.nome).toBe("Wender")
});

test("Atualizando pessoa", async function() {
    const repository = new RepositoryPessoa();
    const cadastroPessoa = new CadastroPessoa(repository);
    const pessoa =  await cadastroPessoa.findByID("08ab6ade-b7cd-4a26-90ef-7a1f434038e0")
    pessoa.nome = "Regina Celi Ferreira dos Santos";
    await cadastroPessoa.update(pessoa);
    expect((await cadastroPessoa.findByID("08ab6ade-b7cd-4a26-90ef-7a1f434038e0")).nome).toBe("Regina Celi Ferreira dos Santos");
});

test("Deletando uma pessoa", async function() {
    const repository = new RepositoryPessoa();
    const cadastroPessoa = new CadastroPessoa(repository);
    const pessoa =  await cadastroPessoa.findByID("08ab6ade-b7cd-4a26-90ef-7a1f434038e0")
    expect(await cadastroPessoa.delete(pessoa)).toBe(true)
});

test("Buscando por ID", async function() {
    const repository = new RepositoryPessoa();
    const cadastroPessoa = new CadastroPessoa(repository);
    const pessoa =  await cadastroPessoa.findByID("08ab6ade-b7cd-4a26-90ef-7a1f434038e0")
    expect(pessoa.id).toBe("08ab6ade-b7cd-4a26-90ef-7a1f434038e0")
});

test("Listando todos", async function() {
    const repository = new RepositoryPessoa();
    const cadastroPessoa = new CadastroPessoa(repository);
    const pessoa =  await cadastroPessoa.listAll()
    expect(pessoa.length).toBe(3)
    console.log(pessoa)
});

