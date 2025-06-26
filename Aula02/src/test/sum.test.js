const sum = require("../modules/sum"); // importa a função sum do módulo sum.js
describe('Testes da função sum', () => { // agrupa os testes relacionados à função sum
test('Verificar, se a soma de numeros e positiva', () => {
     expect(sum(8,8)).toBe(16); 
});

test('Verificar se a soma de números negativos está correta', () => {
    expect(sum(-5, -3)).toBe(-8);
});

test('Verificar se a soma de números positivos e negativos está correta', () => {
    expect(sum(-8, 8)).toBe(0);
});

test('Verificar se a soma de números com testo', () => {
    expect(sum(-8, "8")).toBe("Erro nao e possivel realizar a soma de um numero negativo com uma string");
});


});
