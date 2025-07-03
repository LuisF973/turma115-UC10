// 2. filtraMaiores(lista, limite)
// Retorna os números maiores que o limite informado.

// Entrada: [10, 20, 30], limite 15
// Saída esperada: [20, 30] (tipo: array<number>)
// O array resultante deve conter o número 30


const filtraMaiores = require("./questao02.js");


describe('Testes para a função filtraMaiores', () => {
    test('Testes para retornar o resultado corretamente', () =>{
        expect(filtraMaiores([10,30,80,70], 20)).toEqual([30, 80, 70]); // sempre usado toEqual para comparar arrays
        expect(filtraMaiores([10,30,80,70], 20)).toContain(30); // verifica se o array contém o número 30
    });
    test('Testes para retornar o resultado corretamente com parametro numero real', () =>{
        expect(filtraMaiores([10,30,80,70], 20.6)).toEqual([30, 80, 70]); // sempre usado toEqual para comparar arrays
        expect(filtraMaiores([10,30,80,70], 20.6)).toContain(30); 
    });
    test('Teste para retornar erro em relação  parametros', ()=>{
        expect(() => filtraMaiores()).toThrow('Não é possivel realizar o filtro');
        expect(() => filtraMaiores([], 5)).toThrow('Não é possivel realizar o filtro');
        expect(() => filtraMaiores([10,30,80,70], "teste")).toThrow('Não é possivel realizar o filtro');
        expect(() => filtraMaiores([10,30,80,'70'], 30)).toThrow('Não é possivel realizar o filtro');
    });

})