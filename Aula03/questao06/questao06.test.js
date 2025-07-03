

const isEmpty = require('./questao06');




describe('Testes para a função isEmpty', () =>{
    test('Testar se retornar true para uma entrada ""', ()=>{
       expect(isEmpty("")).toBeTruthy();
    });
    test('Testar se retornar true para uma entrada []', ()=>{
        expect(isEmpty([])).toBeTruthy();
     });
     test('Testar se retornar true para uma entrada null', ()=>{
        expect(isEmpty(null)).toBeTruthy();
     });
     test('Testar se retornar true para uma nenhuma entrada', ()=>{
        expect(isEmpty()).toBeFalsy();
     });
     test('Testar se retornar true para uma entrada vazia', ()=>{
        expect(isEmpty("null")).toBeFalsy();
     })

})