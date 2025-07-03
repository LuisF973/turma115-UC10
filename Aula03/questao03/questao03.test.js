//3. ehPrimo(n)
// Retorna true se o número for primo.

// Entrada: 7 → true (tipo: boolean)
// Entrada: 9 → false (tipo: boolean)

const ehPrimo = require("./questao03.js");

describe('Testes para validar a função ehPrimo', () => {

    test('Deve retornar true para um número primo', () => {
        expect(ehPrimo(7)).toBeTruthy(); // 7 é primo
    });

    test('Deve retornar false para um número não primo', () => {
        expect(ehPrimo(8)).toBeFalsy(); // 8 não é primo
    });

    test('Deve lançar erro quando nenhum argumento é passado', () => {
        expect(() => ehPrimo()).toThrow('Não é possivel verificar se o valor é primo');
    });

    test('Deve lançar erro para valores inválidos', () => {
        expect(() => ehPrimo(-7)).toThrow('Não é possivel verificar se o valor é primo');
        expect(() => ehPrimo('sete')).toThrow('Não é possivel verificar se o valor é primo');
        expect(() => ehPrimo([7])).toThrow('Não é possivel verificar se o valor é primo');
    });

});

