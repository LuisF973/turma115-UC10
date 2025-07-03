// 5. calculaDesconto(valor, percentual)
// Calcula o valor final com desconto aplicado.

// Entrada: 100, 10
// Saída esperada: 90 (tipo: number)
// O valor final deve ser menor que o valor original

const calculaDesconto = require('./questao05')

describe('Testes para validar a função calculaDesconto', () => {
    test('Deve calcular corretamente o desconto', () => {
        expect(calculaDesconto(100, 10)).toBe(90);
        expect(calculaDesconto(100, 10)).toBeLessThan(100);
    });

    test('Deve exibir mensagem de erro ao não passar parâmetros', () => {
        expect(() => calculaDesconto()).toThrow('Não é possível realizar o cálculo de desconto');
    });

    test('Deve exibir mensagem de erro ao passar parâmetros negativos', () => {
        expect(() => calculaDesconto(-100, -10)).toThrow('Não é possível realizar o cálculo de desconto');
    });

    test('Deve exibir mensagem de erro ao passar parâmetros diferentes de números', () => {
        expect(() => calculaDesconto('-100', '-10')).toThrow('Não é possível realizar o cálculo de desconto');
    });

    test('Deve exibir mensagem de erro ao passar mistura de texto e número', () => {
        expect(() => calculaDesconto('-1000', 10)).toThrow('Não é possível realizar o cálculo de desconto');
    });
});
