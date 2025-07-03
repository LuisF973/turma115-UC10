function filtraMaiores(lista, limite) {
 if (!Array.isArray(lista) || lista.length === 0 
  || typeof limite !== 'number'
    || lista.some(num => typeof num !== 'number')) {
    throw new Error('Não é possivel realizar o filtro');

 }

    return lista.filter((num)=> num > limite)

}

module.exports = filtraMaiores;