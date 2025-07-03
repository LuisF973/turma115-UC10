function ehPrimo(num) {
    // isNaN verifica se o valor é um número
    if (typeof num !== 'number' || num <= 1 || isNaN(num)) {// verifica se é um número válido e maior que 1
        throw new Error('Não é possivel verificar se o valor é primo');
    }

    for (let i = 2; i < num; i++) { // verifica se o número é divisível por algum número entre 2 e num-1
        if (num % i === 0) {
            return false; // tem divisor, não é primo
        }
    }

    return true; // não encontrou divisor, é primo
}

module.exports = ehPrimo;
