// 4. mensagemDeBoasVindas(nome)
// Retorna a string "Olá, {nome}! Seja bem-vindo(a)".

// Entrada: "Maria"
// Saída esperada: string contendo "Maria" (tipo: string)
// Deve conter também a palavra "Olá"

const mensagemDeBoasVindas = require("./questao04.js");


describe('Testes para validar a função mensagemDeBoasVindas', () => {

    test('Deve retornar uma mensagem de boas-vindas com o nome fornecido', () => {
        expect(mensagemDeBoasVindas("luis")).toContain("luis");
        expect(mensagemDeBoasVindas("luis")).toMatch(/Olá/);
    });

    test('Deve retornar uma mensagem de erro em relação a parâmetros incorretos', () => {
        expect(() => mensagemDeBoasVindas()).toThrow('erro ao exibir mensagem');
        expect(() => mensagemDeBoasVindas([])).toThrow('erro ao exibir mensagem');
        expect(() => mensagemDeBoasVindas({ nome: "luis" })).toThrow('erro ao exibir mensagem');
    });

});
