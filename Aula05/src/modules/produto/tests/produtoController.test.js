const Produto = require('../models/produtoModel');
const ProdutoControler = require('../controllers/produtoController');
const { sequelize } = require('../../../config/configDB');

beforeAll(async () => {
    await sequelize.sync({ force: true })
})
afterAll(async () => {
    await sequelize.close();
})
describe('Testes do Produto Controller - Criar produto', () => {
    test('Deve criar um produto corretamente no banco de dados', async () => {
        //Aqui estamos realizando uma requisição para a criação de produto
        const req = { body: { nome: 'Feijão', preco: 4.90, estoque: 500 } }
        const produto = await ProdutoControler.criarProduto(req);
        // Analisamos a const produto para verificar os dados retornados
        expect(produto).toHaveProperty('cod_prod');
        expect(produto.nome).toBe('Feijão');
        expect(produto.preco).toBe(4.90);
    });

    test('Deve retornar um erro caso não seja passado parametros no body', async () => {
        //Aqui estamos realizando uma requisição para a criação de produto
        const req = { body: {} }
        // const produto = await ProdutoControler.criarProduto(req);
        // Analisamos a const produto para verificar os dados retornados
         await expect(ProdutoControler.criarProduto(req)).rejects.toThrow('Todos os campos devem ser preenchidos');
         await expect(ProdutoControler.criarProduto(req)).rejects.toThrow('Todos os campos devem ser preenchidos');
         await expect(ProdutoControler.criarProduto(req)).rejects.toThrow('Todos os campos devem ser preenchidos');
    });
    
    test('Deve retornar um erro caso não seja passado o parametro estoque', async () => {
        //Aqui estamos realizando uma requisição para a criação de produto
        const req = { body: { nome:'Feijao',  preco: 4.90 } }
        // const produto = await ProdutoControler.criarProduto(req);
        // Analisamos a const produto para verificar os dados retornados
         await expect(ProdutoControler.criarProduto(req)).rejects.toThrow('Todos os campos devem ser preenchidos');
    });

    test('Deve retornar um erro caso não seja passado o parametro nome', async () => {
        //Aqui estamos realizando uma requisição para a criação de produto
        const req = { body: { nome:'', preco: 4.90,  estoque: 500 } }
        // const produto = await ProdutoControler.criarProduto(req);
        // Analisamos a const produto para verificar os dados retornados
         await expect(ProdutoControler.criarProduto(req)).rejects.toThrow('Todos os campos devem ser preenchidos');
    });

    test('Deve retornar um erro caso o parametro numero seja passado como string', async () => {
        //Aqui estamos realizando uma requisição para a criação de produto
        const req = { body: { nome:'Feijão', preco: '4.90', estoque: 500 } }
        // const produto = await ProdutoControler.criarProduto(req);
        // Analisamos a const produto para verificar os dados retornados
         await expect(ProdutoControler.criarProduto(req)).rejects.toThrow('Tipo de dado inválido');
    });
})
