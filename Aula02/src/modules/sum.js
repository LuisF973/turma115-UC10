let resposta = ""

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        resposta =  "Erro nao e possivel realizar a soma de um numero negativo com uma string";
    }else{
    resposta =  a + b;
    }
    return resposta
}
module.exports = sum;