const calcularVolumeCubo = require('../modules/cubo');


   
describe('Testes da função volume do Cubo', () => {
    test('Volume do cubo com aresta 2', () => {
        expect(calcularVolumeCubo(2)).toBe(8);
    });
 
    test('Volume do cubo com aresta 5', () => {
        expect(calcularVolumeCubo(5)).toBe(125);
    });
 
    test('Volume do cubo com aresta 0 (deve ser inválida)', () => {
        expect(calcularVolumeCubo(0)).toBe("valor inválido para a aresta");
    });
 
    test('Volume do cubo com valor negativo', () => {
        expect(calcularVolumeCubo(-3)).toBe("valor inválido para a aresta");
    });
 
    test('Volume do cubo com valor não numérico', () => {
        expect(calcularVolumeCubo("3")).toBe("valor inválido para a aresta");
    });
});