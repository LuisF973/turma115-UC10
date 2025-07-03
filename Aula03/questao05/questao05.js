function calculaDesconto(valor, percentual) {
    if (
        !valor || !percentual || valor<=0 || percentual<=0 || percentual>100
        || typeof valor !== 'number' || typeof percentual !== 'number'
    ) {
        throw new Error('Não é possível realizar o cálculo de desconto');
    }

    const total = valor - (valor * (percentual / 100));
    return total;
}

module.exports = calculaDesconto;
